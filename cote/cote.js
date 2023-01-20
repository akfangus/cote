function solution(sizes) {
  let garo = 0;
  let sero = 0;
  let shortarray = [];
  let longarray = [];
  for (let i = 0; i < sizes.length; i++) {
    shortarray.push(Math.min(...sizes[i]));
    longarray.push(Math.max(...sizes[i]));
  }
  garo = Math.max(...shortarray);
  sero = Math.max(...longarray);
  return garo * sero;
}

function solution2(sizes) {
  shortarray = [];
  longarray = [];
  for (let i = 0; i < sizes.length; i++) {
    if (sizes[i][0] >= sizes[i][1]) {
      shortarray.push(sizes[i][1]);
      longarray.push(sizes[i][0]);
    } else {
      shortarray.push(sizes[i][0]);
      longarray.push(sizes[i][1]);
    }
  }
  let var1 = 0;
  let var2 = 0;
  for (let i = 0; i < shortarray.length; i++) {
    if (var1 < shortarray[i]) {
      var1 = shortarray[i];
    }
  }
  for (let i = 0; i < longarray.length; i++) {
    if (var2 < longarray[i]) {
      var2 = longarray[i];
    }
  }
  return var1 * var2;
}

solution2([
  [14, 4],
  [19, 6],
  [6, 16],
  [18, 7],
  [7, 11],
]);
