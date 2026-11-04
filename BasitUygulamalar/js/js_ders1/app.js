// Var - Let - Const
/*         
         SCOPE(kapsam)

    -> Global Scope :
    En geniş scoptur. 
    hiç bir sınırı yoktur  ve her yerden ulaşılabilir
    
    -> Function Scope : 

    -> Block Scope : 
*/

//Global Scope
var degikenIsmi = 10;
// global scope her yerden erişilebilir

console.console.log(degikenIsmi);

if (true) {
    console.log(degikenIsmi);
}
function method1() {
    console.log(degikenIsmi);    
}
method1();

//Function Scope
function method2() {
    var sayi = 5;
}
method2();
// burada sayi değişkenine sadece fonksiyon içerisinden erişilebilir
//bu değişken fonksiyon dışarısından erişilemez

//Block Scope
function method3(){
    if(){
        var a= 5; //block scope
    }

    while (condition) {
        
    }
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        
        do {
            
        } while (condition);
    }
    do {
        
    } while (condition);

    //bu fonksiyon içerisinde ki koşullanmaların hepsi block scoptur
    // a değişkenine fonksiyon içerisinde sadece if koşulu erişebilir
}
 