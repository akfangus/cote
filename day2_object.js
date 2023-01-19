// basic 객체
let user = {
  // 객체
  name: "John", // 키: "name",  값: "John"
  age: 30, // 키: "age", 값: 30
};
alert(user.name);
alert(user.age);

///////////////////////////////////////////
//값을 입력 받아 객체를 생성하는경우 받는 값과 이름값이 동일하게 설정하려면
function makeUser(name, age) {
  return {
    name, // name: name 과 같음
    age, // age: age 와 같음
    done: 1, // 이렇게 일반과 같이 쓰는것ㅎ도 가능.
    // ...
  };
}
///////////////////////////////////////////////////////////////////
/**
 * for in 반복문
 * 객채의 모든 키를 순회할 수 있음.
 */
let user2 = {
  name: "John",
  age: 30,
  isAdmin: true,
};

for (let key in user2) {
  // 키
  alert(key); // name, age, isAdmin
  // 키에 해당하는 값
  alert(user2[key]); // John, 30, true
}
//  정수프로퍼티는 자동 정렬이 되어진다고 합니다.
let codes = {
  49: "독일",
  41: "스위스",
  44: "영국",
  // ..,
  1: "미국",
};
for (let code in codes) {
  alert(code); // 1, 41, 44, 49
}
//이거를 자동으로 정렬되지 않기 위해 하려면 속임수를 쓰라고합니다 (+) 와 같은
let codes3 = {
  "+49": "독일",
  "+41": "스위스",
  "+44": "영국",
  // ..,
  "+1": "미국",
};

for (let code in codes3) {
  alert(+code); // 49, 41, 44, 1
}
