// 배열 -> 순서가 있는 리스트, 인덱스
// 다양하게 넣을 수 있다.
// length -> 배열의 길이
// push -> 배열 끝에 추가
// pop -> 배열 끝에 제거
// shift -> 배열 앞에 제거
// unshift -> 배열 뒤에 추가
// 반복문 for, index는 0부터 시작하기.
// 반복문 for... of 쓰기~!
// for... in 반복문 != for... of 반복문

let days = ["mon", "tue", "wed"];
days[1] = "화요일";
console.log(days);

days.push("thu");
console.log(days);

days.unshift("sun");
console.log(days);

// for 반복문
for (let index = 0; index < days.length; index++) {
  console.log(days[index]);
}

// for... of 반복문
for (let day of days) {
  console.log(day);
}
