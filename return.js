// return : 함수를 선언한 쪽에서 호출한 쪽으로 데이터를 전달할 수 있다. 그 데이터를 변수에 담으면 재사용이 가능하다.
// return 뒤에 아무것도 쓰지 않으면, 바로 종료된다. 뒤에 명령문은 실행되지 않는다.
function multiple(num1, num2) {
  console.log(num1 * num2);
}

multiple(2, 8); // 16

function sum(num1, num2) {
  return num1 + num2;
  console.log("안녕하세요."); // return 뒤에는 실행되지 않는다.
}

console.log(sum(10, 20)); // 30
