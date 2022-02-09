// 비교 연산자와 조건문
console.log(10 > 5, 10 == 5, 10 != 5);
// true false true
const a = 1;
const b = "1";
console.log(a == b); // true
console.log(a === b); // false
console.log(a != b); // false
// 타입은 고려를 안 하기 때문에 1와 "1"이 같다고 보기 때문에 false이다.
console.log(a !== b); // true
// 타입도 고려하기 때문에 1와 "1"이 다르다고 보기 때문에 true이다.