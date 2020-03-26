function addTwoNumbers(a, b) {
  return a + b;
}
function subtractTwoNumbers(a, b) {
  return a - b;
}
function multiplyTwoNumbers(a, b) {
  return a * b;
}
function divideTwoNumbers(a, b) {
  return a / b;
}
function powerOfNumber(a, b) {
  return a ** b;
}
function isGreaterThan(a, b) {
  return a > b
}
function sortMyNumbers(arr) {
  return arr.sort((a, b) => 
    a > b ? 1 : b > a ? -1 : 0
  )
}
function addToObject(object, keyName, value) {
  return {
    ...object,
    [keyName]: value,
  }
}

module.exports = {
  addTwoNumbers,
  subtractTwoNumbers,
  multiplyTwoNumbers,
  divideTwoNumbers,
  powerOfNumber,
  isGreaterThan,
  sortMyNumbers,
  addToObject,
}