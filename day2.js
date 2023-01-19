/*콜백 함수
 함수를 함수의 인수로 전달하고, 필요하다면 인수로 전달한 그 함수를
"나중에 호출(called back)"하는 것이 콜백 함수의 개념


*/
function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}
function showOk() {
  alert("동의하셨습니다.");
}
function showCancel() {
  alert("취소 버튼을 누르셨습니다.");
}
// 사용법: 함수 showOk와 showCancel가 ask 함수의 인수로 전달됨
ask("동의하십니까?", showOk, showCancel);

//아래와 같이 이름 없이 선언한 함수는 익명 함수(anonymous function)
ask(
  "동의하십니까?",
  function () {
    alert("동의하셨습니다.");
  },
  function () {
    alert("취소 버튼을 누르셨습니다.");
  }
);

//함수선언문과 함수 표현식의 차이
/*
함수 표현식은 실제 실행 흐름이 해당 함수에 도달했을 때 함수를 생성
함수 선언문은 함수 선언문이 정의되기 전에도 호출할 수 있습
*/
//함수 선언문
// 함수 선언문
function sum(a, b) {
  return a + b;
}
// 함수 표현식
let sum = function (a, b) {
  return a + b;
};

//////////////////////////////////////////////
sayHi("John"); // Hello, John

function sayHi(name) {
  alert(`Hello, ${name}`);
}
///////////////////////////////////////////////////
sayHi("John"); // error!

let sayHi = function (name) {
  // (*) 마술은 일어나지 않습니다.
  alert(`Hello, ${name}`);
};
