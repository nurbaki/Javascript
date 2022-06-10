// ?=========================================================
// ?                 STRING METOTLARI
// ?=========================================================
console.log("****STRİNG METHODS******");

//!klasik yöntem ile tanımlanan bir String primitive dir (ilkel)

const str1="clarusway";
const str2="hello ";
const str3="world";
 console.log(str2 + str3, typeof (str2 + str3));

 //!String constructor ile tanımlanan String non-primitive dir 

 const str4=new String("yeni bir string") ;
 console.log(str4, typeof str4);//object


//! Normalde primitive veri tiplerinin property veya metodu olmaz.
//! Ancak Javascript  otomatik olarak primitive String'leri String
//! nesnelerine dönüştürür. Bu sayede, String nesnelerine ait olan
//! fonksiyonlar veya özellikleri primitive string ile kullanmak
//! mümkün olur.Ayrıca 2 tür arasında çevrim yapmakta mümkündür.

// *=========================================================
// *               concat() immutable=değiştirmez
// *=========================================================

const s1=" hello ";
const s2="world";
const s3=s1.concat(s2);
console.log(s3.concat(" Clarusway", s1));
console.log(s1);//hello

// *=========================================================
// *               charAt()
// *=========================================================



//? Stringler için Escape karakterleri
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#escape_sequences

const s4= "primitive veri  \n tiplerinin property veya metodu olmaz.";
console.log(s4);
console.log(s4.charAt(5));
console.log(s4.charAt()); // ici bossa ilk harf dondurulur
console.log(s4.charAt(s4.length-1)); // son harfi dondurur


// *=========================================================
// *               includes()
// *=========================================================

const kelime="to be or not to be, that is the question.";

console.log(kelime.includes("TO be")); // kelime bu harfleri vs. iceriyormu. True veya false doner
console.log(kelime.includes("to be"));
console.log(kelime.includes("question"));
console.log(kelime.includes(" "));
console.log(kelime.includes("to",15)); // 15 inci indeksten sonra to var mi? yok


// *=========================================================
// *               indexOf() , lastIndexOf()
// *=========================================================

console.log( kelime.indexOf("or")); //6
console.log( kelime.indexOf("this")); //-1 bu kelime yoksa -1 doner
console.log( kelime.indexOf("TO be")); // bu kelime yoksa -1 doner
console.log( kelime.indexOf("be",4)); // 16. 4. indeksten itibaren bu kelimenin indeksi nedir?
console.log(kelime.lastIndexOf("be")); //16

// *=========================================================
// *               startsWith() , endsWith()
// *=========================================================

const kelime2= "Salina salina sinsice!";
console.log(kelime2.startsWith("sa")); // false
console.log(kelime2.startsWith("Sa"));// true
console.log(kelime2.startsWith("sa",7));// true

console.log(kelime2.endsWith("e!"));// true


// *=========================================================
// *              replace(search for, replaceWith) immutable
// *=========================================================

const oku="Oku baban gibi, saf olma!";
console.log(oku);

let oku2= oku.replace("saf olma", "akilli ol");
console.log(oku2);
console.log(oku);

// detayli degistirme icin regex kullanilabilir.
console.log(oku.replace(/SAF/i, "fakir")); // i= insensitive yani kucuk buyuk harfe duyarsiz


//* ----------------------------------------------------------
//*  slice(beginIndex(dahil), endIndex(dahil değil))
//*  substring(beginIndex, endIndex)
//*  substr (depreceted)
//* (First character is 0).----------------------------------------------------------
const veysel = "Uzun ince bir yoldayım yürüyorum gündüz gece..";

console.log(veysel.slice(5)); // 5. indexten sonrasini yazdirir
console.log(veysel.slice(5,9));// ince

console.log(veysel.substring(17,30));

console.log(veysel.slice(-5)); // sondan 5. indexten sonrasini yazdirir. Sondan sayarken 1 den baslar.

console.log(veysel.slice(-10,-9));//d


//* ----------------------------------------------------------
//* split(sep , limit ) =>ikisi de optional
//* split(" ")=>boşluklardan ayırır,boşlukları silip virgül+boşluk yapar
// ve yeni dizi döndürür.orjinal diziyi değiştirmez----------

const tarkan="gel gündüzle gece olalim..";

console.log(tarkan.split(" ")); //bosluklari siler ve kalan kisimlardan eleman olusturur
console.log(tarkan.split(""));// butun harfleri ayirarak bir dizi elde eder
console.log(tarkan.split("e"));

console.log(tarkan.split(" ",3)); //bosluklari siler ve kalan kisimlardan 3 elemani gonderir

console.log(tarkan.split());// tek elemanli diziye cevirir


//**---------------- */
//***trim() */
//***/

const ramazan="         Hosgeldin Ya Sehr-i Ramazan !    ";
console.log(ramazan);

console.log(ramazan.trim());



