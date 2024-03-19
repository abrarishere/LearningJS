let age= 21;
let firstName="Abrar";
let student=true;
age=age+1;
console.log("hello", firstName);
console.log("You are",age,"Year Old");
console.log("Enolled",student);


document.getElementById("p1").innerHTML = "hello " + firstName;

document.getElementById("p2").innerHTML = "You are " + age + " Years old";

document.getElementById("p3").innerHTML = "Enrolled " + student;
