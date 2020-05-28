import {clearCurrOperationStyle} from "./style";

    let num1 = '';
    let num2 = '';
    let operation = '';
    let resultField = document.calc.txt;

export const functionality = {

    addNumber: function() {
        const num = this.dataset.number;
        if (num1
            && operation
            && !num2) {
            resultField.value = num;
            num2 = resultField.value;
        } else {
            resultField.value += num;
            if (operation) {
                num2 = resultField.value;
            }
        }
    },

    removeNumber: function() {
        resultField.value = resultField.value
            .substr(0, resultField.value.length - 1);
    },

    addOperationAndNum1: function () {
        const currOperation = this.dataset.operator;
        if (num1 && num2) {

            countEqual();
            operation = currOperation;
        } else {
            num1 = resultField.value;
            operation = currOperation;
        }
        clearCurrOperationStyle();
        this.classList.add('current_operation');
    },

    countEqual: function () {
        if (!num2) {
            num2 = resultField.value;
        }
        let result = eval(num1
            + operation
            + num2);
        resultField.value = result;
        num2 = '';
        num1 = result;
        clearCurrOperationStyle();
    },

    reverseNum: function () {
        resultField.value = eval(-1 * resultField.value).toString();
    },

    clearAll: function () {
        resultField.value = '';
        num1 = '';
        num2 = '';
        operation = '';
    },
}