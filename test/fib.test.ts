import FibonacciService from '../src/services/fib.service';

test('expect fib of 10 is 55',() => {
    let fibService: FibonacciService = new FibonacciService();
    expect(fibService.fib(10)).toBe(55);
})