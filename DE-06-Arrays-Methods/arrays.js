// ?=========================================================
// ?                DİZİLER (ARRAYS)
// ?=========================================================

//* Dizi Tanımlama
//* ---------------------------------------------------------

//! 1.Yöntem (Array Literal) - Tercih edilen yöntem
const yaslar = [30, 54, 22, 18, 5];
console.log(yaslar);
console.log(yaslar.length);

//! 2.Yöntem (Array Constructor)
const cars = new Array("BMW", "Mercedes", "Volvo");
console.log(cars);

const numbers = new Array(3, 2, 0);
console.log(numbers);

//10 elemanlı boş bir array tanımlama

const sayilar1=new Array(10)
console.log(sayilar1);

sayilar1[4]=123;
console.log(sayilar1);


//!hata, const keyword ü ile tanımlanmış bir diziye tamamiyle bir atama yapılamaz, içinde tek tek değişikliğe izin veriyor.
// yaslar=[1,2,3,4,5];
// console.log(yaslar);

const dogum=1980;

const isimler=[

"Ferhat", "Nurbaki","Enes", 2022-dogum, "Salih",true, 4.5, yaslar
]

console.log(isimler);

//* nested erisim

console.log( isimler[7][1]);
console.log( isimler[isimler.length-1][1]);

// ?=========================================================
// ?                DİZİYi DEGISTIREN METODLAR (mutator)
// ?=========================================================

// const meyveler = ["Elma", "Erik", "Armut", "Muz", "Kiwi"];

// const sil1 = meyveler.pop(); // son elemani siler. sildigi elemani dondurur

// console.log(meyveler);

// console.log(sil1);

// //* shift() dizinin ilk elemanini siler ve yazdirirsak onu döndürür

// const sil2= meyveler.shift();

// console.log(meyveler, sil2);

// console.log(sil2);

// //* push() dizinin sonuna eleman ekler

// const sayi= meyveler.push("Cilek", "Kavun", "Karpuz");

// console.log(meyveler, sayi); // dizinin eleman sayisini dondurur


// ?=========================================================
// ?                DİZİYİ DEĞİŞTİREN METODLAR (mutator)
// ?=========================================================
//*pop() dizinin son elemanını siler ve yazdırırsak sildiği elemanı döndürür
const meyveler = ["Elma","Erik","Armut","Muz","Kivi"]

const silinen=   meyveler.pop();

console.log(meyveler , "sildiğim eleman" , silinen);

//*shift() dizinin ilk elemanını siler ve yazdırırsak onu döndürür
const sil2= meyveler.shift();

console.log(meyveler, sil2);

//*push() dizinin sonuna eleman ekler , ve yazdırırsak dizinin güncel eleman sayısına döndürür

 const sayi= meyveler.push("Çilek","Kavun", "karpuz");

console.log(meyveler ,sayi);

//*unshift() dizinin başına eleman ekler ve dizi sayısını döndürür

meyveler.unshift("Ayva");
console.log(meyveler);

//**reverse() dizinin tamamini ters cevirir

meyveler.reverse();

console.log(meyveler);

console.log( meyveler[4].split("").reverse());

console.log(meyveler);

const yeni=meyveler[4].split("").reverse();

console.log(yeni);

//* sort() string ifadeleri alfabetik siralar, rakamlara da harf muamelesi yapar. ek bir formul ister
//*sort() , string ifadelerde alfabetik sıralar(ascıı değerlerine göre)

const number = [3,5,55,21,9,7];

console.log(number);

console.log(number.sort()); // numerik siralamiyor, ilk rakamlara gore siraliyor, kelime  gibi davraniyor

number.sort((a,b)=>a-b); // numerik siralamasi icin bu formulle birlikte yaziyoruz

meyveler.sort();
console.log(meyveler);

meyveler.reverse();

console.log(meyveler);

//* sort metodu diziyi iterasyona uğratır ve parametre olarak aldığı
//  arrow fonksiyonunu (a-b>0 önce b yi yaz gibi) dizinin her
//  bir elemanına uygular. Bu sayade küçük sayılar ile büyük sayıları 
//  yer değişirerek sıralama işlemini gerçekeştirir.



//*1.parametre dizinin index ini belirtir
// 2. parametre olan 1=indexteki elemanı siler yerine
// 3. parametreyi yerleştirir, 0= elemanı silmeden sağa kaydırıp yerine yeni elemanı koyar

meyveler.splice(1, 0,"Mango");

console.log(meyveler);

meyveler.splice(3, 1,"Üzüm");

// meyveler[3]="Üzüm"; Bu ifade de aynisini yapar

console.log(meyveler);


//? ===========================================================
//?  DİZİ ERİŞİM METOTLARI (diziyi değiştirmezler)
//? ===========================================================

const sayilar = [3, 5, 2, "2", "üc", 2, "bes", 5];

//* includes()
//*-----------------------------------------------------------
console.log(sayilar1.includes("5")); //false
console.log(sayilar1.includes(5)); //true

//* indexOf(),  lastIndexOf();
//*-----------------------------------------------------------

//* ilk eslesen indeksi dondurur.
const ikiIndeks = sayilar.indexOf(2);
console.log( sayilar.indexOf(2,3));//5
console.log("5'nin son indeksi:", sayilar.lastIndexOf(5)); //7
console.log("2'nin  ilk indeksi:", ikiIndeks); //2


//Örnekler

// const sayilar = [3, 5, 2, "2", "üc", 2, "bes", 5];

// const aStr = prompt("lütfen bir sayi giriniz");

// const aNum = +(aStr);

// let bulunduMu=false;

// if (sayilar.includes(aStr)) {
//     console.log("aradiginiz string in indexi:", sayilar.indexOf(aStr));
//     bulunduMu=true;      
// }
// if (sayilar.includes(aNum)) {
//     console.log("aradiginiz number in indexi:", sayilar.indexOf(aNum));
//     bulunduMu=true;            
// }

// if (bulunduMu==false) {
//     console.log("aradiginiz sayi bulunamadi");
// }

// if (sayilar.includes(aNum) == false && sayilar.includes(aStr)== false) {
//     console.log("aradiginiz sayi bulunamadi");
// }



//* join()
//*-----------------------------------------------------------
//? join, dizinin elamanlari birlestirip string hale cevirir.join(" ")=>virgül+boşluk sil boşluklarla ayır
//* split(" ")=>string i boşluklardan ayırır,boşlukları silip virgül+boşluk yapar ve yeni dizi döndürür.orijinal diziyi değiştirmez
 // const sayilar1 = [3, 5, 2, "2", "üc", 2, "bes", 5];

 console.log(sayilar.join(" ")); 
 console.log(sayilar);



   //*dizinin 2 indexli elemanını tersten yazdır
  //  const meyveler = ['Çilek', 'Mango', 'karpuz', 'Muz', 'Ananas', 'Erik', 'Ayva', 'Armut']

  console.log( meyveler[2].split("").reverse().join(""));





//* toString()
//*-----------------------------------------------------------
//? toString fonksiyonu sadece dizinin elemanlarinin aralarina
//? (virgul) koyarak birlestirir ve string yapar.

const stringSayilar2 = sayilar1.toString();
console.log(stringSayilar2);






//* slice()
//*-----------------------------------------------------------

const arabalar = ["bmw", "mercedes", "audi", "ferrari", "anadol"];
const sliced1 = arabalar.slice(2);
console.log(sliced1);


const sliced2 = arabalar.slice(1, 3); // start: inclusive, stop :exclusive
console.log(sliced2);
//!diziyi kopyalamak için 1. yol
const arabalarCopy = arabalar.slice();
console.log(arabalarCopy);



//* concat()
//*-----------------------------------------------------------
const yazilar = ["a", "b", "ad", "soyad", "yas"];
const rakamlar = [3, 5, 1, 4, 7];
const birlesik = yazilar.concat(
  true,
  rakamlar,
  false,
  ["a", "b", "c"],
  [["x", "y", "z"]]
);
console.log(birlesik);
