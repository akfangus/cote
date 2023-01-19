function solution(strings, n) {
  // 먼저 사전순으로 sort
  let answer = strings.sort();
  //  그리고 n번째 인덱스로 sort
  return answer.sort((a, b) => {
    if (a[n] > b[n]) return 1; // 첫 번째 값이 두 번째 값보다 큰 경우
    if (a[n] == b[n]) return 0; // 두 값이 같은 경우
    if (a[n] < b[n]) return -1; //  첫 번째 값이 두 번째 값보다 작은 경우
  });
}

let str = ["sun", "bed", "car"];
console.log(solution(str, 1));
