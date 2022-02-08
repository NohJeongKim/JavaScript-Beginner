// 1. 숫자형 number
// 1-1. 정수
console.log(typeof 100);
// 1-2. 실수
console.log(typeof 4.12);
// 주의: 자바 스크립트는 실수 계산이 정확하지 않다.
console.log(0.1 + 0.2);

// 1-3. Infinity
const x = 1 / 0;
console.log(x);
// 1-4. NaN
const y = "MJ";
const z = 20;
console.log(y / z);

// 2. 문자열 string
console.log(typeof "안녕하세요.");
console.log(typeof "12345");
console.log("안녕하세요, 저는 '대학생'입니다.");

// 3. 논리형 boolean
console.log(1 > 2); // false
console.log(1 < 2); // true

// 4. undefined 유형과 null 유형
// 4-1. undefined
let name;
console.log(typeof name);
// 4-2. null
let user = null;
console.log(typeof user); // object

let userNaver = null;
console.log(userNaver); // null

// 5. 배열 array
const season = ["봄", "여름", "가을", "겨울"];
console.log(season[1]);
console.log(season[3]);

// Tip!
const nickname = "Amy";
const a = "나는 ";
const b = "입니다.";
console.log(a + nickname + b); // 변수를 이용해서 하나의 문장을 만들 수 있다.
