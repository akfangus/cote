function solution(n, k) {
  return n * 12000 + k * 2000 - parseInt(n / 10) * 2000;
}

function solution2(numbers) {
  return numbers.reduce((num1, num2) => num1 + num2) / numbers.length;
}

let vv = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(solution2(vv));
