// 객체 : method, this
// method -> 객체 프로퍼티로 할당 된 함수이다.
// this -> 앞에 있는 객체를 가르킨다. 하지만 화살표 함수를 이용하면 문제가 생기기 때문에 이용하지 않기. [전역 객체를 가르키게 된다.]

let boy = {
  name: "Mike",
  ShowName: function () {
    console.log(boy.name);
  },
};

boy.ShowName(); // Mike

let man = boy; // Mike
console.log(man.name);
man.name = "Tom"; // Tom으로 변경을 시키면, boy도 이름이 Tom으로 변경된다.
man.ShowName(); // Tom
boy.ShowName(); // Tom
console.log(boy.name); // Tom

/*
boy = null;
man.ShowName(); // null
// 이런 경우에는 this로 바꿔주면 된다.
*/

let girl = {
  name: "Jane",
  ShowName: function () {
    console.log(this.name);
  },
};

let woman = girl;
girl = null; // girl은 null이지만 woman은 Jane이다. -> 두 개의 별명을 사용하되, 차이를 두고 싶은 경우에 this를 이용하기.
woman.ShowName(); // 객체 이름을 사용하는 것보다 this를 사용하는 것이 좋다.

let adult = {
  name: "Yuju",
  sayThis: function () {
    console.log(this);
  },
};

adult.sayThis(); // 객체 반환시켜준다.

let adult1 = {
  name: "Yuju",
  sayThis: () => {
    console.log(this);
  },
};

adult1.sayThis(); // 전역 객체를 가르키게 된다. 화살표 함수는 이용하지 않는 것이 좋다.
