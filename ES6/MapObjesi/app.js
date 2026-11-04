//Map -----> key(anahtar) value(değer)
//Mspler bir dizi türüdür.

const map1 = new Map();

//SET : değerkoymak için
map1.set(34, "İStanbul");
map1.set(35, "İzmir");
map1.set(38, "Kayseri");
map1.set(6, "Ankara");
map1.set(1, "Adana");

//get : key e göre değer dönderir
console.log(map1.get(6));
console.log(map1.get(1));
console.log(map1.get(38));
console.log(map1.get(35));

//SİZE : Mapin içerisinde ne kadar değer var onu verir
value = map1.size;
console.log(value);

//Delete 
value1 = map1.delete(34);
console.log(value1);

//HAS : Bir mapin içerisinde belirli bir değer var mı diye sorgulamaya ayarar
console.log(map1.has(55));
//55 samsun mapin içerisinde olmadığı için false değer döner

//Map üzerinde dönmek için For Of metotu kullanılır
for(let [key,value] of map1){//destructing
    console.log(key,value);
}

//mapin içerisindeki sadece keyleri yazdır
for(let key of map1.keys()){
    console.log(key);
}

//mapin içerisinde sadece değerleri yazdır
for(let value of map1.values()){
    console.log(value);
}

//forEach ile dönmek
const keys = Array.from(map1.keys());
console.log(keys);

keys.forEach((key)=>{
    console.log(key, map1.get(key));
})

// let array = []

//MAP ten Array e çevirme işlemi 
const array = Array.from(map1);
array.forEach((value)=>{
    console.log(value);
})

//array i map e çevirme
const array2 =[
    [34, "İStanbul"],
    [35, "İzmir"],
    [38, "Kayseri"],
    [6, "Ankara"]
];
const myMap = new Map(array2);
console.log(myMap);
const myArray = Array.from(myMap);
console.log(myArray);
