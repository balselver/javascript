// binary to decimal conversion
//2likten onluk tabanına çevirme

let binary = "10110011";

function convertBinarytoDecimal(binary){
    let toplam =0;
    let ust=0;
    for(i = binary.length-1; i>=0; i--){
        toplam+=Number(binary.charAt(i))*Math.pow(2,ust);
        ust++;
    }
    console.log("sonuc : " + toplam);
}
convertBinarytoDecimal(binary);
