var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(arr, ele) {
  arr = [ele, ...arr];
  return arr;
}

function destructivelyAddElementToBeginningOfArray(arr, ele) {
  var arr = arr.shift(ele);
  return arr;
}
