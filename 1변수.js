// 1. 변수
const name = "Mike";
const age = 30;
// ... 100 lines
let nickname = "Google";

const nickname1 = "Mike";
const nickname2 = "Mike";
const nickname3 = "Mike";

const message1 = "I'm a boy."; // 따옴표를 나타낼 수 있다.
const message2 = `My name is ${nickname}`; // 변수를 문장 안에 넣을 수 있다.

console.log(message1);
console.log(message2);

const message3 = "I'm a girl."; // 따옴표를 나타낼 수 있다.
console.log(message3);

console.log(`제 이름은 ${name} 이고, 제 나이는 ${age}살 입니다.`);

const message4 = `나는 ${25 + 10}살 입니다.`; // 계산도 가능하다.
console.log(message4);
