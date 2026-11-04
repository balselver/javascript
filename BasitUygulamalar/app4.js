//Faktöriyel hesaplama
/*
5 = 5x4x3x2x1 = 120
4 = 4x3x2x1 = 24
3 = 3x2x1 = 6
2 = 2x1
1 = 1
 */

let sayi = number(prompt("Bir sayi giriniz : "));
let carpim = 1;
for(let i = 1; i <=sayi; i++){
    carpim = carpim * i;
}
alert("Sonuc: "+carpim);