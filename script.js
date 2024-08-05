//getting inputs


function appendToDisplay(input) {
    var display = document.getElementById("display");
    display.value += input;
}

function clearDisplay() {
    var display = document.getElementById("display");
    display.value = '';
    display.className = '';

}

function calculate() {

    var display = document.getElementById("display");

    try {
        display.value = eval(display.value);
        display.className = '';
    }
    catch (error) {
        display.value = "Error!";
        display.className = 'error'
    }

}


