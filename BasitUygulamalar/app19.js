// Mouse eventları 

//DOMContentLoaded : sayfa yüklendiğinde çalışacak bir eventter
// document.addEventListener("DOMContentLoaded",run);
// window.addEventListener("load",run);

// function run(){
//     console.log("sayfa yüklendi");
// }

const cardTitle = document.querySelectorAll(".card-title")[1];
const cardBody = document.querySelectorAll(".card-body")[1];

cardBody.addEventListener("mouseover",run);
// cardBody.addEventListener("mouseout",run);

cardBody.addEventListener("mouseenter",run);
cardBody.addEventListener("mouseleave",run);

function run(e){
    console.log(e.type);

}

