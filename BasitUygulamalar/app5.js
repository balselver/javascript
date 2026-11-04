//mükemmelsayı uygulaması
/*
mükemmel sayı ne demektir

6  -  28  - 496

bir sayının tam bölen sayolarının toplamı
eğer ki orijinal sayının iki katına eşitse buna mükemmelsayı denir

6 = 1,2,3,6 = 12

28 = 1,2,4,7,14,28 = 56
 */


isPerfectNumber(28);


function isPerfectNumber(number){
    let toplam = 0;
    for(let i=2; i<=number/2; i++){
        if(number%i==0){
            toplam+=i;
        }
    }
    toplam+=1+number;

    if(toplam==number*2)
    {
        console.log("Mükemmel sayidir.");
    }
    else
    {
        console.log("Mükemmel sayi değildir");
    }
}