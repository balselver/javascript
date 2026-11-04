/*
-------CALLBACK - PROMISE - ASYNC & AWIT--------
-----> yapılarını kullanarak asenkron yapıları senkrona 
çevirip yönetiyoruz.
*/

//Asenkron problemi

//http istekleri

const users = [
    {
        userId: 5,
        post: "sema Post 1"
    },
    {
        userId: 5,
        post: "sema Post 2"
    },
    {
        userId: 5,
        post: "sema Post 3"
    },
    {
        userId: 6,
        post: "ali Post 1"
    },
    {
        userId: 7,
        post: "betül Post 1"
    }
]

//1 userId
//2 post by userId
//burada herhangi bir çıktı alamayız çünkü userıd bilgisi alınamadan post bilgisi istenir ve bu da değer döndürmez
//bu sorunu CALLBACK - PROMISE - ASYNC & AWIT yönemleri ile çözebiliriz
function getUserID() {
    setTimeout(() => {
        //servise gittik ve cevabı aldık
        return 5;
    }, 1000);
}

function getPostByUserID(userId) {
    //gerçek bir rest apı a istek atılacak
    //cevap oradan gelecek
    setTimeout(() => {
        users.forEach((user)=>{
            if(user.userId===userId){
                console.log(user.post);
            }
        })
        return ;
    }, 500);
}

let userId = getUserID();
getPostByUserID(userId);

