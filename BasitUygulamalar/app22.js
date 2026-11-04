//Session storage kullanımı
/*
local storage: buraya eklenen değerler tarayıcı kapansa bile silinmez

session storage: buraya eklenmiş olan değerler
tarayıcı veya bilgisayar kapanıp açıldığında silinir.
*/

//session storage değer ekleme
sessionStorage.setItem("350", "Sema");
sessionStorage.setItem("216", "Eren");
sessionStorage.setItem("552", "Zeliha");
sessionStorage.setItem(557, 37);
//her zaman değerler string kaydedilir

//değer silme 
// sessionStorage.removeItem("216");

let value = sessionStorage.getItem("10");
if (value == null) {
    console.log("Değer Bulunamadı");
} else {
    console.log("Değer bulundu : ", value);
}

let value1 = sessionStorage.getItem(557);
//her zaman değerler string kaydedilir
console.log(typeof value1);

//session storage- array yazdırma

let names = ["ALi", "Enes", "Kübra", "Ayşe", "Adem"];

sessionStorage.setItem("names", JSON.stringify(names));
//elimizdeki stringi sanki bir array gibi yazdırma işine yarar

let value2 = JSON.parse(sessionStorage.getItem("names"));
value2.forEach(function(name){
    console.log(name);
})
    
//bunların hepsini koddan silme
// sessionStorage.clear();



