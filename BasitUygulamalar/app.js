// kelime sayısı bulma uygulaması

let metin = "Şu anda kayseri de javascript öğreniyorum. ";
let harf= prompt("Harfi giriniz : ");

let sonuc=bul(harf);
alert("harf sayisi : " + sonuc);

function bul(harf){
    let toplam=0;
    for(let i=0; i<metin.length; i++){
        if(metin.charAt(i).toLowerCase()===harf.toLowerCase()){
            toplam+=1;            
        }
    }
    return toplam;
}
