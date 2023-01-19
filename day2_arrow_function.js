let func = (arg1, arg2, ...argN) => expression;

let func1 = function (arg1, arg2, ...argN) {
  return expression;
};

//arrow function 기본
let sum = (a, b) => a + b;
/* 위 화살표 함수는 아래 함수의 축약 버전입니다.

let sum = function(a, b) {
  return a + b;
};
*/
alert(sum(1, 2)); // 3

///////////////////////////////////////////////
//인수가 하나밖에 없다면 괄호 생략가능은 함., 인수가 없다면 괄호를 비워야하지 뺄순 없음.
let double = (n) => n * 2;
// let double = function(n) { return n * 2 }과 거의 동일합니다.
alert(double(3)); // 6

let sayHi = () => alert("hello");
///////////////////////////////////////////////////
// 인수를 더많이 받아도 상관은 없다. 1,2 만 받아진다.
function sum(a, b) {
  return a + b;
}

alert(sum(1, 2, 3, 4, 5));

/////////////////////////////////////////////////
/**
 * 배열  for문 돌리는 방법
 */
function sumAll(...args) {
  // args는 배열의 이름입니다.
  let sum = 0;
  for (let arg of args) sum += arg;
  return sum;
}

alert(sumAll(1)); // 1
alert(sumAll(1, 2)); // 3
alert(sumAll(1, 2, 3)); // 6

////////////////////////////////////////////////////////
/**
 * 유사배열객체 arguments로 parameter없이 선언해도 배열값으로 가져올 수 있다고함.
 * 근데 옛날방법이라고합니다.
 */
function showName() {
  alert(arguments.length);
  alert(arguments[0]);
  alert(arguments[1]);
  // arguments는 이터러블 객체이기 때문에
  // for(let arg of arguments) alert(arg); 를 사용해 인수를 펼칠 수 있습니다.
}
// 2, Bora, Lee가 출력됨
showName("Bora", "Lee");
// 1, Bora, undefined가 출력됨(두 번째 인수는 없음)
showName("Bora");
///////////////////////////////////////////////////////////////
//화살표 함수는 arguments를 지원하지 않음.
let arr = [3, 5, 1];
alert(Math.max(arr)); // NaN임. 이렇게 하면 안되고
alert(Math.max(...arr)); // 요느낌으로 해야 됨.
// 아래와 같이 이터러블 객체 여러 개를 전달하는 것도 가능합니다.
let arr1 = [1, -2, 3, 4];
let arr2 = [8, 3, -8, 1];
alert(Math.max(...arr1, ...arr2)); // 8

// 스프레드문법은 배열 합치기도됨
let arr3 = [3, 5, 1];
let arr4 = [8, 9, 15];

let merged = [0, ...arr4, 2, ...arr3];
//문자열도 쪼갬
let str = "Hello";

alert([...str]); // H,e,l,l,o
