const display= document.queryselector('#display');
const buttons= document.queryselectorAll('button');

buttons.forEach((item) => {
item.onclick = () => {
    if (item.id == 'clear') {
        display.innerText = '';
    } else if (item.id == 'backspace') {
        Let string = display.innerText.tostring();
        display.innerText = string.substr(0, string.length - 1);
   } else if (display.innerText != '' && item.id == 'equal') {
    display.innerText = eval(display.innerText);
   } else if (display.innerText == '' && item.id =='equal') {
    display.innerText = 'Empty!';
    setTimeout(() => (display.innerText = ''), 2000);
   } else {
    display.innerText += item.id;
   }
}
}}

const.themeToggleBtn = document.queryselector('.theme-toggler');
const.calculator = document.queryselector('.calculator');
const.toggleIcon = document.queryselector('.toggler-icon');
let isDark = true;
themeToggleBtn.onclick = () => {
    calculator.classList.toggle('dark');
    themeToggleBtn.classList.toggle('active');
    isDark = !isDark;
}