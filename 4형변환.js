// 1. to String
const mathScore = 85;
const engScore = 70;
const avg = (mathScore + engScore) / 2;
console.log(avg); // 수학 점수와 영어 점수의 평균
console.log(String(3), String(true), String(303));
console.log(typeof String(3), typeof String(true), typeof String(303));

// 2. to Number
console.log(Number("1"), Number(true), Number("12345HI"), Number(false));
// "12345HI"는 NaN이다.
console.log(
  typeof Number("1"),
  typeof Number(true),
  typeof Number("12345HI"),
  typeof Number(false)
);
console.log(Number(null)); // 0
console.log(Number(undefined)); // NaN
console.log(Number(true), Number(false)); // 1 0

// 3. to Boolean
console.log(
  Boolean(1), // true
  Boolean(0), // false
  Boolean(), // false
  Boolean(null), // false
  Boolean(NaN), // false
  Boolean(undefined), // false
  Boolean(Infinity) // true
);

console.log(Boolean(0), Boolean("0"), Boolean(""), Boolean(" "));
// false true false true

// Tip!
// prompt는 문자형으로 받는다. 하지만, 나누기는 알아서 잘 해준다.
/* 예시
영어 점수 = 90
수학 점수 = 80
평균 = 9080 / 2 = 4540이 나온다.
*/