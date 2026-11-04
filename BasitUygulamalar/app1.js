//Armstrong sayi
// bir sayının rakamlarının küplerinin toplamı
// sayının kendisini veriyorsa bu sayi armmstrong sayidir

/*
153
1*1*1 + 5*5*5 + 3*3*3 = 125+1+27
 */

let sayi = prompt("Sayi giriniz :");
let toplam = 0;
for(let i = 0; i<sayi.length; i++)
{
    let rakam=sayi.charAt(i);
    toplam += rakam*rakam*rakam; 
}

//sayi değerininumber olarak cast etmek zorunda değilsin
if(Number(sayi) == toplam){
    alert("Armstrong sayısıdır.");
}else {
    alert("Armstrong sayısı değildir.");
}