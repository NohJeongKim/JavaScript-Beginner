// 구구단 3단 까지 출력하기.
for (i = 1; i < 10; i++) {
  console.log(i + "단");
  for (j = 1; j < 10; j++) {
    console.log(i + "X" + j + "=" + i * j);
  } // 반복 횟수만큼 계속 돈다.
  if (i === 3) {
    break;
  }
}

let num1 = 1;
let num2 = 1;

while (num1 < 10) {
  console.log(num1 + "단");
  num2 = 1; // 초기값을 반드시 다시 설정시켜주기.
  while (num2 < 10) {
    console.log(num1 + "X" + num2 + "=" + num1 * num2);
    num2++;
  }
  num1++;
  if (num1 === 4) {
    break;
  }
}

// 1에서 10까지 짝수만 더하기.
let sum = 0;

for (num3 = 1; num3 <= 10; num3++) {
  if (num3 % 2 == 0) {
    sum += num3; // 짝수인 경우에 더해준다.
  } else {
    continue;
  }
  console.log(num3 + " ----- " + sum);
}

let num4 = 1;
let sum1 = 0;

while (num4 <= 10) {
  if (num4 % 2 == 0) {
    sum1 += num4;
  } else {
    num4++;
    continue;
  }
  console.log(num4 + " ----- " + sum1); 
  num4++; // 출력하고 증가시켜줘야한다.
}
