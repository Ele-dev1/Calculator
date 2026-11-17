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

let equalButton = document.querySelector("equal")

let currentNum;

oneButton.addEventListener('click', () => {
    currentNum = '1'
    display.textContent += currentNum
})
twoButton.addEventListener('click', () => {
    currentNum = '2'
    display.textContent += currentNum
})
threeButton.addEventListener('click', () => {
    currentNum = '3'
    display.textContent += currentNum
})
fourButton.addEventListener('click', () => {
    currentNum = '4'
    display.textContent += currentNum
})
fiveButton.addEventListener('click', () => {
    currentNum = '5'
    display.textContent += currentNum
})
sixButton.addEventListener('click', () => {
    currentNum = '6'
    display.textContent += currentNum
})
sevenButton.addEventListener('click', () => {
    currentNum = '7'
    display.textContent += currentNum
})
eightButton.addEventListener('click', () => {
    currentNum = '8'
    display.textContent += currentNum
})
nineButton.addEventListener('click', () => {
    currentNum = '9'
    display.textContent += currentNum
})
additionButton.addEventListener('click', () => {
    display.textContent += '+'
})
subtractionButton.addEventListener('click', () => {
    display.textContent += '-'
})
multiplicationButton.addEventListener('click', () => {
    display.textContent += '*'
})
divisionButton.addEventListener('click', () => {
    display.textContent += '/'
})
equalButton.addEventListener('click', () => {
    
})


let firstNum;
let operator;
let secondNumber;

function operate(firstNum, operator, secondNumber) {
    
}

operate()