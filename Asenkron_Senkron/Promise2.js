// ?  Promise + XMLHTTPREQUEST

function readStudents(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()

        try {
            xhr.addEventListener("readystatechange", () => {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText));
                }
            })

        } catch (error) {
            reject(error);
        }

        xhr.open("GET", url);
        xhr.send();
    })
}

readStudents("students.json")
    .then((response) => console.log(response))
    .catch((err) => console.log(err))
    .finally(() => console.log("her zaman olmasını istediğimiz kodları yazarız"));

//Promise.All 

const p1 = Promise.resolve("Birinci promise başarılı")
const p2 = Promise.resolve("İkinci promise başarılı")
const p3 = new Promise((resolve, reject) => {
    resolve("üçüncü promise başarılı")
})
const p4 = Promise.reject("Hatalı promise")

//bu metot bütün promisler başarılıysa then e girer en az bir tanesi bile reject ise catch e girer
Promise.all([p1, p2, p3, p4])
    .then((res) => {
        console.log(res)
        // for (let value of res) {
        //     console.log(value)
        // }
    })
    .catch((err) => console.log(err))
