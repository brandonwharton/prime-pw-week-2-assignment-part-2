// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening.
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We make a variable called name and set it's value to the string 'Dane'.
// We then make a conditional if/else statement which checks if the boolean
// value of our variable name against the string 'Mary'. Since name doesn't
// equal 'Mary', the boolean value comes out as false, so our else code
// gets ran instead, which console logs 'How do you do?'.

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We make a variable called secret with an undefined value. We also make a
// variable called code and set it's value to the number 123. We then write two
// conditional if statements. The first one checks if the value of code is exactly
// 123. Since it is, the code in the first if statement is ran, which defines
// our secret variable as the string 'super', and then takes our code variable
// and multiplies itself by 2. The second conditional if statement is then ran,
// which is checking to see if the value of code is greater than 250. Since it's
// new value is now 246, which is less than 250, the second if statement is ignored,
// so our final console log outputs the string 'super'.


//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// We set a variable named isStudent to the boolean value true, another named age
// to the number 34, and third named zip to the value 55407. We then create a
// conditional if/else if statement where the first if statement is checking the
// compound conditional of whether both isStudent is true, and if zip is greater
// than 80000. Since isStudent is true but zip is less than 80000, the first else
// if statement is checked, which is checking if either isStudent is false, or
// if age is less than 30. Since neither are true, the second else if statement
// is checked, which is checking only whether isStudent is true. Since it is, the code
// inside that statement gets ran, which logs 'Welcome to Prime!' to the console.
// Since one of the conditions of the if/else if conditional has been met, the remaining
// else statement is ignored.

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code.
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2.
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment.
// Should be number++.
number--;

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and
// colorTwo is set to 'red', and mix is set to true. We check if mix is true
// -- it is, so we set colorOne and colorTwo to 'purple'

//CODE
/*
let colorOne = 'red';
let colorTwo = 'blue';
// FIX
// colorOne should be set to 'blue', not 'red', and vice versa for colorTwo.

let mix = true;

//CODE
if (mix === true) {
  colorOne = 'purple';
}
//FIX
// This is only setting colorOne to purple. There should be an additional line
// of code within the conditional's brackets that says "colorTwo = 'purple'; "
// which would set colorTwo to be purple as well.
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4
// -- they are so we console.log 'throw away the food!'

/*
//CODE
let temp = 40;
const time = 4;

//FIX
// It would be better to use "let time=4" rather than "const time=4". This looks
// like it's checking for time and temperature control for food safety, and presumably
// the user would input values for both temp and time to see if the food needs to be
// thrown away. Since, in that case, time would need to be adjustable later, "let"
// would allow us more options for changing it later in our code, rather than just
// altering the original variable. For this singular example, however, "const" would
// work fine.

//CODE
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}

//FIX
// The compound conditional is using || which means "or", so this conditional is
// checking whether either case of temp >39 or time >=4 is true. In this case, we
// want to use && instead of ||, since we're trying to see whether both of the
// conditions are true.

}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

//CODE
if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}

//FIX
// First, we should change "minAge <= age" to "age >= minAge" inside the conditional.
// Both are functionally the same, but the question specifically mentions checking
// whether age is greater than or equal to minAge, and the current conditional is
// checking whether minAge is less than or equal to age.
// From there, the condition "age >= minAge" is met, so the code inside the if bracket
// logs 'no entry' to the console. We want the reverse to be true, so we should
// switch the two lines of code inside the brackets so the if statement logs 'enter'
// and the else statement logs 'no entry'. Alternately, we could change the conditional
// to if(minAge > age) and keep the rest of the code the same, since with these
// variables minAge isn't greater than age, so the existing else code would log
// 'enter' for us, though the first option would be more in line with how the
// question has been phrased, since we're checking to see if age is 21 or over,
// rather than checking if age is 20 or less.

*/
