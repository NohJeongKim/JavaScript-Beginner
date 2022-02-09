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

const name1 = "TOM";
const isAdult = false; // 성인이 아님을 의미한다.

if (name1 === "TOM" && isAdult == true) {
  // 이름이 TOM이고 성인인 경우 > 통과
  console.log("PASS");
} // 값이 출력되지 않는다.

if (name1 === "TOM" || isAdult == true) {
  // 이름이 TOM이거나 성인인 경우 > 통과
  console.log("PASS");
} // 조건 1개 만족 > PASS 출력

const name2 = "Mike";
const age2 = 30;

if (name2 === "TOM" || age2 > 19) {
  // false || true > true
  console.log("PASS");
} else {
  console.log("NOT PASS");
} // PASS 출력

if (name2 === "TOM" && age2 > 19) {
  // false && true
  console.log("PASS");
} else {
  console.log("NOT PASS");
} // NOT PASS 출력

if (name2 === "TOM" || age2 < 11) {
  // false || false
  console.log("PASS");
} else {
  console.log("NOT PASS");
} // NOT PASS

const gender = "F";
const name3 = "Jane";
const isAdult2 = true;

// if((gender==='M' && name3==='Mike') || isAdult2) { 밑에 있는 코드는 이것과 동일하다.
if ((gender === "M" && name3 === "Mike") || isAdult2) {
  console.log("통과");
} else {
  console.log("돌아가");
} // 통과 출력

if (gender === "M" && (name3 === "Mike" || isAdult2)) {
  console.log("통과");
} else {
  console.log("돌아가");
} // 돌아가 출력