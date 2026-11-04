//For in / for of döngüleri

let names = ["Eren","Yusuf","Ali","Sema","Ahsen","Ceyda"];
names.forEach (name => console.log(name));

//for in döngüsü : Belirtilen dizideki içindeki elemanların indexini dönderir
//for in index üzerinden dizideki elemanların değerine de ulaşabiliriz.
//in = index gibi düşün

//değişken tanımlama, in , diziismi
for(let name in names){
    console.log(name, names[name]);
}

//for of döngüsü:Belirtilen dizinin içindeki elemanların değerini dönderir
for(let isim of names){
    console.log(isim, names.indexOf(isim));
}

