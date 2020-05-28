export function clearCurrOperationStyle() {
    for (let button
            of document.querySelectorAll('.current_operation')){
        button.classList.remove('current_operation');
    }
}