/*Module does heavy lifting of application.
Performs most of the actual calculations, initializes functions to be called in button event listeners, and displays results and numbers to page*/
import maths from './maths.js';
import util from './utils.js';

//object initialized because I wanted a way to hold changing pieces of information and feed them back into other functions
let calc = {
firstNum: '',
secondNum: '',
mathType: '',
display: ''
};

//created to assign calc object display key a value and to print that value to the page
const setDisplay = (numToPrint) => {
calc.display = numToPrint;
util.printToDom('result', calc.display);
};

//created to test for whether the number being clicked is the first or second number and to assign them to the appropriate keys and display them
const addNumber = (num) => {
if (calc.mathType === '') {
calc.firstNum += num;
setDisplay(calc.firstNum);
}
else {
calc.secondNum += num;

    setDisplay(calc.secondNum);

}
};

const setMathType = (newType) => {
calc.mathType = newType;};

//used switch to test for math type set by last function, (setMathType), and call appropriate function from maths.js
//displays result to page
const calculate = () => {
    let answer = 0;
switch (calc.mathType) {
    case 'add': 
    answer = maths.add(calc.firstNum, calc.secondNum);
    break;
    case 'subtract':
    answer = maths.subtract(calc.firstNum, calc.secondNum);
    break;
    
    case 'multiply':
    answer = maths.multiply(calc.firstNum, calc.secondNum);
    break;

    case 'divide':
    answer = maths.divide(calc.firstNum, calc.secondNum);
    break;


default:
answer = 'error: you broke it';
}
setDisplay(answer);
};


export default {addNumber, setMathType, calculate};