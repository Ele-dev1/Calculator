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
    if (operatorInserted === false) {
        firstNum += '1'
    } else {
        secondNumber += '1'
    }
    display.textContent += '1'
})
twoButton.addEventListener('click', () => {
    if (operatorInserted === false) {
        firstNum += '2'
    } else {
        secondNumber += '2'
    }
    display.textContent += '2'
})
threeButton.addEventListener('click', () => {
    if (operatorInserted === false) {
        firstNum += '3'
    } else {
        secondNumber += '3'
    }
    display.textContent += '3'
})
fourButton.addEventListener('click', () => {
    if (operatorInserted === false) {
        firstNum += '4'
    } else {
        secondNumber += '4'
    }
    display.textContent += '4'
})
fiveButton.addEventListener('click', () => {
    if (operatorInserted === false) {
        firstNum += '5'
    } else {
        secondNumber += '5'
    }
    display.textContent += '5'
})
sixButton.addEventListener('click', () => {
    if (operatorInserted === false) {
        firstNum += '6'
    } else {
        secondNumber += '6'
    }
    display.textContent += '6'
})
sevenButton.addEventListener('click', () => {
    if (operatorInserted === false) {
        firstNum += '7'
    } else {
        secondNumber += '7'
    }
    display.textContent += '7'
})
eightButton.addEventListener('click', () => {
    if (operatorInserted === false) {
        firstNum += '8'
    } else {
        secondNumber += '8'
    }
    display.textContent += '8'
})
nineButton.addEventListener('click', () => {
    if (operatorInserted === false) {
        firstNum += '9'
    } else {
        secondNumber += '9'
    }
    display.textContent += '9'
})

additionButton.addEventListener('click', () => {
    if (operatorInserted == false) {
        operator = '+'
        display.textContent += operator
    }
    operatorInserted = true
})
subtractionButton.addEventListener('click', () => {
    if (operatorInserted == false) {
        operator = '-'
        display.textContent += operator
    }
    operatorInserted = true
})
multiplicationButton.addEventListener('click', () => {
    if (operatorInserted == false) {
        operator = '*'
        display.textContent += operator
    }
    operatorInserted = true
})
divisionButton.addEventListener('click', () => {
    if (operatorInserted == false) {
        operator = '/'
        display.textContent += operator
    }
    operatorInserted = true
})
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