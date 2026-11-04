// style özelliğini anlamak

const todo = document.querySelectorAll(".list-group-item ")[0];
//console.log(todo); 
const todoList = document.querySelector(".list-group");
const clearButton  = document.querySelector("#todoClearButton");

todo.style.color = "black";
todo.style.backgroundColor = "purple";
todo.style.fontWeight = "bold";
todo.style.paddingTop = "20px";
todo.style.paddingLeft = "50px";

todoList.style.marginTop = "60px";
todoList.style.marginLeft = "100px";

clearButton.style.backgroundColor = "green";
clearButton.style.fontWeight = "bold";
clearButton.marginTop = "20px";
clearButton.style.color = "lightGray";
clearButton.style.borderRadius = "3s0px";

