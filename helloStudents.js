'use strict'


//'use strict'
const say = message => console.log(message)

// 1. Read the JSON file into a variable called students
const students = require('./students.json');

// 2. Iterate over the students array and print Hello with their full names to the console
console.log("\n");
say('ITERATION OVER THE STUDENTS ARRAY SAYING HELLO TO ALL OF THEM');
say("\n");
students.forEach((student) => {
    const firstName=student.firstName
    const lastName=student.lastName
    say(`Hello ${firstName} ${lastName}`)})
// e.g. Hello Walter Baker
say("\n\n");
// 3. Print out the number of last names starting with the letter D
// e.g. Count of last names starting with D is 1

let dNum = students.filter(student=>student.lastName.charAt(0)==="D");

say(`Count of last names starting with D is ${dNum.length}`);
console.log("\n\n");

// console.log(dNum.length);
