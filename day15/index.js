document.getElementById("myButton").onclick = function () {
    const checkbox = document.getElementById("myCheckbox");
    const visa = document.getElementById("visa");
    const master = document.getElementById("master");
    const paypal = document.getElementById("paypal");

    if (checkbox.checked) {
        alert("Thank you for subscribing");
    }
    else {
        alert("Thank you for unsubscribing");
    }
    if (visa.checked) {
        alert("You are paying with Visa");
    }
    else if (master.checked) {
        alert("You are paying with Master");
    }
    else if (paypal.checked) {
        alert("You are paying with Paypal");
    }
    else {
        alert("Please select a payment method");
    }
}