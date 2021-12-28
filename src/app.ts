import express, { Request, Response } from 'express';
import { StaticPool } from 'node-worker-threads-pool';
import Path from 'path';
import { performance } from 'perf_hooks';


const restApi = express();
const port = 3000;
const fibWorkerPath = Path.resolve(__dirname, 'workers', 'fib.worker.js');

console.info(`worker started: ${fibWorkerPath}`);

const fibPool = new StaticPool({
    size: 12,
    task: fibWorkerPath
});


restApi.get('/fib', (req: Request, response: Response) => {

    const toCalcNumbers = [];
    for (let i = 0; i <= 45; i++) {
        toCalcNumbers.push(i);
    }
    let start = performance.now();

    Promise.all(
        toCalcNumbers.map(toCalc => fibPool.exec({ num: toCalc }))
    ).then((result) => {
        let end = performance.now();
        const timeInSeconds = (end - start) / 1000;
        response.send({results: result, timeInSeconds: timeInSeconds})
    }
    ).catch(() => response.status(500).end())
})

restApi.get('/', (req: Request, response: Response) => {
    response.send('Hello Rest Api');
})

restApi.listen(port, () => {
    console.log(`Rest Api is listening on port ${port}`);
})