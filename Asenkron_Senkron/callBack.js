//CallBack nedir ? 

//Callbacksiz yöntem
//normalde senkron çalışma bir olumsuzluk oluşturmaz
//timing işlemleri - event - http istekleri senkron çalışma durumunu olumsuz etkiler

// function getName(){
//     setTimeout(() => {
        //servisten simimi getirdi
//         console.log("Sema");
//     }, 1000);

// }

// function getSurname(){
//     setTimeout(() => {
//         console.log("Bal");        
//     }, 500);
// }
// getName();
// getSurname();

//CallBackli yöntem ile yönetme
//Callback  : bir fonksiyona parametre geçerek asenkron yapıyı senkrona çeviririz.

function getName1(callback){
    setTimeout(() => {
        //servisten simimi getirdi
        let name = "Sema";
        callback(name);
    }, 1000);

}

function getSurname1(name, callback){
    setTimeout(() => {
        let surname = "Bal";
        callback(surname);
    }, 500);
}

//getName1(getSurname);
// bir fonksiyona parametre geçmeye callback denir.
getName1((name)=>{
    getSurname1(name,(surname)=>{
        console.log(name,surname);
    })
})


//Callback Hell : callback tercih edilmeme sebebi okunabilirliği çok zordur. karmaşık kodlarda okunması çok zordur.

function getUserId(){
    setTimeout(() => {
        //servise gittik ve cevabı aldık
        //return 5 
        let userId =7;        
    }, 1000);
}

function getPostByUserId(){
    console.log(userId);
    //gerçek 
}









/*
git fetch origin --prune
git push -u origin main

github sorun oluşursa */