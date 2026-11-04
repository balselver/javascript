/*
Senkron programlama : biriş bittikten sonra
bir sonraki işe geç demek
- ürün listeleme 12sn
- personel arama 4sn 
 toplamda ikisinin bitmedi 16 sn sürdü

 !JavaScript senkron çalışan bir programlama dilidir

 Asenkron programlama : işler birbirini beklemeden
 eş zamanlı çalışır
 -ürün listeleme 4sn + personel arama 12 sn
 birlikte çalıştı

 toplamda 12 sn de tüm iş bitmiş oldu
*/

//Asenkron Programlama
/*
!JavaScript bazı yerlerde Asenkron çalışır
- Timing işlemleri
- Event(olaylar)
- HTTP isteklerinde 
- WEB API tarafından yönetilen her şey asenkron çalışır
*/

//senkrondan asenkrona çevirme
console.log("sema");

setTimeout(()=>{
    console.log("Süre doldu ve çalıştı");
},1000);

setTimeout(() => {
    console.log("500 ms bekledi ve çalıştı");
}, 500);

setTimeout(() => {
    console.log("750 ms bekledi ve çalıştı")
}, 750);
console.log("Selver");