// 반복문
// 1에서 5까지 더하기.
var sum = 0;
for (i = 1; i < 6; i++) {
  sum += i;
}
console.log(sum);
// const와 var와 let의 차이점을 아직은 잘 모르겠다.

// 1에서 50까지 더하기.
var sum = 0;
for (ii = 1; ii < 51; ii++) {
  sum += ii;
}
console.log(sum);

// 1에서 10까지 출력하기.
for (ii = 1; ii <= 10; ii++) {
  console.log(ii);
}

for (ii = 0; ii <= 9; ii++) {
  console.log(ii + 1);
}

// 1에서 10까지 짝수만 출력하기.
for (ii = 1; ii <= 10; ii++) {
  if (ii % 2 == 0) {
    console.log(ii);
  }
}

for (ii = 0; ii <= 9; ii++) {
  if (ii % 2 == 1) {
    console.log(ii + 1);
  }
}

// 1에서 10까지 홀수만 출력하기.
for (ii = 1; ii <= 10; ii++) {
  if (ii % 2 == 1) {
    console.log(ii);
  }
}

for (ii = 0; ii <= 9; ii++) {
  if (ii % 2 == 0) {
    console.log(ii + 1);
  }
}

// 중첩된 반복문 for
for (i = 1; i <= 9; i++) {
  console.log("구구단 " + i + "단");
  for (j = 1; j <= 9; j++) {
    console.log(i + "X" + j + "=" + i * j);
  }
}

// 1부터 10까지 출력하기.
let num = 1;
while (num <= 10) {
  console.log(num);
  num++;
}

// do ~ while문
let n = 1;
do {
  console.log(n);
  n++; // 종료 조건을 꼭 붙여주기.
} while (n <= 10);

// 1부터 5까지 더한 값을 출력하기.
let sum1 = 0;
let num1 = 1;
while (num1 <= 5) {
  sum1 += num1;
  num1++;
}
console.log(sum1);

// break와 continue
// 10이 되면 for문 종료시키기.
for (i = 1; i < 11; i++) {
  console.log(i);
}

let a = 1; // while문에서 초기값을 설정해주기.
while (a <= 10) {
  console.log(a);
  a++;
}

// 3단까지만 출력하는 구구단
for (i = 1; i <= 9; i++) {
  console.log(i + "단");
  for (j = 1; j <= 9; j++) {
    console.log(i + "X" + j + "=" + i * j);
  }
  if (i === 3) {
    break;
  }
}