import {functionality} from "./functionality";

 initialize();

function initialize() {
    const numbers = document.querySelectorAll('.number');
    const operators = document.querySelectorAll('.operator');
    const remove = document.querySelector('.remove');
    const reverse = document.querySelector('.reverse');
    const equal = document.querySelector('.equal');
    const clear = document.querySelector('.clear');

    numbers.forEach((number) => {
        number.addEventListener('click', functionality.addNumber);
    })
    operators.forEach((operator) => {
        operator.addEventListener('click', functionality.addOperationAndNum1);
    })
    remove.addEventListener('click', functionality.removeNumber);
    reverse.addEventListener('click', functionality.reverseNum);
    equal.addEventListener('click', functionality.countEqual);
    clear.addEventListener('click', functionality.clearAll);
}
