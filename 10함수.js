// 함수
// 1. 매개변수가 없는 함수
function showError() {
  console.log("에러가 발생했습니다. 새로고침 해주세요.");
}

showError();

function addNum() {
  var a = 5;
  var b = 20;
  var sum = a + b;
  console.log("num1과 num2를 더한 값은 " + sum + "이다.");
}

addNum(); // 25
addNum(); // 25
// 원하는 횟수만큼 함수를 실행(호출)하면 된다.

// 2. 매개변수가 1개인 함수
function sayHello(name) {
  const msg = `Hello, ${name}!`;
  console.log(msg);
}

sayHello("Jane");
sayHello("Mike");
sayHello(); // undefined
// console.log(name); name이 undefined > Error

function sayHello(name) {
  let msg = `Hello`;
  if (name) {
    msg = `Hello, ${name}`;
  }
  console.log(msg);
}

sayHello("Yumi");
sayHello("MJ");
sayHello(); // Hello 출력한다. 왜냐하면 name이 undefined > false > 명령을 실행하지 않는다.

// 3. 매개변수가 2개인 함수
function addNumber(num1, num2) {
  let sum = num1 + num2;
  console.log(sum);
}

addNumber(3, 7); // 10
addNumber(5, 9); // 14

// 지역 변수와 전역 변수
let msg = "Welcome"; // 지역 변수
console.log(msg);

function sayHello(name) {
  console.log(name);
}

sayHello(); // undefined
sayHello("Kakao");
// console.log(name); 정의되지 않아서 Error 뜬다.

function sayHi(name) {
  let msg = "Hi"; // 전역 변수
  if (name) {
    msg += `, ${name}`; // msg update 시켜준다.
  }
  console.log(msg);
}

sayHi(); // Hi > function 내에서만 지역 변수가 돌아가기 때문이다.
sayHi("Naver");
console.log(msg); // Welcome
// 지역 변수를 이용하는 것이 전역 변수를 이용하는 것보다 훨씬 관리하기 편리하다~!

// OR > 조건을 쓰지 않아도 OR를 쓰면 조건문을 이용할 수 있다.
function sayHi(name) {
  let newName = name || "friend"; // 매개변수가 없으면 friend가 출력된다.
  let msg = `Hi, ${newName}`;
  console.log(msg);
}

sayHi();
sayHi("Anna");

// OR 대신에 조건문을 쓰면 이렇게 해야된다. OR 쓰는 것이 훨씬 간단하다.
function sayHi(name) {
  if (name) {
    console.log(`Hello, ${name}`);
  } else {
    console.log("Hello, friend");
  }
}

sayHi();
sayHi("Anna");

// default
function sayMsg(name = "friend") {
  // default
  let msg = `Hello, ${name}`;
  console.log(msg);
}

sayMsg();
sayMsg("Jangdae");

// 만약에 name이 Jane이면 반환하기.
function isJane(name) {
  let isName = name === "Jane" || "friend";
  let msg = "Hi!";
  msg += `, ${isName}`;
  console.log(msg);
}

isJane();
isJane("Jane"); // true로 나옴 ㅠㅠ
isJane("Mike");

function isYuna(name) {
  if (name === "Yuna") {
    return "Hello, Yuna!";
  } else {
    return `${name}은 Yuna가 아닙니다.`;
  }
}

// return된 값은 새로운 변수에 넣어줘서 출력해야 한다.
const result1 = isYuna("Yuna");
console.log(result1);

const result2 = isYuna("Jane");
console.log(result2);

// let과 const
// 1부터 n까지 더한 값을 구하기.

function sum1_N(n) {
  let sum = 0; // 지역 변수
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  console.log(sum); // 블록 안에서만 동작한다.
}

sum1_N(10); // 1부터 10까지 더한 값을 구하기.

function sum_N(n) {
  sum = 0;
  for (let j = 1; j <= n; j++) {
    sum += j;
  }
}

sum_N(10); // 1부터 10까지 더하도록 함수를 조정해주기.
console.log(sum); // 그 총계를 출력하기.
