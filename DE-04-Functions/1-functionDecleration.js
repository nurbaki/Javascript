// ? ==========================================================
// ?                    FONKSİYONLAR
// ? ==========================================================

// !-----------------------------------------------------------
// ! 1.YÖNTEM  : FUNCTION DECLARATION
// !-----------------------------------------------------------
console.log("************ 1- FUNC DECLARATION *************");

//* Örnek1:
//****************************************************************/
//Fonksiyonun tanımlanması

function yazdir(){
    console.log("osman");
}
yazdir();

//Örnek 2 : parametreli********

function adYazdir(ad, ikinci, soyad){

    console.log(ad, ikinci,soyad);
}

adYazdir("Ferhat","Nuri", "Öztürk")


//Örnek 3 : parametreli, dönüs degerli********

function yasHesapla(ad, dogumTarihi){

    const yas= 2022-dogumTarihi;
    console.log("Benim adim", ad, "ve ben",yas, "yasindayim");
    return yas;

}
const mehmet = yasHesapla("mehmet", 1990);
const recep = yasHesapla("recep", 1980);
const nurbaki = yasHesapla("nurbaki", 1985);

console.log("3 arkadasin yaslari ortalamasi", (mehmet + recep + nurbaki)/3);


//* Örnek4: Parametreli, Dönüş değerli
//**********************************************************/
//! Function declaration yöntemi ile  fonksiyonun tanımlanması çağrılmasında önce veya sonra olabilir.
// tek sayi cift sayi kontrol fonksiyonu

// console.log(tekCiftSayi(4));
// const a= tekCiftSayi(15);
// console.log(a);

// function tekCiftSayi(x){
//    return x%2==1 ? "tektir" : "cifttir";
// }

//teksayı, çift sayı kontrol fonksiyonu

const a=tekCiftSayi(5);
console.log(a);
console.log(tekCiftSayi(4)); 


function tekCiftSayi(x){

 return x%2==1 ?`${x} sayısı tektir` : ` ${x} sayısı cifttir`
}