import maths from './maths.js';
import util from './utils.js';
let calc = {
firstNum: '',
secondNum: '',
mathType: '',
display: ''
};

const setDisplay = (numToPrint) => {
calc.display = numToPrint;
util.printToDom('result', calc.display);
};

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