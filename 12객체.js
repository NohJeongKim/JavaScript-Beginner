// 객체 -> {}로 작성하고 key, value가 존재한다.
// 접근, 추가 -> [] 나 . 사용하기.
// 제거 delete 이용하기.
// 단축 프로퍼티 가능하다. 정의 해주고, 안 적어주면 된다.
// 존재 여부 확인 -> in 사용하기~!
// for... in 반복문 이용하면 객체 모두 꺼낼 수 있다.

const superman = {
  name: "clark",
  age: 30,
};

console.log(superman.name);
console.log(superman.age);
console.log(superman);

superman.haircolor = "black";
superman["hobby"] = "football";
console.log(superman);

delete superman.age;
console.log(superman);

function makeObject(name, age) {
  return {
    name: name,
    age: age,
    hobby: "football",
  };
}

const Mike = makeObject("Mike", 30);
console.log(Mike);

const Anna = makeObject("Anna", 25);
console.log(Anna);

// 축약형 사용이 가능하다.
function makeObject(name, age) {
  return {
    name,
    age,
    hobby: "football",
  };
}

const Jane = makeObject("Jane", 30);
console.log(Jane);

// 프로퍼티 존재 여부 확인하기.
console.log("age" in Mike);
console.log("birthday" in Mike);

function isAdult(user) {
  if (user.age < 20) {
    return false;
  }
  return true;
}

// 객체를 만들어서 확인하기.
const Amy = {
  name: "Amy",
  age: 30,
};

const Yumi = {
  name: "Yumi",
};

console.log(isAdult(Amy));
console.log(isAdult(Yumi)); // 왜 true라고 나오는가? > user.age가 없어서 undefined, 그래서 무조건 false가 나오기 때문에~!

function isAdult1(user) {
  if (!("age" in user) || user.age < 20) {
    // age가 user 안에 없다는 조건을 추가하기.
    // user에 age가 없거나 20살 미만이면 false를 반환한다.
    return false;
  }
  return true;
}

console.log(isAdult1(Yumi)); // 이렇게 고쳐주면 false가 나온다.

// 객체 for... in 반복문
const Jena = {
  name: "Jana",
  age: 30,
};

for (x in Jena) {
  console.log(x);
} // key 값이 나온다.

for (x in Jena) {
  console.log(Jena[x]);
} // value 값이 나온다.
