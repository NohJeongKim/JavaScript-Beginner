// 연산자
let num = 10;
num += 5;
console.log(num); // 15

let num1 = 10;
let result1 = ++num1 + 5;
console.log(result1); // 16
// num1에 1이 더해진 값에 5를 더했기 때문이다.

let num2 = 10;
let result2 = num2++ + 5;
console.log(result2); // 15
// num2에 1이 더하기 전에 값에 5를 더했기 때문이다.

let num3 = 9;
let result3 = num3--;
console.log(result3); // 9

let num4 = 9;
let result4 = --num4;
console.log(result4); // 8