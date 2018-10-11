/* #doubleArray
 *
 * Takes in an array of numbers and returns an array with each element doubled
 *
 * @param {Array} // [1,2,3]
 * @return {Array} // [2,4,6]
 */
var doubleArray = arr => {
  return arr.map(num => num * 2);
};

/* #sumArrays
 *
 * Takes in two arrays of numbers and returns the sum of both arrays.
 *
 * @param {Array}
 * @param {Array}
 * @return {Bool}
 */
const sumArrays = (arr1, arr2) => {
  return arr1.concat(arr2).reduce((sum, num) => sum + num);
};

/* #stringCount
 *
 * Takes in a string and returns the length of the string.
 *
 * @param {String}
 * @return {Number}
 */
const stringCount = str => {
  return str.length;
};

/* #arrayLength
 *
 * Takes in an array and returns the length of the array.
 *
 * @param {Array}
 * @return {Number}
 */
const arrayLength = arr => {
  return arr.length;
};

/* #countAll
 *
 * Takes in an array and returns the sum of all numbers in the array.
 *
 * @param {Array}
 * @return {Number}
 */
const countAll = arr => {
  return arr.reduce((sum, num) => sum + num);
};

/* #countStrings
 *
 * Takes in an array of strings and returns an array of string lengths.
 *
 * @param {Array}
 * @return {Array}
 */
const countStrings = arr => {
  return arr.map(str => str.length);
};

/* #countAllStrings
 *
 * Takes in an array of strings and returns the sum of all string lengths.
 *
 * @param {String}
 * @return {Number}
 */
const countAllStrings = arr => {
  return arr.join('').length;
};

/* #convertToArray
 *
 * Takes in an object and returns all the values of the object in an array.
 *
 * @param {Object}
 * @return {Array}
 */
const convertToArray = obj => {
  return Object.values(obj);
};

/* #objectSize
 *
 * Takes in an object and returns the number of key value pairs in the object.
 *
 * @param {Object}
 * @return {Number}
 */
const objectSize = obj => {
  return Object.keys(obj).length;
};

/* #createZeroFilledArray
 *
 * Takes in a number and fills an array with that number of zeroes.
 *
 * @param {Number}
 * @return {Zero}
 */
const createZeroFilledArray = num => {
  return Array(num).fill(0, 0, num);
};

/* #poppedArray
 *
 * Takes in an array of numbers and returns an array of all but the last element of the array.
 *
 * @param {Array}
 * @return {Array}
 */
const poppedArray = arr => {
  return arr.slice(0, arr.length - 1);
};

/* #splitString
 *
 * Takes in a string and returns an array of each individual character in the string.
 *
 * @param {String}
 * @return {Array}
 */
const splitString = str => {
  return str.split('');
};

/* #lengthOfLast
 *
 * Takes in an array of strings and returns the length of the last string.
 *
 * @param {String}
 * @return {Number}
 */
const lengthOfLast = arr => {
  return arr[arr.length - 1].length;
};

/* #sumBelowTen
 *
 * Takes in an array of numbers and returns the sum of all numbers below 10.
 *
 * @param {Array}
 * @return {Number}
 */
const sumBelowTen = arr => {
  return arr.filter(num => num < 10).reduce((sum, num) => sum + num);
};

/* #moreThanTenLetters
 *
 * Takes in an array of strings and returns the amount of elements that have more than ten letters.
 *
 * @param {String}
 * @return {Number}
 */
const moreThanTenLetters = arr => {
  return arr.filter(str => str.length > 10).length;
};

/* #multiplyAll
 *
 * Takes in an array of numbers and returns the product of all elements.
 *
 * @param {Array}
 * @return {Number}
 */
const multiplyAll = arr => {
  return arr.reduce((total, num) => total * num);
};

/* #sumAllPositive
 *
 * Takes in an array of numbers and returns the sum of all non-negative numbers.
 *
 * @param {String}
 * @return {Number}
 */
const sumAllPositive = arr => {
  return arr.filter(num => num >= 0).reduce((sum, num) => sum + num);
};

/* #stringCountBelowThree
 *
 * Takes in an array of strings and returns the amount of strings that have three characters or less.
 *
 * @param {Array}
 * @return {Number}
 */
const stringCountBelowThree = arr => {
  return arr.filter(str => str.length <= 3).length;
};

/* #countObjects
 *
 * Takes in an array of objects and returns the amount of objects in the array.
 *
 * @param {Array}
 * @return {Number}
 */
const countObjects = arr => {
  return arr.length;
};

/* #getObjectKeys
 *
 * Takes in an object and returns an array of all the object's keys.
 *
 * @param {Object}
 * @return {Array}
 */
const getObjectKeys = obj => {
  return Object.keys(obj);
};

/* #getObjectValues
 *
 * Takes in an object and returns an array of all the object's values.
 *
 * @param {Object}
 * @return {Array}
 */
const getObjectValues = obj => {
  return Object.values(obj);
};

/* #makeObject
 *
 * Takes in two arguments 'key' and 'value' and returns a single key-value pair in an object.
 *
 * @param {String}
 * @param {String}
 * @return {Object}
 */
const makeObject = (key, value) => {
  return { [key]: value };
};

/* #makeObjectReverse
 *
 * Takes in two arguments 'value' and 'key' and returns a single key-value pair in an object.
 *
 * @param {String}
 * @param {String}
 * @return {Bool}
 */
const makeObjectReverse = (value, key) => {
  return { [key]: value };
};

/* #tupleToObject
 *
 * Takes in a tuple (an array with two elements) and returns it into a single key-value pair in an object.
 *
 * @param {Array}
 * @return {Object}
 */
const tupleToObject = arr => {
  return { [arr[0]]: arr[1] };
};

/* #tupleToObjectReverse
 *
 * Takes in a tuple and returns it into a single key-value pair with second tuple element as key and first tuple element as value.
 *
 * @param {Array}
 * @return {Object}
 */
const tupleToObjectReverse = arr => {
  return { [arr[1]]: arr[0] };
};

/* #strToKeys
 *
 * Takes in an array of strings and returns an object with all string elements as the object's keys and all values set to 0.
 *
 * @param {Array}
 * @return {Object}
 */
const strToKeys = arr => {
  return arr.reduce((obj, str) => {
    obj[str] = 0;
    return obj;
  }, {});
};

/* #getValues
 *
 * Takes in an object and returns an array of all the object's values.
 *
 * @param {Object}
 * @return {Array}
 */
const getValues = obj => {
  return Object.values(obj);
};

/* #getKeys
 *
 * Takes in an object and returns an array of the object's keys.
 *
 * @param {Object}
 * @return {Array}
 */
const getKeys = obj => {
  return Object.keys(obj);
};

/* #objectToArray
 *
 * Takes in an object and returns an array of tuples where each tuple has
 * the object's key as element 0 and object's value as element 1.
 *
 * @param {Object}
 * @return {Array}
 */
const objectToArray = obj => {
  return Object.entries(obj);
};

/* #arrayToObject
 *
 * takes in an array and returns an object with keys set to the elements in the array and
 * all values set to false.
 *
 * @param {Array}
 * @return {Object}
 */
const arrayToObject = arr => {
  return arr.reduce((obj, elem) => {
    obj[elem] = false;
    return obj;
  }, {});
};

/* #arraysToObject
 *
 * takes in two arrays, the first array elements will be keys of an object and second array elements
 * will be values of an object.
 *
 * @param {Array}
 * @param {Array}
 * @return {Object}
 */
const arraysToObject = (arr1, arr2) => {
  return arr1.reduce((obj, key, index) => {
    obj[key] = arr2[index];
    return obj;
  }, {});
};

/* #objectsToTuples
 *
 * takes in two objects and returns an array of tuples of the key value pairs of all objects in both arrays.
 *
 * @param {Object}
 * @param {Object}
 * @return {Array}
 */
const objectsToTuples = (obj1, obj2) => {
  return Object.entries(obj1).concat(Object.entries(obj2));
};

/* #mapArrayValues
 *
 * takes in an array of strings and returns an object with keys of the array elements and values all set to True.
 *
 * @param {Array}
 * @return {Object}
 */
const mapArrayValues = arr => {
  return arr.reduce((obj, str) => {
    obj[str] = true;
    return obj;
  }, {});
};

/* #mapStringCounts
 *
 * takes in an array of strings and returns an object with key names set to the elements in the array.
 * If the character count of the key name is greater than or equal to 5 set the value to true,
 * otherwise set to false.
 *
 * @param {Array}
 * @return {Object}
 */
const mapStringCounts = arr => {
  return arr.reduce((obj, str) => {
    obj[str] = str.length >= 5 ? true : false;
    return obj;
  }, {});
};

/* #arrayToObjectNums
 *
 * takes in an array of numbers and returns an object with keys set to
 * each element of the array and all values set to true.
 *
 * @param {Array}
 * @return {Object}
 */
const arrayToObjectNums = arr => {
  return arr.reduce((obj, num) => {
    obj[num] = true;
    return obj;
  }, {});
};

/* #stringToKeys
 *
 * takes in a string and returns an object whos keys are each letter of the string and all values set to true.
 *
 * @param {String}
 * @return {Object}
 */
const stringToKeys = str => {
  return Array.from(str).reduce((obj, letter) => {
    obj[letter] = true;
    return obj;
  }, {});
};

/* #charCountMap
 *
 * takes in an array of strings and returns an object with keys set to each element of the array
 * and values set to the character count of each key name.
 *
 * @param {Array}
 * @return {Object}
 */
const charCountMap = arr => {
  return arr.reduce((obj, str) => {
    obj[str] = str.length;
    return obj;
  }, {});
};

/* #frequencyMap
 *
 * takes in an array of strings and returns an object with the string as the key and the number of occurences as the value.
 *
 * @param {String}
 * @return {Bool}
 */
const frequencyMap = arr => {
  return arr.reduce((obj, strReduce) => {
    obj[strReduce] = arr.filter(strFilter => strReduce === strFilter).length;
    return obj;
  }, {});
};

/* #tupleConvertToObject
 *
 * takes in an array of tuples and and returns an object whos keys are
 * the first element of the tuples and values are second element of the tuples.
 *
 * @param {String}
 * @return {Bool}
 */
const tupleConvertToObject = arr => {
  return arr.reduce((obj, tuple) => {
    obj[tuple[0]] = tuple[1];
    return obj;
  }, {});
};

module.exports = {
  doubleArray,
  sumArrays,
  stringCount,
  arrayLength,
  countAll,
  countStrings,
  countAllStrings,
  convertToArray,
  objectSize,
  createZeroFilledArray,
  poppedArray,
  splitString,
  lengthOfLast,
  sumBelowTen,
  moreThanTenLetters,
  multiplyAll,
  sumAllPositive,
  stringCountBelowThree,
  countObjects,
  getObjectKeys,
  getObjectValues,
  makeObject,
  makeObjectReverse,
  tupleToObject,
  tupleToObjectReverse,
  strToKeys,
  getValues,
  getKeys,
  objectToArray,
  arrayToObject,
  arraysToObject,
  objectsToTuples,
  mapArrayValues,
  mapStringCounts,
  arrayToObjectNums,
  stringToKeys,
  charCountMap,
  frequencyMap,
  tupleConvertToObject
};
