let a;
let b;
let c;
// a = window.prompt('Enter the length of side A');
// a = Number(a);
// b = window.prompt('Enter the length of side B');
// b = Number(b);
// c = Math.sqrt(a * a + b * b);
// console.log(c);
document.getElementById('submitButton').onclick = function () {
    a = document.getElementById('aTextBox').value;
    a = Number(a);
    b = document.getElementById('bTextBox').value;
    b = Number(b);
    c = Math.sqrt(a * a + b * b);
    document.getElementById('labelC').innerHTML = 'Side C: ' + c;
};
