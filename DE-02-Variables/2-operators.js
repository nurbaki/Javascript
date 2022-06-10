// * =======================================================
// *                 ARİTMETİK OPERATÖRLER
// * =======================================================

const sucuk = 100;
const sakiz = 5;
const kola = 10;

let toplamFiyat = sucuk + sakiz + kola;
console.log(toplamFiyat);


// Bir arttır
toplamFiyat++
console.log(toplamFiyat);

// 10 arttır
toplamFiyat+=10;
console.log(toplamFiyat);//126

//? + operatörü String Concatination işlemi de yapar.
const ad = "ahmet";
const soyAd = "Can";
console.log(ad + soyAd);

//* String Concatination bir number ve bir string toplanirsa concatination yapar
const s1 = 5,
  s2 = "3";

  console.log(s1 + s2);

// cikarma yapilirsa bunu algilar ve aritmetik cikarma yapar

console.log(s1 - s2);

const s3="iki";

sonuc=s1-s3;
console.log(sonuc); //not a number NaN

const dogumtarihi=1985;
const isim= "nurbaki";

console.log(isim + " " + (2022-dogumtarihi) + " " +"yasindadir" );

//Template literals

console.log(`${isim} ${2022-dogumtarihi} yasindadir`);

//artirma - azaltma

let a=5;

console.log(a++);
console.log(a);
console.log(++a);
console.log(a);

console.log("**************");

let b=5;
console.log(b--);
console.log(b);
console.log(--b);
console.log(b);

console.log("**************");

let d=--b;
 console.log(d);
 console.log(b);
 
 d=b--;
  console.log(d);
  console.log(b);

  d+=5;
  console.log(d);