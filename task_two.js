function grid(n) {
  let abc = "abcdefghijklmnopqrstuvwxyz";
  if (n < 0) return null
  let arr = [];

  for (let i = 0; i < n; i++) {
    let cell = [];
    for (let k = i; k < n + i; k++) {
      cell.push(abc[k % 26])
    }
    arr.push(cell)
  }
  return arr
}