// Tüm elementleri seçmek 

const form = document.querySelector("#todoAddForm");
const addInput = document.querySelector("#todoName");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const clButton = document.querySelector("#clearButton");
const filterInput = document.querySelector("#todoSearch");

let todos = [];

runEvents();

function runEvents() {
    form.addEventListener("submit", addTodo);
    document.addEventListener("DOMContentLoaded", pageLoaded);
    secondCardBody.addEventListener("click", removeToDoToUI);
    clButton.addEventListener("click", allTodosEveryWhere);
    filterInput.addEventListener("keyup", filter);
}
function addTodo(e) {
    const inputText = addInput.value.trim();
    if (inputText == null || inputText == "") {
        showAlert("warning", "Lütfen boş bırakmayınız.");
    } else {
        //arayüz ekleme
        addTodoToUI(inputText);
        //storage ekleme
        addToDoStorage(inputText);
        showAlert("success", "Todo Eklendi");
    }
    e.preventDefault();
}
function addTodoToUI(newTodo) {

    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between";
    li.textContent = newTodo;

    const a = document.createElement("a");
    a.href = "#";
    a.className = "delete-item";

    const i = document.createElement("i");
    i.className = "fa fa-remove";


    a.appendChild(i);
    li.appendChild(a);
    todoList.appendChild(li);

    addInput.value = "";

}
function addToDoStorage(newTodo) {
    checkTodosFromStorage();
    todos.push(newTodo);
    localStorage.setItem("todos", JSON.stringify(todos));
}
function removeToDoToUI(e) {
    //silinmek istenen hedefi console da gördük sınıf bilgisini aldık
    // console.log(e.target);

    if (e.target.className === "fa fa-remove") {
        //ekrandan silmek
        const todo = e.target.parentElement.parentElement;
        todo.remove();

        //storagetan silmek
        removeToDoToStorage(todo.textContent);
        showAlert("success", "Todo Başarıyla Silindi.");
    }
}
function removeToDoToStorage(removeTodo) {
    checkTodosFromStorage();
    todos.forEach(function (todo, index) {
        if (removeTodo === todo) {
            todos.splice(index, 1);
        }
    });
    localStorage.setItem("todos", JSON.stringify(todos));

}
function checkTodosFromStorage() {
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
}
function showAlert(type, message) {
    const div = document.createElement("div");
    div.className = `alert alert-${type}`;
    //dinamik olması için classname böyle tanımlandı
    div.textContent = message;
    firstCardBody.appendChild(div);

    //mesajın iki üç saniye sonra kaybolması için
    setTimeout(function () {
        div.remove();
    }, 2500);
}
function pageLoaded() {
    checkTodosFromStorage(); todos.forEach(function (todo) {
        addTodoToUI(todo);
    });
}
function filter(e) {
    const filterValue = e.target.value.toLowerCase().trim();
    const todoListesi = document.querySelectorAll(".list-group-item");

    if (todoListesi.length > 0) {
        todoListesi.forEach(function (todo) {
            if (todo.textContent.toLowerCase().trim().includes(filterValue)) {
                todo.setAttribute("style", "display : block");
            } else {
                todo.setAttribute("style", "display : none !important");
            }
        });
    } else {
        showAlert("warning", "Filtreleme yapmak için en az bir to do olmalıdır.");
    }
}
function allTodosEveryWhere() {
    const todoListesi = document.querySelectorAll(".list-group-item");
    //ekrandan silme
    if (todoListesi.length > 0) {
        todoListesi.forEach(function (todo) {
            todo.remove();
        });

        //storageden silme
        todos = [];
        localStorage.setItem("todos", JSON.stringify(todos));
        showAlert("success", "Başarılı bir şekilde silini")
    } else {
        showAlert("warning", "Silmek için en az bir tane todo olmalıdır.");
    }


}
