// 1. Create an object representation of yourself
// Should include: 
// - firstName
// - lastName
// - 'favorite food'
// - bestFriend (object with the same 3 properties as above)

const bestFriend = {
  firstName: 'Angelina',
  lastName: 'Quiles',
  favoriteFood: 'Pasteles'
}

const charlesBeall = {
  firstName: 'Charles',
  lastName: 'Beall',
  favoriteFood: 'Chicken',
  bestFriend
}

// 2. console.log best friend's firstName and your favorite food

console.log(`${charlesBeall.firstName}`)
console.log(`${charlesBeall.bestFriend.firstName} ${charlesBeall.bestFriend.lastName}`)


// 3. Create an array to represent this tic-tac-toe board
// -O-
// -XO
// X-X

const ticTacToeBoard = [['-', 'O', '-'], ['-', 'X', 'O'], ['X', '-', 'X']]
console.log(ticTacToeBoard)

// 4. After the array is created, 'O' claims the top right square.
// Update that value.

ticTacToeBoard[0][2] = 'O'

// 5. Log the grid to the console.

console.log(ticTacToeBoard)

// 6. You are given an email as string myEmail, make sure it is in correct email format.
// Should be 1 or more characters, then @ sign, then 1 or more characters, then dot, then one or more characters - no whitespace
// i.e. foo@bar.baz
// Hints:
// - Use rubular to check a few emails: https://rubular.com/
// - Use regexp test method https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test

const email1 = `foo@bar.baz`;
const email2 = `myemail@gmail.com`;
const email3 = `myemailgmail.com`;

var emailVerifier = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

console.log(`Is Valid? ${emailVerifier.test(email1)}`);
console.log(`Is Valid? ${emailVerifier.test(email2)}`);
console.log(`Is Valid? ${emailVerifier.test(email3)}`);

// 7. You are given an assignmentDate as a string in the format "month/day/year"
// i.e. '1/21/2019' - but this could be any date.
// Convert this string to a Date
const assignmentDate = '1/21/2019';

const date_assignmentDate = new Date(assignmentDate)
console.log(`Assignemnt Date: ${date_assignmentDate}`)

// 8. Create a new Date instance to represent the dueDate.  
// This will be exactly 7 days after the assignment date.

const assignmentDate_ms = date_assignmentDate.getTime()
const assigmentDueDate_ms = (date_assignmentDate.getTime() + (7 * 24 * 60 * 60 * 1000))

const assignmentDueDate = new Date(assigmentDueDate_ms)
console.log(`Due Date: ${assignmentDueDate}`)

// 9. Use dueDate values to create an HTML time tag in format
// <time datetime="YYYY-MM-DD">Month day, year</time>
// I have provided a months array to help
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

const year = assignmentDueDate.getFullYear();
const month = assignmentDueDate.getMonth()
const monthZeroPadded = (assignmentDueDate.getMonth() + 1).toLocaleString('en-US', {
  minimumIntegerDigits: 2,
  useGrouping: false
});
const day = assignmentDueDate.getDate();
console.log(`day: ${day}`)
const dueDateHtml = `<time datetime="${year}-${monthZeroPadded}-${day}>${months[month]} ${day}, ${year}</time>`

// 10. log this value using console.log

console.log(dueDateHtml)
