// 3단까지 구구단 출력하기.
let i = 1;
let j = 1;

while (i <= 9) {
  console.log(i + "단");
  j = 1; // 이것이 없으면 j가 10이 되기 때문에 뒤에는 출력이 안된다.
  while (j <= 9) {
    console.log(i + "X" + j + "=" + i * j);
    j++;
  }
  i++;
  if (i === 4) {
    // for문은 3으로 하면 3까지 돌아갔는데, 왜 얘는 아닐까?
    break;
  }
}

/* 블로그 참고
var i = 2;
j = 1;
while (i < 10) {
  j = 1;
  while (j < 10) {
    document.write(i + "*" + j + "=" + i * j + "&nbsp;&nbsp;&nbsp;");
    j++;
  }
  i++;
  document.write("<br><br>");
} 
*/
// j를 다시 한번 할당해주었다.

// 1에서 10까지 짝수만 더하기
let sum = 0;
for (num = 1; num <= 10; num++) {
  if (num % 2 == 0) {
    sum += num;
  } else {
    continue;
  }
  console.log(num + " ----- " + sum);
}

let num1 = 1;
let sum1 = 0;

while (num1 <= 10) {
  if (num1 % 2 == 0) {
    sum1 += num1;
  } else {
    num1++;
    continue;
  }
  console.log(num1 + " ----- " + sum1)
  num1++; // num1을 여기서 증가시켜줘야한다.
}