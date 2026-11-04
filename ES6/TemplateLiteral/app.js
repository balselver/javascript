//Template Literals

function write(firstName, lastName) {
    console.log("İsim: " + firstName + " " + "Soyisim: " + lastName);
    //template literal olmadan önce bu şekild artılar ile yazılırdı.

    //template literal ile birlikte kullanmak
    //altgr+ iki kez noktalı virgül
    console.log(`isim: ${firstName} Soyisim: ${lastName}`);


}
write("Sema", "Selver");



