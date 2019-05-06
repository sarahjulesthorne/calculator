import calc from './calculator.js';
//definition of all buttons selected by ids and assigned to variables
const divideButton = document.getElementById('divideButton');
const multiplyButton = document.getElementById('multiplyButton');
const subtractButton = document.getElementById('subtractButton');
const addButton = document.getElementById('addButton');
const equalsButton = document.getElementById('equalsButton');
const oneButton = document.getElementById('oneButton');
const twoButton = document.getElementById('twoButton');
const threeButton = document.getElementById('threeButton');
const fourButton = document.getElementById('fourButton');
const fiveButton = document.getElementById('fiveButton');
const sixButton = document.getElementById('sixButton');
const sevenButton = document.getElementById('sevenButton');
const eightButton = document.getElementById('eightButton');
const nineButton = document.getElementById('nineButton');
const zeroButton = document.getElementById('zeroButton');

//created because I needed a way to read the inner HTML of each of the number buttons and to pass that number into a function from another module
const addNumber = (e) => {
  e.preventDefault();
  calc.addNumber(e.target.innerHTML);
}

const attachEvents = () => {
  //created because I want the buttons to respond when the user clicks them by calling the addNumber function created above
  oneButton.addEventListener('click', addNumber);
  twoButton.addEventListener('click', addNumber);
  threeButton.addEventListener('click', addNumber);
  fourButton.addEventListener('click', addNumber);
  fiveButton.addEventListener('click', addNumber);
  sixButton.addEventListener('click', addNumber);
  sevenButton.addEventListener('click', addNumber);
  eightButton.addEventListener('click', addNumber);
  nineButton.addEventListener('click', addNumber);
  zeroButton.addEventListener('click', addNumber);
  //math type button listeners created because I want a way to let the user trigger the app calling the setMathType function and to feed it a particular math action to be performed
  addButton.addEventListener('click', (e) => {
    e.target.className += " selectedButton";
    calc.setMathType('add');
  });
  subtractButton.addEventListener('click', (e) => {
    e.target.className += " selectedButton";
    calc.setMathType('subtract');
  });
  multiplyButton.addEventListener('click', (e) => {
    e.target.className += " selectedButton";
    calc.setMathType('multiply');
  });
  divideButton.addEventListener('click', (e) => {
    e.target.className += " selectedButton";
    calc.setMathType('divide');
  });
  //created because I want a way to call the final function and display the result of the calculation
  equalsButton.addEventListener('click', () => {
    calc.calculate();
  });
};
export default {attachEvents};
