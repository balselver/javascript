//Destructing Kullanımı

let langs = ["C#", "C++", "JavaScript", "Python"];
let lang1, lang2, lang3, lang4;

// lang1 = langs[0];
// lang2 = langs[1];
// lang3 = langs[2];
// lang4 = langs[3];

//yukarıdaki işlemin kısayolu

[lang1, leng2, leng3, leng4] = langs;
console.log(lang1, lang2, lang3, lang4);

const person = {
    firstName: "Sema",
    lastName: "Bal",
    salary: 50000,
    age: 23
}

let { firstName: isim, lastName: soyisim, salary: maas, age: yas } = person;

// isim = person.firstName;
// soyisim = person.lastName;
// maas = person.salary;
// yas = person.age;

console.log(isim, soyisim, maas, yas);
