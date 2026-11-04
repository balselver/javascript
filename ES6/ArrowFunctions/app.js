//Arrow Function
const yazdir = () => {
    console.log("merhaba");
}
yazdir();

const yazdir1 = (firstName) =>{
    console.log("Merhaba",firstName);
}
//const yazdir1 = firstName => console.log("Merhaba",firstName);
yazdir1("Sema");

const yazdir2 = (firstName,lastName) =>{
    console.log("Merhaba",firstName),lastName;
}
//const yazdir2 = (firstName,lastName) => console.log("Merhaba",firstName),lastName;
yazdir2("Sema","Selver");

const kupAl = (x)=>{
    return x*x*x;
}
//const kupAl = x => x*x*x
console.log("Değer", kupAl(4));

//bu şekilde de kullanılacağı yerler olacak
document.addEventListener("click",()=>{

});