

// const fib = (n) => {
//     if(n <= 1) {
//         return 1;
//     }
//     return fib(n - 1) + fib(n - 2);
// }

// console.log(`fib: ${fib(40)}`);
// console.log(`fib: ${fib(40)}`);
// console.log(`fib: ${fib(40)}`);
// console.log(`fib: ${fib(40)}`);


const fib2 = (n, memo = {}) => {
    if(memo[n]) {
        return memo[n];
    }
    if(n <= 1) {
        return 1;
    }
    return memo[n] = fib2(n - 1, memo) + fib2(n - 2, memo);
}

console.log(`fib2: ${fib2(40)}`);
console.log(`fib2: ${fib2(50)}`);
console.log(`fib2: ${fib2(40)}`);
console.log(`fib2: ${fib2(40)}`);
console.log(`fib2: ${fib2(40)}`);






