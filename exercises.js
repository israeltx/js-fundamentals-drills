module.exports = {
  /* #doubleArray
  *
  * Takes in an array of numbers and returns an array with each element doubled
  *
  * @param {Array} // [1,2,3]
  * @return {Array} // [2,4,6]
  */
  doubleArray: function(arr) {
    return arr.map(elem => elem * 2);
  },

  /* #sumArrays
  *
  * Takes in two arrays of numbers and returns the sum of both arrays.
  *
  * @param {Array}
  * @param {Array}
  * @return {Bool}
  */
  sumArrays: function(arr1, arr2) {
    return arr1.reduce((a, b) => a + b) + arr2.reduce((a, b) => a + b);
  },

  /* #stringCount
  *
  * Takes in a string and returns the length of the string.
  *
  * @param {String}
  * @return {Number}
  */
  stringCount: function(str) {
    return str.length;
  },

  /* #arrayLength
  *
  * Takes in an array and returns the length of the array.
  *
  * @param {Array}
  * @return {Number}
  */
  arrayLength: function(arr) {
    return arr.length;
  },

  /* #countAll
  *
  * Takes in an array and returns the sum of all numbers in the array.
  *
  * @param {Array}
  * @return {Number}
  */
  countAll: function(arr) {
    return arr.reduce((a, b) => a + b);
  },

  /* #countStrings
  *
  * Takes in an array of strings and returns an array of string lengths.
  *
  * @param {Array}
  * @return {Array}
  */
  countStrings: function(arr) {
    return arr.map(elem => elem.length);
  },

  /* #countAllStrings
  *
  * Takes in an array of strings and returns the sum of all string lengths.
  *
  * @param {String}
  * @return {Number}
  */
  countAllStrings: function(arr) {
    return arr.map(elem => elem.length).reduce((a, b) => a + b);
  },

  /* #convertToArray
  *
  * Takes in an object and returns all the values of the object in an array.
  *
  * @param {Object}
  * @return {Array}
  */
  convertToArray: function(obj) {
    return Object.values(obj);
  },

  /* #objectSize
  *
  * Takes in an object and returns the number of key value pairs in the object.
  *
  * @param {Object}
  * @return {Number}
  */
  objectSize: function(obj) {
    return Object.values(obj).length;
  },

  /* #createZeroFilledArray
  *
  * Takes in a number and fills an array with that number of zeroes.
  *
  * @param {Number}
  * @return {Zero}
  */
  createZeroFilledArray: function(num) {
    return Array.apply(null, Array(num)).map(elem => elem = 0);
  },

  /* #poppedArray
  *
  * Takes in an array of numbers and returns an array of all but the last element of the array.
  *
  * @param {Array}
  * @return {Array}
  */
  poppedArray: function(arr) {
    return arr.filter(elem => arr.indexOf(elem) < arr.length - 1);
  },

  /* #splitString
  *
  * Takes in a string and returns an array of each individual character in the string.
  *
  * @param {String}
  * @return {Array}
  */
  splitString: function(str) {
    return Array.prototype.filter.call(str, elem => elem);
  },

  /* #lengthOfLast
  *
  * Takes in an array of strings and returns the length of the last string.
  *
  * @param {String}
  * @return {Number}
  */
  lengthOfLast: function(arr) {
    return arr[arr.length - 1].length;
  },

  /* #sumBelowTen
  *
  * Takes in an array of numbers and returns the sum of all numbers below 10.
  *
  * @param {Array}
  * @return {Number}
  */
  sumBelowTen: function(arr) {
    return arr.filter(elem => elem < 10).reduce((a, b) => a + b);
  },

  /* #moreThanTenLetters
  *
  * Takes in an array of strings and returns the amount of elements that have more than ten letters.
  *
  * @param {String}
  * @return {Number}
  */
  moreThanTenLetters: function(arr) {
    return arr.filter(elem => elem.length > 10).length;
  },

  /* #multiplyAll
  *
  * Takes in an array of numbers and returns the product of all elements.
  *
  * @param {Array}
  * @return {Number}
  */
  multiplyAll: function(arr) {
    return arr.reduce((a, b) => a * b);
  },

  /* #sumAllPositive
  *
  * Takes in an array of numbers and returns the sum of all non-negative numbers.
  *
  * @param {String}
  * @return {Number}
  */
  sumAllPositive: function(arr) {
    return arr.filter(elem => elem > 0).reduce((a, b) => a + b);
  },

  /* #stringCountBelowThree
  *
  * Takes in an array of strings and returns the amount of strings that have three characters or less.
  *
  * @param {Array}
  * @return {Number}
  */
  stringCountBelowThree: function(arr) {
    return arr.filter(elem => elem.length <= 3).length;
  },

  /* #countObjects
  *
  * Takes in an array of objects and returns the amount of objects in the array.
  *
  * @param {Array}
  * @return {Number}
  */
  countObjects: function(arr) {
    return arr.length;
  },

  /* #getObjectKeys
  *
  * Takes in an object and returns an array of all the object's keys.
  *
  * @param {Object}
  * @return {Array}
  */
  getObjectKeys: function(obj) {
    return Object.keys(obj);
  },

  /* #getObjectValues
  *
  * Takes in an object and returns an array of all the object's values.
  *
  * @param {Object}
  * @return {Array}
  */
  getObjectValues: function(obj) {
    return Object.values(obj);
  },

  /* #makeObject
  *
  * Takes in two arguments 'key' and 'value' and returns a single key-value pair in an object.
  *
  * @param {String}
  * @param {String}
  * @return {Object}
  */
  makeObject: function(key, value) {
    return { [key]: value };
  },

  /* #makeObjectReverse
  *
  * Takes in two arguments 'value' and 'key' and returns a single key-value pair in an object.
  *
  * @param {String}
  * @param {String}
  * @return {Bool}
  */
  makeObjectReverse: function(value, key) {
    return { [key]: value };
  },

  /* #tupleToObject
  *
  * Takes in a tuple (an array with two elements) and returns it into a single key-value pair in an object.
  *
  * @param {Array}
  * @return {Object}
  */
  tupleToObject: function(arr) {
    return { [arr[0]]: arr[1] };
  },

  /* #tupleToObjectReverse
  *
  * Takes in a tuple and returns it into a single key-value pair with second tuple element as key and first tuple element as value.
  *
  * @param {Array}
  * @return {Object}
  */
  tupleToObjectReverse: function(arr) {
    return { [arr[1]]: arr[0] };
  },

  /* #strToKeys
  *
  * Takes in an array of strings and returns an object with all string elements as the object's keys and all values set to 0.
  *
  * @param {Array}
  * @return {Object}
  */
  strToKeys: function(arr) {
    return arr.reduce((result, elem) => {
      result[elem] = 0;
      return result;
    }, {});
  },

  /* #getValues
  *
  * Takes in an object and returns an array of all the object's values.
  *
  * @param {Object}
  * @return {Array}
  */
  getValues: function(obj) {
    return Object.values(obj);
  },

  /* #getKeys
  *
  * Takes in an object and returns an array of the object's keys.
  *
  * @param {Object}
  * @return {Array}
  */
  getKeys: function(obj) {
    return Object.keys(obj);
  },

  /* #objectToArray
  *
  * Takes in an object and returns an array of tuples where each tuple has 
  * the object's key as element 0 and object's value as element 1.
  *
  * @param {Object}
  * @return {Array}
  */
  objectToArray: function(obj) {
    return Object.entries(obj);
  },

  /* #arrayToObject
  *
  * takes in an array and returns an object with keys set to the elements in the array and
  * all values set to false.
  *
  * @param {Array}
  * @return {Object}
  */
  arrayToObject: function(arr) {
    return arr.reduce((result, elem) => {
      result[elem] = false;
      return result;
    }, {});
  },

  /* #arraysToObject
  *
  * takes in two arrays, the first array elements will be keys of an object and second array elements 
  * will be values of an object.
  *
  * @param {Array}
  * @param {Array}
  * @return {Object}
  */
  arraysToObject: function(arr1, arr2) {
    return arr1
      .map((elem, index) => [arr1[index], arr2[index]])
      .reduce((result, elem) => {
        result[elem[0]] = elem[1];
        return result;
      }, {});
  },

  /* #objectsToTuples
  *
  * takes in two objects and returns an array of tuples of the key value pairs of all objects in both arrays.
  *
  * @param {Object}
  * @param {Object}
  * @return {Array}
  */
  objectsToTuples: function(obj1, obj2) {
    return Object.entries(obj1).concat(Object.entries(obj2));
  },

  /* #mapArrayValues
  *
  * takes in an array of strings and returns an object with keys of the array elements and values all set to True.
  *
  * @param {Array}
  * @return {Object}
  */
  mapArrayValues: function(arr) {
    return arr.reduce((result, elem) => {
      result[elem] = true;
      return result;
    }, {});
  },

  /* #mapStringCounts
  *
  * takes in an array of strings and returns an object with key names set to the elements in the array.
  * If the character count of the key name is greater than or equal to 5 set the value to true,
  * otherwise set to false.
  *
  * @param {Array}
  * @return {Object}
  */
  mapStringCounts: function(arr) {
    return arr.reduce((result, elem) => {
      result[elem] = elem.length >= 5 ? true : false;
      return result;
    }, {});
  },

  /* #arrayToObjectNums
  *
  * takes in an array of numbers and returns an object with keys set to 
  * each element of the array and all values set to true.
  *
  * @param {Array}
  * @return {Object}
  */
  arrayToObjectNums: function(arr) {
    return arr.reduce((result, elem) => {
      result[elem] = true;
      return result;
    }, {});
  },

  /* #stringToKeys
  *
  * takes in a string and returns an object whos keys are each letter of the string and all values set to true.
  * 
  * @param {String}
  * @return {Object}
  */
  stringToKeys: function(str) {
    return [].reduce.call(str, (result, elem) => {
      result[elem] = true;
      return result;
    }, {});
  },

  /* #charCountMap
  *
  * takes in an array of strings and returns an object with keys set to each element of the array 
  * and values set to the character count of each key name.
  *
  * @param {Array}
  * @return {Object}
  */
  charCountMap: function(arr) {
    return arr.reduce((result, elem) => {
      result[elem] = elem.length;
      return result;
    }, {});
  },

  /* #frequencyMap
  *
  * takes in an array of strings and returns an object with the string as the key and the number of occurences as the value.
  *
  * @param {String}
  * @return {Bool}
  */
  frequencyMap: function(arr) {
    return arr.reduce((result, elem) => {
      result[elem] = arr.filter((match) => match === elem).length;
      return result;
    }, {});
  },

  /* #tupleConvertToObject
  *
  * takes in an array of tuples and and returns an object whos keys are 
  * the first element of the tuples and values are second element of the tuples.
  *
  * @param {String}
  * @return {Bool}
  */
  tupleConvertToObject: function(arr) {
    return arr.reduce((result, elem) => {
      result[elem[0]] = elem[1];
      return result;
    }, {});
  }
};

