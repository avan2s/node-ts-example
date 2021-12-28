
import { parentPort } from 'worker_threads';
import FibonacciService from '../services/fib.service';

const fibService: FibonacciService = new FibonacciService();


parentPort?.on("message", (data: {num: number; [index:string]: any}) => {
    parentPort?.postMessage({ num: data.num, fib: fibService.fib(data.num) });
})