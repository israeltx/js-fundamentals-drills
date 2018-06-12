module.exports = {
  /* #doubleArray
  *
  * Takes in an array of numbers and returns an array with each element doubled
  *
  * @param {Array} // [1,2,3]
  * @return {Array} // [2,4,6]
  */
  doubleArray: function(arr) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
      result.push(arr[i] * 2) 
    }
    return result
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
    var result = 0;
    for (var i = 0; i < arr1.length; i++) {
      result += arr1[i];
    }
    for (var i = 0; i < arr2.length; i++) {
      result += arr2[i];
    }
    return result;
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
    var result = 0;
    for (var i = 0; i < arr.length; i++) {
      result += arr[i];
    }
    return result;
  },

  /* #countStrings
  *
  * Takes in an array of strings and returns an array of string lengths.
  *
  * @param {Array}
  * @return {Array}
  */
  countStrings: function(arr) {
    var lengthArr = [];
    for (var i = 0; i < arr.length; i++) {
      lengthArr.push(arr[i].length);
    }
    return lengthArr;
  },

  /* #countAllStrings
  *
  * Takes in an array of strings and returns the sum of all string lengths.
  *
  * @param {String}
  * @return {Number}
  */
  countAllStrings: function(arr) {
    var result = 0;
    for (var i = 0; i < arr.length; i++) {
      result += arr[i].length;
    }
    return result;
  },

  /* #convertToArray
  *
  * Takes in an object and returns all the values of the object in an array.
  *
  * @param {Object}
  * @return {Array}
  */
  convertToArray: function(obj) {
    var arr = [];
    for (var i = 0; i < Object.values(obj).length; i++) {
      arr.push(Object.values(obj)[i]);
    }
    return arr;
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
    var arr = [];
    for (var i = 0; i < num; i++) {
      arr.push(0);
    }
    return arr;
  },

  /* #poppedArray
  *
  * Takes in an array of numbers and returns an array of all but the last element of the array.
  *
  * @param {Array}
  * @return {Array}
  */
  poppedArray: function(arr) {
    arr.pop();
    return arr;
  },

  /* #splitString
  *
  * Takes in a string and returns an array of each individual character in the string.
  *
  * @param {String}
  * @return {Array}
  */
  splitString: function(str) {
    var arr = [];
    for (var i = 0; i < str.length; i++) {
      arr.push(str[i]);
    }
    return arr;
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
    var result = 0;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] < 10) {
        result += arr[i];
      }
    }
    return result;
  },

  /* #moreThanTenLetters
  *
  * Takes in an array of strings and returns the amount of elements that have more than ten letters.
  *
  * @param {String}
  * @return {Number}
  */
  moreThanTenLetters: function(arr) {
    var result = 0;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i].length > 10) {
        result++;
      }
    }
    return result;
  },

  /* #multiplyAll
  *
  * Takes in an array of numbers and returns the product of all elements.
  *
  * @param {Array}
  * @return {Number}
  */
  multiplyAll: function(arr) {
    var result = [[arr[0]]];
    for (var i = 1; i < arr.length; i++) {
      result *= arr[i];
    }
    return result;
  },

  /* #sumAllPositive
  *
  * Takes in an array of numbers and returns the sum of all non-negative numbers.
  *
  * @param {String}
  * @return {Number}
  */
  sumAllPositive: function(arr) {
    var result = 0;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] >= 0) {
        result += arr[i];
      }
    }
    return result;
  },

  /* #stringCountBelowThree
  *
  * Takes in an array of strings and returns the amount of strings that have three characters or less.
  *
  * @param {Array}
  * @return {Number}
  */
  stringCountBelowThree: function(arr) {
    var result = 0;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i].length <= 3) {
        result++
      }
    }
    return result;
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
    var arr = [];
    for (var i = 0; i < Object.keys(obj).length; i++) {
      arr.push(Object.keys(obj)[i]);
    }
    return arr;
  },

  /* #getObjectValues
  *
  * Takes in an object and returns an array of all the object's values.
  *
  * @param {Object}
  * @return {Array}
  */
  getObjectValues: function(obj) {
    var arr = [];
    for (var i = 0; i < Object.values(obj).length; i++) {
      arr.push(Object.values(obj)[i]);
    }
    return arr;
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
    return {
      [key]: value
    }
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
    return {
      [key]: value
    }
  },

  /* #tupleToObject
  *
  * Takes in a tuple (an array with two elements) and returns it into a single key-value pair in an object.
  *
  * @param {Array}
  * @return {Object}
  */
  tupleToObject: function(arr) {
    return {
      [arr[0]]: arr[1]
    }
  },

  /* #tupleToObjectReverse
  *
  * Takes in a tuple and returns it into a single key-value pair with second tuple element as key and first tuple element as value.
  *
  * @param {Array}
  * @return {Object}
  */
  tupleToObjectReverse: function(arr) {
    return {
      [arr[1]]: arr[0]
    }
  },

  /* #strToKeys
  *
  * Takes in an array of strings and returns an object with all string elements as the object's keys and all values set to 0.
  *
  * @param {Array}
  * @return {Object}
  */
  strToKeys: function(arr) {
    var obj = {};
    for (var i = 0; i < arr.length; i++) {
      obj[arr[i]] = 0;
    }
    return obj;
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
    var arr = [];
    var objLength = Object.keys(obj).length;
    for (var i = 0; i < objLength; i++) {
      arr.push([]);
    }
    for (var j = 0; j < objLength; j++) {
      arr[j].push(Object.keys(obj)[j]);
    }
    for (var k = 0; k < objLength; k++) {
      arr[k].push(Object.values(obj)[k]);
    }
    return arr;
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
    var obj = {};
    for (var i = 0; i < arr.length; i++) {
      obj[arr[i]] = false;
    }
    return obj;
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
    var obj = {};
    for (var i = 0; i < arr1.length; i++) {
      obj[arr1[i]] = arr2[i];
    }
    return obj;
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
    var obj1Length = Object.keys(obj1).length;
    var obj2Length = Object.keys(obj2).length;
    var arr = [];
    var k = 0;
    for (var i = 0; i < obj1Length; i++) {
      arr.push([]);
      arr[i].push(Object.keys(obj1)[i]);
      arr[i].push(Object.values(obj1)[i]);
    }
    for (var j = arr.length; j < (obj1Length + obj2Length); j++) {
      arr.push([]);
      arr[j].push(Object.keys(obj2)[k]);
      arr[j].push(Object.values(obj2)[k]);
      k++;
    }
    return arr;
  },

  /* #mapArrayValues
  *
  * takes in an array of strings and returns an object with keys of the array elements and values all set to True.
  *
  * @param {Array}
  * @return {Object}
  */
  mapArrayValues: function(arr) {
    var obj = {};
    for (var i = 0; i < arr.length; i++) {
      obj[arr[i]] = true;
    }
    return obj;
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
    var obj = {};
    for (var i = 0; i < arr.length; i++) {
      if (arr[i].length >= 5) {
        obj[arr[i]] = true;
      } else {
        obj[arr[i]] = false;
      }
    }
    return obj;
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
    var obj = {};
    for (var i = 0; i < arr.length; i++) {
      obj[arr[i]] = true;
    }
    return obj;
  },

  /* #stringToKeys
  *
  * takes in a string and returns an object whos keys are each letter of the string and all values set to true.
  * 
  * @param {String}
  * @return {Object}
  */
  stringToKeys: function(str) {
    var obj = {};
    for (var i = 0; i < str.length; i++) {
      obj[str[i]] = true;
    }
    return obj;
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
    var obj = {};
    for (var i = 0; i < arr.length; i++) {
      obj[arr[i]] = arr[i].length;
    }
    return obj;
  },

  /* #frequencyMap
  *
  * takes in an array of strings and returns an object with the string as the key and the number of occurences as the value.
  *
  * @param {String}
  * @return {Bool}
  */
  frequencyMap: function(arr) {
    var obj = {};
    var namesOfPropertiesInArr = [];
    var countOfPropertiesInArr = [];
    for (var i = 0; i < arr.length; i++) {
      var count = 0;
      if (!namesOfPropertiesInArr.includes(arr[i])) {
        namesOfPropertiesInArr.push(arr[i]);
        for (var j = 0; j < arr.length; j++) {
          if (arr[i] === arr[j]) {
            count++;
          }
        }
      }
      if (count > 0) {
        countOfPropertiesInArr.push(count);
      }
    }
    for (var k = 0; k < namesOfPropertiesInArr.length; k++) {
      obj[namesOfPropertiesInArr[k]] = countOfPropertiesInArr[k];
    }
    return obj;
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
    var obj = {}
    for (var i = 0; i < arr.length; i++) {
      obj[arr[i][0]] = arr[i][1];
    }
    return obj;
  }
}
