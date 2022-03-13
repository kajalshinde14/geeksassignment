
let parent = document.getElementById("parent");
let add_btn = document.getElementById("add_btn");
let arr = [];

function render() {
  parent.innerText = "";

  for (let i = 0; i < arr.length; i++) {
    let to_do = document.createElement("li");
    to_do.innerText = arr[i];
    to_do.classList.add("to_do_style");
    parent.appendChild(to_do);
  }
}

function add_todo() {
  let input_val = document.getElementById("inpt");
  if (!input_val.value) {
    alert("Please enter something");
  } else {
    arr.push(input_val.value);
    render();
    input_val.value = " ";
  }
}

add_btn.addEventListener("click", add_todo);