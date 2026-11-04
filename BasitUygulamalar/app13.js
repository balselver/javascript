// HTML elementleri üzerinde gezinme

const todo = document.querySelector(".list-group-item");
const todoList = document.querySelector(".list-group");
//const card= document.getElementsByClassName("card");
const card = document.querySelector(".card");
const lastChild = document.querySelectorAll(".list-group-item:nth-child(4)");
const row1 = document.querySelector(".row");

let value;
//anneden çocuklara erişmek
value = todoList;
value = todoList.children;
value = todoList.children[3];
value = todoList.children[todoList.children.length - 1];
value = todoList.children[3].textContent = "Değişti";

// value = Array.from(todoList.children);
// value.forEach(function(todo){
//     console.log(todo.textContent)
// })


//çocuktan anneye erişmek
value = todo;
let ul = todo.parentElement;
let cardBody = ul.parentElement;
let cardP = cardBody.parentElement;
let row = cardP.parentElement;
let container = row.parentElement;
//console.log(container);

//kardeşler arasında gezinmek
value1 = todo;
value1 = todo.nextElementSibling.nextElementSibling.nextElementSibling;

value2 = lastChild;
value2 = lastChild.previousElementSibling;
//console.log(value1);
//console.log(value2);

//value = row.children[0].children[3].children[0].textContent = "ToDo Listesi Başlığı Değişti";
let todo3 = container.children[0].children[0].children[3].children[2].children[2];
todo3.textContent = "ToDo 3 Değişti";
todo3.style.backgroundColor = "gray";
todo3.style.color= "black";
todo3.style.fontWeight = "bold";


console.log(value);
