let result = document.querySelector(".display");

function display(number) {
  result.value += number;
}
function calculate() {
  let final = result.value;
  let final_result = eval(final);
  result.value = final_result;
}
function clr() {
  result.value = "";
}
function del() {
  result.value = result.value.slice(0, -1);
}
