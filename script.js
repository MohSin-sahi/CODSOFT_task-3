"use strict";

<<<<<<< HEAD
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
=======
const input = document.querySelector(".input");
const btn = document.querySelector(".button");
const btnText = btn.innerText;
const list = document.querySelector(".list");

let arr = [];
let edit_id = null;
let strObj = localStorage.getItem("data");

if (strObj !== null) {
  arr = JSON.parse(strObj);
}

const showData = function () {
  let html = "";
  arr.forEach((element, i) => {
    html += `<tr>
           <th>${i + 1}</th>
           <td class="tasks">${element.name}</td>
           <td><i class="fa fa-edit edit" onclick='Edit(${i})'></i> <i class="fa fa-trash del" onclick='Del(${i})'></i></td>
         </tr>`;
  });
  list.innerHTML = html;
};
showData();

btn.addEventListener("click", function () {
  const inputValue = input.value;
  if (inputValue === "") {
    alert("Please add something must!");
  } else if (edit_id != null) {
    arr.splice(edit_id, 1, {
      name: inputValue,
    });
    edit_id = null;
  } else {
    arr.push({
      name: inputValue,
    });
  }

  let str = JSON.stringify(arr);
  localStorage.setItem("data", str);
  showData();

  input.value = "";
  btn.innerText = btnText;
});

const Del = function (index) {
  arr.splice(index, 1);
  let str = JSON.stringify(arr);
  localStorage.setItem("data", str);
  showData();
};

const Edit = function (index) {
  edit_id = index;
  input.value = arr[index].name;
  btn.innerText = "Save Changes";
};
>>>>>>> f1d4a553c7fe79b5cd814df35f5030112765b0cb
