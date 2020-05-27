import {clearCurrOperationStyle} from "./style";

export const functionality = {
    numsAndOperations: {
        num1: '',
        num2: '',
        operation: '',
    },

    addNumber: function() {
        const num = this.dataset.number;
        if (functionality.numsAndOperations.num1
            && functionality.numsAndOperations.operation
            && !functionality.numsAndOperations.num2) {
            document.calc.txt.value = num;
            functionality.numsAndOperations.num2 = document.calc.txt.value;
        } else {
            document.calc.txt.value += num;
            if (functionality.numsAndOperations.operation) {
                functionality.numsAndOperations.num2 = document.calc.txt.value;
            }
        }
    },

    removeNumber: function() {
        document.calc.txt.value = document.calc.txt.value.substr(0, document.calc.txt.value.length - 1);
    },

    addOperationAndNum1: function () {
        const operation = this.dataset.operator;
        if (functionality.numsAndOperations.num1 && functionality.numsAndOperations.num2) {
            countEqual();
            functionality.numsAndOperations.operation = operation;
        } else {
            functionality.numsAndOperations.num1 = document.calc.txt.value;
            functionality.numsAndOperations.operation = operation;
        }
        clearCurrOperationStyle();
        this.classList.add('current_operation');
    },

    countEqual: function () {
        if (!functionality.numsAndOperations.num2) {
            functionality.numsAndOperations.num2 = document.calc.txt.value;
        }
        let result = eval(functionality.numsAndOperations.num1
            + functionality.numsAndOperations.operation
            + functionality.numsAndOperations.num2);
        document.calc.txt.value = result;
        functionality.numsAndOperations.num2 = '';
        functionality.numsAndOperations.num1 = result;
        clearCurrOperationStyle();
    },

    reverseNum: function () {
        document.calc.txt.value = eval(-1 * document.calc.txt.value).toString();
    },

    clearAll: function () {
        document.calc.txt.value = '';
        functionality.numsAndOperations.num1 = '';
        functionality.numsAndOperations.num2 = '';
        functionality.numsAndOperations.operation = '';
    },
}