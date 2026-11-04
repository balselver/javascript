let sayilar = [0,1,2,3,4,5,"Sema",7,8,9,"ALi"];
console.log(sayilar[6]); 
console.log(sayilar[3]);

sayilar[10]="Ayşe";
console.log(sayilar[sayilar.length-1]);

console.log(sayilar[15]); 
//tanımsız döner

let isimler = ["Enes","Kübra","Hilal","Yusuf"];
console.log(isimler[3]);
console.log(isimler[2]);

isimler[2] = "Yakup";
console.log(isimler[2]);
console.log(isimler);

let karisikDizi = [1,"Enes",5.7,true,null,undefined];
console.log(karisikDizi[0]);
console.log(karisikDizi[1]);
console.log(karisikDizi[2]);
console.log(karisikDizi[3]);
console.log(karisikDizi[4]);
console.log(karisikDizi[5]);

//Dizi Metotları 
/*
push     : dizinin sonuna eleman ekler, ayrıca dizinin uzunluğunu döner
unshift  : dizinin başına eleman ekler, eleman sayısını geriye döner

pop      : dizinin sonundan eleman siler, eleman sayısını döner
shift    : dizinin başından eleman siler. eleman sayısını döner

splice(index,incdex) : eleman eklemek ve silmek için kullanılır

toString : diziyi stringe çevirebiliriz
join     : diziyi stringe çevirir, farkı ise araya eleman ekler.

concat   : dizileri birleştirmek için kullanılır
slice(dilimlemek) : diziyi istenilen yerden bölüp yeni bir dizi oluşturur
lenght : dizinin uzunluğunu veriri
reverse : dizinin elemanlarını ters çevirir
split(bölmek) : belirli bir ifadeye göre bölüp diziyeçevirmek için kllanılır
indexOf : elemanın index numarasını veriri
includes : verilen elemanı içeriyor mu ona bakar.
*/

let arabalar = ["BMW","Toyota","Renault","Mercedes","Porche"];

console.log(arabalar);

arabalar.push("Audi");
console.log(arabalar);

arabalar.unshift("Opel");
console.log(arabalar);

arabalar.pop();
console.log(arabalar);

arabalar.shift();
console.log(arabalar);

arabalar.splice(2,0,"hyundai");
console.log(arabalar);

//silmek için
arabalar.splice(1,2);
console.log(arabalar);

//sil ve ekle
arabalar.splice(2,2,"hyundai");
console.log(arabalar);

//ToString metot
console.log(typeof arabalar);
let stringArabalar=arabalar.toString();
//arrayin string haline çevrilmiş olarak dönderirim
console.log(typeof stringArabalar);

//join metot
//araya birşey koymak istediğimizde kullanılır
let stringArabalar1=arabalar.join("-");
console.log(stringArabalar1);

let arabalar1 = ["BMW","Toyota","Renault","Mercedes","Porche"];
let arabalar2=["hyundai","tofaş"];

//concat metotu : birleştime
let birlesmisDizi = arabalar1.concat(arabalar2);
console.log(birlesmisDizi);

//Slice metot
// let ayriDizi=birlesmisDizi.slice(2,4);
// console.log(ayriDizi);

//length reverse
console.log(birlesmisDizi.length);

//reverse
console.log(birlesmisDizi);
birlesmisDizi.reverse();
console.log(birlesmisDizi);

//split
let isimler0 = "sema,ahsen,ali";
let isimDizi=isimler0.split(",");
console.log(isimDizi);

//ındexof
let index = birlesmisDizi.indexOf("Mercedes");
console.log(index);

//includes
let sonuc = birlesmisDizi.includes("Renault");
console.log(sonuc);

