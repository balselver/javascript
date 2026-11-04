//spread (dilimleme) operatörü ...

let numbers = [10, 20, 30, 40];
function add(a, b, c, d) {
    console.log(a + b + c + d);
}
add(...numbers);
/*
   ... nokta diziyi virgüllerden dilimle indekslere ayır
 */
//eski yöntem
//add(numbers[0],numbers[1],numbers[2],numbers[3]);

const diller1 = ["Java", "C#"];
// const diller2=["Php","Pyhton",diller1[0],diller1[1]];
const diller2 = ["Php", "Pyhton", ...diller1];
console.log(diller2);

const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let [a, b, ...kalanSayilar] = numbers1;

console.log(a, b, kalanSayilar);

const array1 = ["E","Ali",1,2,5];
let array2 = [];

array2 = [...array1];

console.log(array2);