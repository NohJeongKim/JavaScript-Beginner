// 함수 표현식, 화살표 함수
// 1. 함수 선언문
showError(); // hoisting

function showError() {
  console.log("Error");
}

showError();

// 2. 함수 표현식
let showError1 = function () {
  console.log("Error");
};

showError1();

const sayHello = function (name) {
  const msg = `Hello, ${name}!`;
  console.log(msg);
};

sayHello("Jane");
sayHello("Mike");

let sum = function (a, b) {
  result = a + b;
  return result;
};

console.log(sum(3, 5)); // 8
console.log(sum(3, 7)); // 10
console.log(sum(5, 8)); // 13

// 3. 즉시 실행 함수
(function (name) {
  msg = `Hello`;
  msg += `, ${name}`;
  return msg;
})("Amy");

console.log(msg);

(function (birth) {
  age = 2022 - birth + 1;
  msg = `당신의 나이는 ${age}세 입니다.`;
  return msg;
})(1998);

console.log(msg);

(function () {
  // 매개 변수가 없는 경우
  msg = "확인 먼저 부탁드립니다.";
  return msg;
})();

console.log(msg);

// 4. 화살표 함수
let showError2 = () => {
  console.log("Error");
};

showError2();

const sayHello1 = (name) => {
  const msg = `Hello, ${name}!`;
  console.log(msg);
};

sayHello1("Jane");
sayHello1("Mike");

const add = function (a, b) {
  return a + b;
};

console.log(add(3, 5));

const add1 = (a, b) => a + b;

console.log(add1(3, 5));
// 화살표 함수를 이용해서 return이 한 줄인 경우 간략하게 함수를 적을 수 있다.
