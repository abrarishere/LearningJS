counter = 0;

document.getElementById("increase").onclick = function increment() {
  counter++;
  document.getElementById("counter").innerHTML = counter;
}

document.getElementById("decrease").onclick = function decrement() {
  counter--;
  document.getElementById("counter").innerHTML = counter;
}
document.getElementById("reset").onclick = function resetCounter() {
  counter = 0;
  document.getElementById("counter").innerHTML = counter;
}