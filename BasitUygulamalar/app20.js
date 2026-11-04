//Klavye eventları


//keypress : harf ve sayılarda tetiklenir

//keydown : bütün her şey de çalışabilen bir eventter

//keyup : tuştan elini kaldırdığında çalışır

// document.addEventListener("keydown",run);

// function run(e){
//     console.log(e.keyCode);
//     if(e.keyCode ==116)
//     {
//         alert("Sayfa yenileme engellendi");
//     }
    // e.preventDefault();

    //basılan tuşun ne olduğunu kaydeder.

    //console.log(e.keyCode);
    //klavyedeki harflerin ascıı tablosundaki karşılığını verir

    //console.log(e.which);
    //ascıı kodu verir
// }

const cardTitle = document.querySelectorAll(".card-title")[0];
const input = document.querySelector("#todoName");

input.addEventListener("keydown",run);

function run(e){
    cardTitle.textContent=e.target.value;
    console.log(e.target.value);
}