"use strict";

let num1 = Math.floor(Math.random() * (9 - 6 + 1)) + 6,
    summ = Math.floor(Math.random() * (14 - 11 + 1)) + 11,
    num2 = summ - num1,
    lineWidth = 39;


number1.textContent = num1;
number2.textContent = num2;
span_one.textContent = num1;
span_two.textContent = num2;


line_one.style.width = num1 * lineWidth + "px";
line_two.style.width = num2 * lineWidth + "px";


let lineOneWidth = line_one.style.width;


line_two.style.left = parseInt(lineOneWidth) + lineWidth + "px";


input_one.onkeyup = function () {
    let input_value = input_one.value;

    if (input_value != num1 && input_value != "") {
        number1.classList.add("orange");
        input_one.classList.add("red");
    } else if (input_value == num1) {
        number1.classList.remove("orange");
        input_one.classList.add("opacity");
        line_two.classList.remove("opacity");
    } else if (input_value == "") {
        number1.classList.remove("orange");
    }
};


input_two.onkeyup = function () {
    let input_value = input_two.value;

    if (input_value != num2 && input_value != "") {
        number2.classList.add("orange");
        input_two.classList.add("red");
    } else if (input_value == num2) {
        number2.classList.remove("orange");
        input_two.classList.add("opacity");
        sum.classList.add("position", "opacity");
        input_sum.classList.remove("opacity");
    } else if (input_value == "") {
        number2.classList.remove("orange");
    }
};


input_sum.onkeyup = function () {
    let input_value = input_sum.value;

    if (input_value != summ) {
        input_sum.classList.add("red");
    } else if (input_value == summ) {
        input_sum.classList.add("opacity");
        sum.classList.remove("opacity");
        sum.textContent = summ;
    }
};