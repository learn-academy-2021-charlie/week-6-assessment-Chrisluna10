// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

const { array } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function


// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their names capitalized.

// a) Create a test with an expect statement using the variable provided.

var people = [
  { name: "ford prefect", occupation: "hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "radio employee" }
]
// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is a president of the galaxy.", "Arthur Dent is a radio employee."]

describe("sentence", () => {
  it("returns an array with a sentence about each person with their names capitalized", () => {
    expect(sentence(person)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is a president of the galaxy.", "Arthur Dent is a radio employee."])
    
  })
})

// b) Create the function that makes the test pass.
// create a function called sentence that takes in an array
const sentence = (array) => {
  // create a variable with an empty array that will store each object
  let allSentence = []
  array.forEach(person => {
    `${person.name} is a ${person.occupation}.`
    allSentence.push(array)
  })
  return allSentence
}
console.log(sentence())

// I know the forEach method should be used but i was not able to find the right way to implement it in my code. I would run into errors such as undefined and [ [Function: sentence], [Function: sentence], [Function: sentence] ].

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

var hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
var hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]

describe("remaining", () => {
  it("returns an array of only the REMAINDERS of the numbers when divided by 3.", () => {
    expect(remaining(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
    expect(remaining(hodgepodge2)).toEqual([ 2, 1, -1 ])
  })
})

// b) Create the function that makes the test pass.
// create an array called remaining that will take in an array
const remaining = (array) => {
  // return the array with filter to return an array of only truthy arguments
  return array.filter(value => {
    // argument to return only numbers 
    return typeof value == "number"
    // map through each value in the array to find the modulo of each
  }).map(value => {
    return value % 3
  })
}

// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

var cubeAndSum1 = [2, 3, 4]
// Expected output: 99
var cubeAndSum2 = [0, 5, 10]
// Expected output: 1125

describe("cubedAndSum", () => {
  it("returns the sum of all the numbers cubed.", () => {
    expect(cubedAndSum(cubeAndSum1)).toEqual(99)
    expect(cubedAndSum(cubeAndSum2)).toEqual(1125)
  })
})

// b) Create the function that makes the test pass.
// create a function called cubedAndSum that takes in an array
const cubedAndSum = (array) => {
  // create a new variable that maps through the given array
  let arr = array.map(value => {
    // output the value cubed 
    return value ** 3
  })
  // returning the current value of the number plus the current element in the array
  return arr.reduce((accumulator, currentValue) => accumulator + currentValue)
}

