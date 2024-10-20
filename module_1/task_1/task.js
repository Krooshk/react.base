"use strict";
const prefix = {
    'binary': '0b',
    'hexadecimal': '0x',
    'decimal': '',
};
const digitRepresentaion = {
    'binary': 2,
    'hexadecimal': 16,
    'decimal': 10,
};
const operationAction = {
    'add': (a, b) => a + b,
    'substract': (a, b) => a - b,
    'multiply': (a, b) => a * b,
    'divide': (a, b) => a / b
};
const DEFAULT_BASE = 'decimal';
function convertedToRequiredBase(prefix, ...arr) {
    return arr.map(el => Number(prefix + el));
}
function handleOperation(a, b, base = DEFAULT_BASE, operation) {
    const currentPrefix = prefix[base];
    const currentDigitBase = digitRepresentaion[base];
    const [convertedA, convertedB] = convertedToRequiredBase(currentPrefix, a, b);
    const resultInDecimal = operationAction[operation](convertedA, convertedB);
    const resultInRequiredBase = resultInDecimal.toString(currentDigitBase);
    return resultInRequiredBase;
}
function add(a, b, base = DEFAULT_BASE) {
    return handleOperation(a, b, base, 'add');
}
function substract(a, b, base = DEFAULT_BASE) {
    return handleOperation(a, b, base, 'substract');
}
function multiply(a, b, base = DEFAULT_BASE) {
    return handleOperation(a, b, base, 'multiply');
}
function divide(a, b, base = DEFAULT_BASE) {
    return handleOperation(a, b, base, 'divide');
}
console.log(add('10', '10', 'decimal')); // 20
console.log(add('4', '8', 'hexadecimal')); // C
console.log(add('10', '10', 'binary')); // 100
