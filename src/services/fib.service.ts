export default class FibonacciService {

    fib(num: number): number {
        if (num === 0) {
            return 0;
        }
        else if (num === 1) {
            return 1;
        }
        else {
            return this.fib(num - 1) + this.fib(num - 2);
        }
    }

}