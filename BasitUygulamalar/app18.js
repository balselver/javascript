// Events (olaylar)

//addEventListener():
const clearButton  =document.querySelector("#todoClearButton");

clearButton.addEventListener("click",changeTitle);

function changeTitle(){
    document.querySelectorAll(".card-title")[1].textContent="Todo Başlığı değişti..";
    console.log("Başlık değişti");
}

