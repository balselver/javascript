//Input eventları

//focus
//blur
//copy
//paste
//cut
//select

const todo = document.querySelector("#todoName");

todo.addEventListener("focus",run);
//seçilen bölgeye odaklanınca tetiklenir
todo.addEventListener("blur",run);
//odaklanılan yerden çıkılınca tetiklenir
todo.addEventListener("copy",run);
todo.addEventListener("paste",run);
todo.addEventListener("cut",run);
todo.addEventListener("select",run);

//! Bunlar genelde loglamak için kullanılır ve önemlidir

function run(e){
    console.log(e.type);
}