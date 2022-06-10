// * =======================================================
// *                     DÖNGÜLER
// * =======================================================

//************************ FOR ****************************


// for (let i=1; i<=10; i++){
//     console.log(i, "merhaba");
// }

//** 1 den N e kadar olan tam sayilarin toplamini bulan kodu yaziniz

// const n = +prompt("N icin kullanilacak bir sayi giriniz");
// let sayi= 0;

// for (let i=1; i<=n; i++){
//     sayi=sayi+i;
//     // console.log(sayi);
// }
// console.log(sayi);




// örnek: disaridan girilen sayinin asal olup olmadigini tespit ederek sonucu yazdiran programi yaziniz.

// const asal = +prompt("ASAL kontrolü icin bir sayi giriniz");
// for (let i=2; i<asal; i++){
//     if(asal % i == 0){
//         console.log("bu asal degildir");
//         break;
//     }
//     else if((i+1) ==asal){

//         console.log("bu bir asal sayidir");
//     }
// //}

//? ÖRNEK: Dışarıdan girilen sayının Asal olup olmadığını tespit ederek sonucu yazdıran programı yazınız.

// const sayi=   +prompt("ASAL kontrolü için bir sayı giriniz");
// let asal =true;

// for(let i=2; i < sayi; i++) {

// if(sayi % i==0 ) {asal=false; break}

// }
// console.log(asal==true?"asal sayıdır " :"asal sayı değildir");


//******WHILE DONGUSU*********** */

//Ornek1: WHİLE İÇİN 0-100 arasında bir not giriniz, aksi durumlarda error msjı verip, tekrar not isteyiniz

// let nots= +prompt("While döngüsü icin 0-100 arasi bir sayi giriniz")
// while (nots<0 || nots>100) {
//     console.error("not 0-100 arasinda olmalidir");
//     nots= +prompt("While döngüsü icin 0-100 arasi bir sayi giriniz");
       
// }
// console.log("Girdiginiz sayi 0-100 arasindadir");

// ****** ayni soru do-while ile cozumu*******

// let nots;
// do {
//     nots= +prompt("0-100 arasi bir sayi giriniz");
//     alert(nots);
    
// } while (nots<0 || nots>100);

// console.log("Girdiginiz sayi", nots,"dir");

//? ORNEK1: klavyeden Q karakteri girilene kadar not girişi yapan bir programı döngü kullanarak yazınız.


 let grade;
 do {

grade= prompt("Lütfen 1-100 arasi bir sayi giriniz");
     console.log("Girdiginiz sayi", grade,"dir");
    
 } while (grade!= "q");

 console.log("Girdiginiz sayi", grade,"dir");

// let grade;

// do {
//  grade= prompt("Lütfen 2. örnek için 1-100 arası sayı girin ")
//  console.log(grade);
// } while (grade!="q");

// console.log("ggg", grade, "dir");