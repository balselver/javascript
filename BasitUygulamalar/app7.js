let dizi1 = new Array();
let dizi2 = [];

dizi1[0]="Ali";
dizi1[1]="veli";
console.log(dizi1);

dizi2[0]="Ayşe";
dizi2[1]="Fatma";
console.log(dizi2);

console.log(typeof dizi1);

//Foreach Döngüsü
//dizilerde kullanılır
//elemanları tek tek dönüp almak istediğimizz de kullanılır

let isimler = ["Eren","Yakup","Hilal","Sema","Kübra","AyşeNur","Adem"];

isimler.forEach(function(isim){
    console.log(isim);
});
