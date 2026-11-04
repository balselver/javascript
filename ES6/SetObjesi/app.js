//Set objesi 
//setlerin içerisindeki değerler yalnızca bir kez tutulut, maplerden farkı bu duur geri kalan her şeyi aynıdır

const set= new Set();

//değer vermek - add()
set.add("Sema");
set.add("Sema");
set.add("Sema");
set.add("Sema");
set.add(3.14);
set.add(7);
set.add(true);
set.add("Eren");
set.add({username:"Sema", password: "1234"});
set.add([25,15,8,9]);

//Size
//sema dan 4 kere eklemiş olmamıza rağmen set objesinin size hala yedidir
//semayı 4 kere eklemez aynı değeri birkez eklemeye izin verir
//yani bir değeri sadece bir kez kullanmak istiyorsak set kullanırız.
console.log(set.size);

//DELETE
set.delete("Sema");
let value = {username:"Sema", password: "1234"};
set.delete(value);
console.log(set.size);

//HAS
console.log(set.has(25));

//for of döngüsü ile değerler üzerinde dönme.
for(let value2 of set){
    console.log(value2);
}

//setten array oluşturma
const values=Array.from(set);
console.log(values);

for(let index in values){
    console.log(index);
}

//arrayden set oluşturma
let array = [1,"Sema",true,"mustafa",15,3.6];

const newSet = new Set(array);
console.log(newSet);