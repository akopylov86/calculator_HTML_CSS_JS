export function clearCurrOperationStyle() {
    for (let button of document.getElementsByClassName('current_operation')){
        button.classList.remove('current_operation');
    }
}