let buttons = document.querySelectorAll('.btn');
let input = document.querySelector('.screen');
let equal = document.querySelector('.equal');
let allClear = document.querySelector('.ac');
let del = document.querySelector('.del');
let screenVal = '';

buttons.forEach(element => {
    element.addEventListener('click', (e) => {
        console.log('ok');
        screenVal += e.target.innerText;
        input.value = screenVal;
    });
});

equal.addEventListener('click', equ);
allClear.addEventListener('click', ac);
del.addEventListener('click', dt);

function equ() {
    let action = String(eval(screenVal));
    input.value = action;
    screenVal=action;
}

function ac() {
   input.value='';
   screenVal='';
}

function dt() {
    let a = input.value;
    input.value = a.slice(0, -1);
    screenVal='';
}
