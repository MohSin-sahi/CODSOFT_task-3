"use strict";

const buttons = document.querySelectorAll(".btn");
let input = document.querySelector(".display");
let string = "";

buttons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    if (e.target.innerText === "=") {
      string = eval(string);
      input.value = string;
    } else if (e.target.innerText === "C") {
      string = "";
      input.value = string;
    } else if (e.target.innerText === "Del") {
      string = string.slice(0, -1);
      input.value = string;
    } else {
      string += e.target.innerText;
      input.value = string;
    }
  });
});
