// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings

module.exports = function(array) {
  const filteredArray = array.filter(number => typeof number === "number");
  var sum = 0;
  for (var i = 0; i < filteredArray.length; i++) {
    sum += filteredArray[i];
  }
  return sum / filteredArray.length;
};
