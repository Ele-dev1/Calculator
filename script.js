let display = document.querySelector("#display")

let oneButton = document.querySelector("#one")
let twoButton = document.querySelector("#two")
let threeButton = document.querySelector("#three")
let fourButton = document.querySelector("#four")
let fiveButton = document.querySelector("#five")
let sixButton = document.querySelector("#six")
let sevenButton = document.querySelector("#seven")
let eightButton = document.querySelector("#eight")
let nineButton = document.querySelector("#nine")

let additionButton = document.querySelector("#addition")
let subtractionButton = document.querySelector("#subtraction")
let multiplicationButton = document.querySelector("#multiplication")
let divisionButton = document.querySelector("#division")

let equalButton = document.querySelector("#equal")

let firstNum = 0
let operator
let operatorInserted = false
let secondNumber = 0

oneButton.addEventListener('click', () => {
    writeNumber('1')
})
twoButton.addEventListener('click', () => {
    writeNumber('2')
})
threeButton.addEventListener('click', () => {
    writeNumber('3')
})
fourButton.addEventListener('click', () => {
    writeNumber('4')
})
fiveButton.addEventListener('click', () => {
    writeNumber('5')
})
sixButton.addEventListener('click', () => {
    writeNumber('6')
})
sevenButton.addEventListener('click', () => {
    writeNumber('7')
})
eightButton.addEventListener('click', () => {
    writeNumber('8')
})
nineButton.addEventListener('click', () => {
    writeNumber('9')
})

function writeNumber (num) {
    if (operatorInserted === false) {
        firstNum += num
        operator = false
    } else {
        secondNumber += num
    }
    display.textContent += num
}

additionButton.addEventListener('click', () => {
    writeOperator('+')
})
subtractionButton.addEventListener('click', () => {
    writeOperator('-')
})
multiplicationButton.addEventListener('click', () => {
    writeOperator('*')
})
divisionButton.addEventListener('click', () => {
    writeOperator('/')
})

function writeOperator (op) {
    if (operatorInserted == false) {
        operator = op
        display.textContent += operator
    }
    operatorInserted = true
}

equalButton.addEventListener('click', () => {
    operate(Number(firstNum), operator, Number(secondNumber))
})

function operate(a, operator, b) {
    if (operator === "+") {
        display.textContent = a+b
        return a + b
    } else if (operator === "-") {
        display.textContent = a-b
        return a - b
    } else if (operator === "*") {
        display.textContent = a*b
        return a * b
    } else if (operator === "/") {
        display.textContent = a/b
        return a / b
    }
}