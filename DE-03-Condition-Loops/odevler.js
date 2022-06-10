// Loop´´ larla ilgili ödevler

var not1 = Number(prompt("Aldiginiz puani giriniz" ));

if(not1 < 0 || not1> 100){
    alert("yanlış sayı girdiniz")
    not1 = Number(prompt("Lutfen 0 ile 100 arasinda bir rakam giriniz"));
}
if(0<= not1 && not1<=25 ){
    console.log("Notunuz= FF");
}
else if(26<= not1 && not1<=45 ){
    console.log("Notunuz= DD");
}
else if(46<= not1 && not1<=65 ){
    console.log("Notunuz= CC");
}
else if(66<= not1 && not1<=75 ){
    console.log("Notunuz= BB");
}
else if(76<= not1 && not1<=90 ){
    console.log("Notunuz= BA");
}
else if(91<= not1 &&  not1<=100 ){
    console.log("Notunuz= AA");
}


// bulundugunuz ayin ismini girince kacinci ay oldugunu soyleyen program

var month = prompt("Hangi ay'da oldugunuzu yaziniz" );

switch (month) {
    case "ocak":
        console.log("1. Aydasiniz");
        break;
    case "subat":
        console.log("2. Aydasiniz");
        break;
    case "mart":
        console.log("3. Aydasiniz");
        break;
    case "nisan":
        console.log("2. Aydasiniz");
        break;
        case "mayis":
            console.log("5. Aydasiniz");
            break;
        case "haziran":
            console.log("6. Aydasiniz");
            break;
        case "temmuz":
            console.log("7. Aydasiniz");
            break;
        case "agustos":
            console.log("8. Aydasiniz");
            break;
            case "eylül":
                console.log("9. Aydasiniz");
                break;
                case "ekim":
                    console.log("10. Aydasiniz");
                    break;
                case "kasim":
                    console.log("11. Aydasiniz");
                    break;
                case "aralik":
                    console.log("12. Aydasiniz");
                    break;


    default:
        console.log("Harf veya yazim hatasi yaptiniz. Tekrar deneyin.");
        break;
}

//  tam sayilarla cestli islemler yaptiran program

const tam1 = Number(prompt("3 tam sayi gireceksiniz. 1. Tam sayiyi giriniz" ));
const tam2 = Number(prompt( "2. Tam sayiyi giriniz"));
const tam3 = Number(prompt("3. Tam sayiyi giriniz"));
var toplam= tam1+tam2+tam3;
var carpim= tam1*tam2*tam3;
var buyuk = tam3;
var kucuk= tam3;

if(tam1>tam2 && tam1>tam3){
    buyuk=tam1;
}
else if( tam2>tam1 && tam2>tam3){
    buyuk=tam2;
}
if(tam1<tam2 && tam1<tam3){
    kucuk=tam1;
}
else if( tam2<tam1 && tam2<tam3){
    kucuk=tam2;
}

console.log("3 Tam sayinin:");
console.log("Toplami= ", toplam);
console.log("Carpimi= ", carpim);
console.log("En kücügü= ", kucuk);
console.log("En büyügü= ", buyuk);


//girilen sayinin tek veya cift oldugunu bildiren program

const sayi1 = Number(prompt("Bir tam sayi giriniz"));
var sonuc = sayi1 % 2 == 0 ? "cift" : "tek";
console.log("Girdiginiz sayi" ,sayi1 ,sonuc ,"dir.");