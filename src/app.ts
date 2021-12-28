import express, { Request, Response } from 'express';

const restApi = express();
const port = 3000;

restApi.get('/', (req: Request, response: Response) => {
    response.send('Hello Rest Api');
})

restApi.listen(port, () => {
    console.log(`Rest Api is listening on port ${port}`);
})