function fib() {
  const arr = [];
  arr[0] = 0;
  arr[1] = 1;
  for (let i = 0; i < 49; i++) {
    arr[i + 2] = arr[i] + arr[i + 1];
  }
  return arr;
}

console.log(fib());

function numsToStrings(arr) {
  return _.map(arr, function (e) { return e.toString(); });
}

console.log(numsToStrings(fib()));

function numEvenNums(arr) {
  let result = [];
  result = _.filter(arr, function (e) { return e % 2 === 0; });
  let count = 0;
  _.each(result, function () { count++; });
  return count;
}

console.log(numEvenNums(fib()));
