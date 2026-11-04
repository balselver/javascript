// callback -> promise
// ajax -> FEtch api 

//fetch api : server a bir http isteğinde bulunmak için kullandığımız window objesi içerisinde bulunan bir metottur
//geriye her zaman bir promise döner

function getStudents(url) {
    fetch(url)
        .then((response) => response.json()) // json almak istediğimiz veriyi almak için kullanılır
        .then((data) => console.log(data))
        .catch((err) => console.log(err))
}

getStudents("students.json");

function getData(url) {
    fetch(url);
         .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err))
}

getData("https://jsonplaceholder.typicode.com/users")
// .then((response) => response.json())
// .then((data) => console.log(data))
// .catch((err) => console.log(err))
//diğer bir kullanım örneği

// bir url adresine veri göndermek istersek 
function saveStudent(){
    fetch("https://jsonplaceholder.typicode.com/users", {
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify(data)
    })
}

//"https://jsonplaceholder.typicode.com/users" bu adresepost metot tipinde
//json formatında ve karşıya yüklenecek değer JSON.stringify(data) olmak üzere veri gönderilir