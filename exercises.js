// ---------------------
// Define a function that takes a string and an integer of i and creates
// a new array of length i where each value is equal to the string passed in
// myFunction('sunshine', 3) => ['sunshine', 'sunshine', 'sunshine'];
// ---------------------

// Put your answer below -------------------------

function myFunction(word, integer){
  const myArray = []
  for(let i = 0; i < integer; i++){
    myArray.push(word);
  }
  return myArray;

}

console.log(myFunction('sunshine', 3));



// -----------------------------------------------

// ---------------------
// Define a function that takes an array and reverses all the values in an array
// The function should not mutate the original array
// ---------------------

// Put your answer below -------------------------

const myArray = ['1', '2', '3'];

const newArray = [...myArray].reverse(myArray);
  console.log(newArray);




// -----------------------------------------------

// ---------------------
// Define a function that takes an array and removes all falsy values from the array
// ---------------------

// Put your answer below -------------------------

const arr7 = [1, '', 0]

function noFalsy(arr){
  let result = [];
  for(let i = 0; i < arr.length; i++){
    if(arr[i]){
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(noFalsy(arr7));



// -----------------------------------------------

// ---------------------
// Define a function that takes an array of nested arrays and returns an object composed of propeties equal to each nested array
// const myArray = [['name', 'Charlie'], ['color', 'brown'], ['age', 10]];
// returns { name: 'Charlie', color: 'brown', age: 10 };
// ---------------------

// Put your answer below -------------------------

const list = [['name', 'Charlie'], ['color', 'brown'], ['age', 10]];

function func2(arr){
  obj = Object.fromEntries(arr);
  return obj;
}

console.log(func2(list));



// -----------------------------------------------

// ---------------------
// Define a function that takes an array and removes duplicate values
// [1,2,3,4,5,4,3] should return [1,2,3,4,5]
// ---------------------

// Put your answer below -------------------------

const numberArray = [1,2,3,4,5,4,3];
 let dup = [...new Set(numberArray)];
 console.log(dup);







// -----------------------------------------------

// ---------------------
// Define a function that takes two arrays and returns true if they have identical values (order does not matter), it should return false otherwise
// [1,2,3,4] and [1,2,3,4] should return true
// [1,2,3,4,5] and [1,2,3,4] should return false
// [1,2,3,4] and [1,2,3,4,4] should return false
// [1,2,3,4] and [1,4,3,2] should return true
// ---------------------

// Put your answer below -------------------------
const arr1 = [1, 2, 3, 4]
const arr2 = [1, 2, 3, 4, 5]


function func3(arr1, arr2){
  if(arr1.length !== arr2.length){
    return false;
  }
    arr1 = arr1.sort((a, b) => a - b);
    arr2 = arr2.sort((a, b) => a - b);
    for(let i = 0; i < arr1.length; i++){
      if(arr1[i] !==arr2[i]){
        return false;
        console.log('false');
      }
    }
    return true;
    console.log('true');
}

console.log(func3(arr1, arr2));






// -----------------------------------------------

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//            ___  ____  _  ____  ______        //
//           / _ )/ __ \/ |/ / / / / __/        //
//          / _  / /_/ /    / /_/ /\ \          //
//         /____/\____/_/|_/\____/___/          //
//                                              //
//////////////////////////////////////////////////
//////////////////////////////////////////////////

// ---------------------
// Define a function that takes an array and returns a new array with all sub-array elements concatenated into it
// [0, 1, 2, [3, 4]] should return [0, 1, 2, 3, 4]
// [0, 1, 2, [[[3, 4]]]] should return [0, 1, 2, 3, 4]
// DO NOT USE Array.prototype.flat()
// ---------------------

// Put your answer below -------------------------










// -----------------------------------------------
