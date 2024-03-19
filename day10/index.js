let a;
let b;
let c;
document.getElementById("roll").onclick = function () {
    a = Math.floor(Math.random() * 6) + 1;
    b = Math.floor(Math.random() * 6) + 1;
    c = Math.floor(Math.random() * 6) + 1;
    document.getElementById("xLabel").innerHTML = a;
    document.getElementById("yLabel").innerHTML = b;
    document.getElementById("zLabel").innerHTML = c
}