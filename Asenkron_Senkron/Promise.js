//CAllback yerine şu anda Promisler kullanılır.

//PROMISE 
// promise oluşturuluyorda : pending, reject ve resolve  durumları vardır
/*
pending :
reject : başarısız
resolve : başarılı

*/
// let check = true;

// const promise1 = new Promise((resolve, reject) =>{
//     if(check){
//         resolve("Başarılı");
//     }else{
//         reject("Başarısız");
//     }
// })

// console.log(promise1);

// function createPromise(){


//     return newPromise;
// }
let check = true;

//asenkron yapıları senkrona çevirmek için kullanırız 
function createPromise() {
    return new Promise((resolve, reject)=>{
        if(check){
            resolve("Promise de herhangi bir sıkıntı yok");
        }else{
            reject("Sıkıntı büyük");
        }
    });

}

createPromise()
.then((response)=>{
    console.log(response);
})

.catch((error)=>{
    console.log(error);
})

//her iki dururmdada çalışan bir durumdur
.finally(()=> console.log("Her zaman çalışır"))
