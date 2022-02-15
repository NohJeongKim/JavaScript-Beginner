// 함수 선언문
function sumMulti1(num1, num2) {
  if (num1 === num2) {
    multi = num1 * num2;
    return multi;
  } else {
    sum = num1 + num2;
    return sum;
  }
}

console.log(sumMulti1(10, 10));
console.log(sumMulti1(5, 10));

// 함수 표현식
let sumMulti2 = function (num1, num2) {
  if (num1 === num2) {
    multi = num1 * num2;
    return multi;
  } else {
    sum = num1 + num2;
    return sum;
  }
};

console.log(sumMulti2(10, 10));
console.log(sumMulti2(5, 10));

// 화살표 함수
let sumMulti3 = (num1, num2) => {
  if (num1 === num2) {
    multi = num1 * num2;
    return multi;
  } else {
    sum = num1 + num2;
    return sum;
  }
};

console.log(sumMulti3(10, 10));
console.log(sumMulti3(5, 10));

// 즉시 실행 함수
(function sumMulti1(num1, num2) {
  if (num1 === num2) {
    msg = num1 * num2; // 조건이 달라도 변수는 맞춰서 지정해주기. 그래야 출력할 때 편하게 할 수 있다 ~! > 즉시 실행 함수를 이용하는 경우
    return msg;
  } else {
    msg = num1 + num2;
    return msg;
  }
})(10, 10);

console.log(msg);

(function sumMulti1(num1, num2) {
  if (num1 === num2) {
    msg = num1 * num2; // 조건이 달라도 변수는 맞춰서 지정해주기. 그래야 출력할 때 편하게 할 수 있다 ~! > 즉시 실행 함수를 이용하는 경우
    return msg;
  } else {
    msg = num1 + num2;
    return msg;
  }
})(5, 10);

console.log(msg);
