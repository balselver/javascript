// asal sayı bulma uygulaması
/*
1 e ve kendisinden başka hiiçbir şeye bölünmeyen sayılar
bir sayının asal olup olmadığını bulmak için 
2 den başlayarak sayının yarısına kadar olan 
sayılara bölünüp bölünmediğini kontrol 
edebiliriz. 
Eğer sayı bu aralıktaki hiçbir sayıya 
bölünmüyorsa o sayı asaldır.
*/

let a = Math.floor(15/2);
// 15 sayısının yarısı 7.5 olduğu için 
// 7 ye kadar olan sayılara 
// bölünüp bölünmediğini kontrol edeceğiz.

let sayi = Number(prompt("Lütfen bir sayı giriniz:"));
let sonuc = true;
for(let i = 2; i <= math.floor(sayi/2); i++){
    if(sayi%i == 0){
        //asal değildir
        sınuc=false;
        break;
    }    
}
if(sonuc){
    alert(sayi + "Asaldır.");
}else{
    alert(sayi + "Asal değildir.");
}