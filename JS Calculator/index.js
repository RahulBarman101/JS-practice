var one = document.getElementById('1');
var two = document.getElementById('2');
var three = document.getElementById('3');
var four = document.getElementById('4');
var five = document.getElementById('5');
var six = document.getElementById('6');
var seven = document.getElementById('7');
var eight = document.getElementById('8');
var nine = document.getElementById('9');
var zero = document.getElementById('0');
var plus = document.getElementById('+');
var minus = document.getElementById('-');
var equal = document.getElementById('=');
var divide = document.getElementById('/');
var multiply = document.getElementById('*');
var clear = document.getElementById('C');
var display = document.getElementById('display');
// var ans = document.getElementById('ans');
var value = '';
var operations = [];
var numbers = [];
var answer = 0;

one.addEventListener('click', () => {
    display.innerHTML = display.innerHTML + 1;
    value = value + '1';
});

two.addEventListener('click', () => {
    display.innerHTML = display.innerHTML + 2;
    value = value + '2';
});

three.addEventListener('click', () => {
    display.innerHTML = display.innerHTML + 3;
    value = value + '3';
});

four.addEventListener('click', () => {
    display.innerHTML = display.innerHTML + 4;
    value = value + '4';
});

five.addEventListener('click', () => {
    display.innerHTML = display.innerHTML + 5;
    value = value + '5';
});

six.addEventListener('click', () => {
    display.innerHTML = display.innerHTML + 6;
    value = value + '6';
});

seven.addEventListener('click', () => {
    display.innerHTML = display.innerHTML + 7;
    value = value + '7';
});

eight.addEventListener('click', () => {
    display.innerHTML = display.innerHTML + 8;
    value = value + '8';
});

nine.addEventListener('click', () => {
    display.innerHTML = display.innerHTML + 9;
    value = value + '9';
});

zero.addEventListener('click', () => {
    display.innerHTML = display.innerHTML + 0;
    value = value + '0';
});

plus.addEventListener('click', () => {
    display.innerHTML = display.innerHTML + '+';
    numbers.push(parseInt(value));
    value = '';
    operations.push('+');
    console.log(numbers);
    console.log(operations);
});

minus.addEventListener('click', () => {
    display.innerHTML = display.innerHTML + '-';
    numbers.push(parseInt(value));
    value = '';
    operations.push('-');
    console.log(numbers);
    console.log(operations);
});

divide.addEventListener('click', () => {
    display.innerHTML = display.innerHTML + '/';
    numbers.push(parseInt(value));
    value = '';
    operations.push('/');
    console.log(numbers);
    console.log(operations);
});

multiply.addEventListener('click', () => {
    display.innerHTML = display.innerHTML + '*';
    numbers.push(parseInt(value));
    value = '';
    operations.push('*');
    console.log(numbers);
    console.log(operations);
});

equal.addEventListener('click', () => {
    numbers.push(parseInt(value));
    value = '';
    console.log(operations);
    console.log(numbers);
    answer = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (operations[0] === '+') {
            answer = answer + numbers[i];
            operations.shift();
        } else if (operations[0] === '-') {
            answer = answer - numbers[i];
            operations.shift();
        } else if (operations[0] === '/') {
            answer = answer / numbers[i];
            operations.shift();
        } else if (operations[0] === '*') {
            answer = answer * numbers[i];
            operations.shift();
        }
    }
    display.innerHTML = answer;
    // ans.innerHTML = answer;
    answer = 0;
});

clear.addEventListener('click', () => {
    display.innerHTML = '';
    // ans.innerHTML = '';
    numbers = [];
    operations = [];
    answer = 0;
    value = '';
});

console.log(numbers)