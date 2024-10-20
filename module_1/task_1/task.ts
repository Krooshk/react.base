
type Base = 'binary' | 'hexadecimal' | 'decimal';

const prefix = {
    'binary' : '0b',
    'hexadecimal' : '0x',
    'decimal' : '',
}

const digitRepresentaion = {
    'binary' : 2,
    'hexadecimal' : 16,
    'decimal' : 10,
}

type Operation = 'add' | 'substract' | 'multiply' | 'divide';

const operationAction = {
    'add' : (a: number, b: number) => a + b,
    'substract' : (a: number, b: number) => a - b,
    'multiply' : (a: number, b: number) => a * b,
    'divide' : (a: number, b: number) => a / b
}

const DEFAULT_BASE: Base = 'decimal';

function convertedToRequiredBase(prefix: string, ...arr: string[]): number[]{
    return arr.map(el => Number(prefix + el));
}


function handleOperation(a: string, b: string, base: Base = DEFAULT_BASE, operation: Operation): string {
    const currentPrefix = prefix[base];
    const currentDigitBase = digitRepresentaion[base];

    const [convertedA, convertedB] = convertedToRequiredBase(currentPrefix, a, b);

    const resultInDecimal = operationAction[operation](convertedA, convertedB);
    const resultInRequiredBase = resultInDecimal.toString(currentDigitBase)

    return resultInRequiredBase;
}

function add(a: string, b: string, base: Base = DEFAULT_BASE): string {
    return handleOperation(a, b, base, 'add');
}

function substract(a: string, b: string, base: Base = DEFAULT_BASE): string {
    return handleOperation(a, b, base, 'substract');
}

function multiply(a: string, b: string, base: Base = DEFAULT_BASE): string {
    return handleOperation(a, b, base, 'multiply');
}

function divide(a: string, b: string, base: Base = DEFAULT_BASE): string {
    return handleOperation(a, b, base, 'divide');
}

console.log(add('10', '10', 'decimal')) // 20
console.log(add('4', '8', 'hexadecimal')) // C
console.log(add('10', '10', 'binary')) // 100

let tenSqureInDecimal = multiply('10', '10', 'decimal');
let fiveSqureInHexdecimal = multiply('5', '5', 'hexadecimal')
let threeSqureInBinary = multiply('11', '11', 'binary')

console.log(tenSqureInDecimal) // 100
console.log(fiveSqureInHexdecimal) // 19
console.log(threeSqureInBinary) // 1001