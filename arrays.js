var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(arr, ele) {
  var arr2 = [ele, ...arr];
  return arr2;
}

function destructivelyAddElementToBeginningOfArray(arr, ele) {
  var arr2 = arr.unshift(ele);
  return arr2;
}

function addElementToEndOfArray(arr, ele) {
  var arr2 = [...arr, ele];
  return arr2;
}

function destructivelyAddElementToEndOfArray(arr, ele) {
  return arr.push(ele);
}

function accessElementInArray(arr, ind) {
  return arr[ind];
}

function destructivelyRemoveElementFromBeginningOfArray(arr) {
  return arr.shift();
}

function removeElementFromBeginningOfArray(arr) {
  return arr.slice(1);
}

function destructivelyRemoveElementFromBeginningOfArray(arr) {
  return arr.pop();
}

function removeElementFromEndOfArray(arr) {
  return arr.slice(0, arr.length - 1);
}
