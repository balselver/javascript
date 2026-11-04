//ASYNC AWAIT
//Peromis then zincirinden kurtaran yapı

//başına async koyulan metot geriye promise dönderir
// async function hello(){
//     return "hello world";
// }

// console.log(hello());
// hello()
// .then((res)=> console.log(res));

// document.querySelector("#button").addEventListener("click",()=>{
//     fetch("https://jsonplaceholder.typicode.com/posts/1")
//     .then((res)=> res.json())
//     .then((post)=>{
//         fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)
//         .then((response)=>response.json)
//         .then((comments)=> console.log(comments))
//     })
// })

//AYSNC AWAIT ile yapılışı
document.querySelector("button").addEventListener("click", async ()=>{
    const post = await (await fetch("https://jsonplaceholder.typicode.com/posts/1")).json()    
    const comments = await (await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)).json();
    
    console.log(post,comments)
})