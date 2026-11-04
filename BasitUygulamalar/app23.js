//tarayıcı kapandığında değerler gitmesin istiyorsak. 
// local storage aynı şekilde kllanabiliriz.

//değer ekleme
localStorage.setItem("490","Sema Selver Bal");
localStorage.setItem("888","Ali Göktuğ Bal");
localStorage.setItem("102","Ahsen Ebrar Bal");
localStorage.setItem("111","Eren Uzunoğlu");

//değeralmak
let value = localStorage.getItem("888");
let value1 = localStorage.getItem("111");
let value2 = localStorage.getItem("102");

console.log(value);
console.log(value1);
console.log(value2);

// localStorage.removeItem("490");
// localStorage.clear();

let names = ["Sema Selver Bal","Ali Göktuğ Bal","Ahsen Ebrar Bal","Eren Uzunoğlu"];
localStorage.setItem("names",JSON.stringify(names));

let value3 = JSON.parse(localStorage.getItem("names"));

value3.forEach(function(name){
    console.log(name);
})