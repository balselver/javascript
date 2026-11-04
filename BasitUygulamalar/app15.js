// dinamik olarak element oluşturma 

const cardBody=document.querySelectorAll(".card-body")[1];
const todoList = document.querySelector(".list-group");
const link = document.createElement("a");
link.id="goBlogWebsite";
link.className="btn btn-dark btn-sm mt-3";
link.href="http://semabal.net";
link.target="_blank";//ayrı bir sekmede gider
link.innerHTML="Blog Siteme Git";
cardBody.appendChild(link);

const todo= document.createElement("li");
const todoLink=document.createElement("a");
const i = document.createElement("i");

todo.className="list-group-item d-flex justify-content-between";
todo.innerHTML="Todo 5";

todoLink.href="#";
todoLink.className="delete-item"

i.className="fa fa-remove";
/*
 <li class="list-group-item d-flex justify-content-between">Todo 4
 <a href="#" class="delete-item"> 
    <i class="fa fa-remove"></i>
 </a>
</li>

*/

todoLink.appendChild(i);
todo.appendChild(todoLink);

todoList.appendChild(todo);




console.log(link);