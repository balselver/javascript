// var - Let - Const
// var/let/const degiskenIsmi = degiskenDegeri;

function selamVer(){
    var selam = "herkese selam";
    //function scope
    console.log(selam);
}
//var : function scope 
// (çoğu yerden erişilebildiği için RAM bellekte çok fazla yer kaplar ve uygulamayı yavaşlatır)

//let/const : Block Scope özelliğine sahiptir

function selamVer2(){
    var selam = "herkese selam";
    if (true) {
        let a = 5;
        console.log(a);

        const b = 6;
        console.log(b);
    }
    //function scope
    console.log(selam);

    //buradan a ya erişim sağlanamaz
    //buradan b ye erişim sağlanamaz
}

var k = 5;
var k = 10;
console.log(k); 
// burada k değeri 10 olarak yazılır

let t = 10;
//tekrardan bir t değişkeni tanımlamamıza izin vermez

const l = 30;
//tekrar bir l değişkeni oluşturmaya izin verilmez

// Let ve Const arasındaki fark
//const : sabit değişmez 
//let : değişken değişebilir

const a= 10; 
// bu a değeri değişemez

let b = 5 ;
b = 7;
//burada b değeri 5 ten 7  ye değiştirilebilir.

const user = {
    username: "Sema",
    password: "1234"
};

console.log(user);
//user içeriği değişemez yeni değer atanamaz veya uzer objesinin içerisine yeni birveri eklenemez
let user1 = {
    username: "Sema",
    password: "1234"
};
user1 = {age:25};
user1.username = "Ahmet";
console.log(user1);
//user1 içeriği değiştirilebilir ve yeni değer atanabilir