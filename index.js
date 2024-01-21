let inputBox = document.getElementById("input-box");
let listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === "") {
    alert("You must write something!");
  }
}
