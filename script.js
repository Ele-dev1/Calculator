let display = document.querySelector("#display")

let zeroButton = document.querySelector("#zero")
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

let pointButton = document.querySelector("#point")

let clearButton = document.querySelector("#clear")
let backspaceButton = document.querySelector("#backspace")


let firstNum = ''
let operator
let operatorInserted = false
let shouldReset = false
let secondNumber = ''

zeroButton.addEventListener('click', () => {
    writeNumber('0')
})
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
        if (shouldReset === true) {
        display.textContent = ''
        firstNum = ''
        secondNumber = ''
        operator = ''
        operatorInserted = false
        shouldReset = false
        }
        firstNum += num
    } else {
        secondNumber += num
    }
    display.textContent += num
}

pointButton.addEventListener('click', () => {
    insertPoint()
})

function insertPoint(){
    if (shouldReset === true) {
        display.textContent = ''
        firstNum = ''
        secondNumber = ''
        operator = ''
        operatorInserted = false
        shouldReset = false
    }
    if (secondNumber === '' && operatorInserted == false) {
        if (firstNum === '') {
            display.textContent += '0.'
            firstNum += '0.'
        } else if (!firstNum.includes('.')) {
            display.textContent += '.'
            firstNum += '.'
        }
    } else {
        if (secondNumber === '') {
            display.textContent += '0.'
            secondNumber += '0.'
        } else if (!secondNumber.includes('.')) {
            display.textContent += '.'
            secondNumber += '.'
        }
    }
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
    if (display.textContent[display.textContent.length -1] === '.') {
        display.textContent = display.textContent.slice(0, -1)
    }
    if (display.textContent === "You cannot divide by 0") {
        firstNum = ''
        secondNumber = ''
        operator = ''
    }
    if (operatorInserted === false) {
        if (firstNum === '') {
            firstNum = '0'
            display.textContent = '0'
        }
        operator = op
        display.textContent += operator
    } else if (operatorInserted === true && secondNumber !== ''){
        firstNum = operate(Number(firstNum), operator, Number(secondNumber))
        if (display.textContent === "You cannot divide by 0") {
            display.textContent = '0'
        }
        secondNumber = ''
        operator = op
        display.textContent += operator
        operatorInserted = false
    } else {
        operator = op
        display.textContent = display.textContent.slice(0, -1) + operator
    }
    operatorInserted = true
}

equalButton.addEventListener('click', () => {
    firstNum = operate(Number(firstNum), operator, Number(secondNumber))
    secondNumber = ''
    operatorInserted = false
    shouldReset = true
})

clearButton.addEventListener('click', () => {
    firstNum = ''
    secondNumber = ''
    display.textContent = ''
    operatorInserted = false
})

backspaceButton.addEventListener('click', () => {
    deleteLastEntry()
})

function deleteLastEntry(){
    if (display.textContent === "You cannot divide by 0") {
        display.textContent = ''
    }
    if (secondNumber === '' && operatorInserted == false) {
        firstNum = String(firstNum).slice(0, -1)
    } else if (secondNumber === '' && operatorInserted == true) {
        operator = ''
        operatorInserted = false
    } else {
        secondNumber = String(secondNumber).slice(0, -1)
    }
    display.textContent = String(display.textContent).slice(0, -1)
}

function operate(a, operator, b) {
    if (operator === "+") {
        display.textContent = +parseFloat(a+b).toFixed(2)
        return +parseFloat(a+b).toFixed(2)
    } else if (operator === "-") {
        display.textContent = +parseFloat(a-b).toFixed(2)
        return +parseFloat(a-b).toFixed(2)
    } else if (operator === "*") {
        display.textContent = +parseFloat(a*b).toFixed(2)
        return +parseFloat(a*b).toFixed(2)
    } else if (operator === "/") {
        if (b == 0) {
            display.textContent = "You cannot divide by 0"
            return ''
        } else {
            display.textContent = +parseFloat(a/b).toFixed(2)
            return +parseFloat(a/b).toFixed(2)
        }
    }
}