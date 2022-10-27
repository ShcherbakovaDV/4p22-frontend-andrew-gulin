'use strict'

const buttonForm = document.getElementById('form__submit');
const formResult = document.getElementById('form__result');



buttonForm.addEventListener('click', (event) => {
    let firstNumber = document.getElementById('first-number').value;
    const symbolForm = document.getElementById('symbol-form').value;
    let secondNumber = document.getElementById('second-number').value;
    let resultCalculator;

    event.preventDefault();

    if (firstNumber === '') {
        return console.log('Первое число не указаано');
    };

    if (secondNumber === '') {
        return console.log('Второе число не указаано');
    };

    if (isNaN(firstNumber) === true || isNaN(secondNumber) === true) {
        formResult.innerText = 'Некорректный ввод чисел';
        return console.log('Некорректный ввод чисел');
    };

    switch (symbolForm) {
        case '': return console.log('Не введён знак'); break;
        case '+': resultCalculator = Number(firstNumber) + Number(secondNumber); break;
        case '-': resultCalculator = Number(firstNumber) - Number(secondNumber); break;
        case '/': resultCalculator = Number(firstNumber) / Number(secondNumber); break;
        case '*': resultCalculator = Number(firstNumber) * Number(secondNumber); break;
        default: return formResult.innerText = 'Программа не поддерживает такую операцию', console.log('Программа не поддерживает такую операцию'); break;
      };

    if (isNaN(resultCalculator)) {
        formResult.innerText = 'Операция некорректна';
        return console.log('Операция некорректна');
    };

    if (resultCalculator === Infinity) {
        formResult.innerText = 'Операция некорректна';
        console.log('Операция некорректна');
    } else {
        formResult.innerText = `Рузультат: ${resultCalculator}`;
        console.log(resultCalculator);
    };
});