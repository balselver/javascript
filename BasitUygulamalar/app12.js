// //Selectors (seçiciler - Style özellikleri
// //classname , id ,tagname

// //getElementbyId : ID ye göre elementi yakala

// let value;
// const button = value = document.getElementById("todoAddButton");

// console.log(button);
// console.log(button.getAttribute("id"));

// console.log(button.className);

// //getElementbyClassName : Class isminegöre elementi yakala
// const todoList = Array.from(document.getElementsByClassName("list-group-item"));
// todoList.forEach(function(todo){
//     console.log(todo);
// })
// console.log(todoList);

// //getElementByTagName : Etiket ismine göreyakalar 
// const forms = Array.from(document.getElementsByTagName("form"));

// forms.forEach(function(form){
//     console.log(form); 
// })
// console.log(forms);

// const todoList2 = document.getElementsByTagName("li");
// console.log(todoList2);

// getElementById + getElementByClassName + getElementByTagName 
//bu üçünün de yaptığını yapan tek bir method var
//QuerySelctor : CSS seçicileri ile element yakalar
//querySelectorAll : CSS seçicileri ile elementleri yakalar

//id seçerken
const clearButton = document.querySelector("#todoClearButton");
console.log(clearButton);

//class seçerken
const todoList3 = document.querySelector(".card-body");
console.log(todoList3); 
//classları seçerken eğer ki birden fazla class varsa ve seçmek istiyorsak all kullanıyoruz
const todoList4 = document.querySelectorAll(".card-body");
//hgerhangi birindex seçmek istiyorsak metotun sonuna belirtebiliriz
console.log(todoList4);

//etiket seçerken hiç birşey koymadan direkt olarak etiket ismini yazarız

const todoList5 = document.querySelectorAll("li:nth-child(1)");
console.log(todoList5);

// even : çift indexli elementleri seçer
const todoList6 = document.querySelectorAll("li:nth-child(even)");
console.log(todoList6);

//odd : tek indexli elementleri seçer
const todoList7 = document.querySelectorAll("li:nth-child(odd)");
console.log(todoList7);

const todoList8 = Array.from(document.querySelectorAll("li:nth-child(even)"));

todoList8.forEach(function(todo){
    todo.style.backgroundColor = "lightgrey";
})
console.log(todoList8)


