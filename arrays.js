var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(arr, ele) {
  arr = [ele, ...arr];
  return arr;
}

function destructivelyAddElementToBeginningOfArray(arr, ele) {
  arr.unshift(ele);
  return arr;
}

function addElementsToEndOfArray(arr, ele) {
  arr = [...arr, ele];
  return arr;
}

function destructivelyAddElementToEndOfArray(arr, ele) {
  arr.push(ele);
  return arr;
}

