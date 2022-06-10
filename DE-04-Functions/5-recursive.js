3// ? ====================================================
// ?              FONKSİYONLAR - RECURSIVE
// ? ====================================================

//* Kendi kendi çağıran fonksiyona recursive fonksiyon denilir.

//* Özellikle karmaşık hesaplamaların kodlamasını kolaylaştırmak için kullanılır.
//* Ancak, dikkatli kullanmak gerekir. Yoksa stack oveflow hatası alınabilir.

//* ORNEK: Girilen n. terime kadar Fibonacci sayılarının toplamını hesaplayarak yazdıran fonksiyonu recursive olarak kodlayınız.
console.log("************ 5- RECURSION *************");

//? FIBONACCI terimleri:  0, 1, 1, 2, 3, 5, 8, 13, 21, ...

const fibo=(n)=>{
    if (n<2) {
        return n;      
    }
    else{
    return fibo(n-1)+fibo(n-2);   
    }
}
fibo(5);

console.log(fibo(20));

// ardisik toplamlar fonksiyonu

const ardisik=(a)=>{
    if (a<1) {
        return a;      
    }
    else{
    return ardisik(a-1)+a;   
    }
}

console.log(ardisik(5));





//***************Ödevler Soru-1************************ */

const ucgen=function(taban,h) {
    return (taban*h)/2;    
}
let taban=+prompt("Ücgenin tabanini giriniz");
let h=+prompt("Ücgenin yuksekligini giriniz");
console.log("Ücgenin alani",ucgen(taban,h),"dir.");

//***************Ödevler Soru-2************************ */

const kareAl=(a1) => a1**2;
const küpAl=(a2)=> a2**3;
const üsAl=(a3,a4)=> a3**a4;

let sayi2=+prompt("Bir sayi giriniz");
let üsSayi=+prompt("Sayinin üssünü giriniz");
console.log("Sayinin karesi=",kareAl(sayi2), "Sayinin küpü=", küpAl(sayi2), "Sayinin", üsSayi, "üssü=", üsAl(sayi2,üsSayi),"dir.");

//***************Ödevler Soru-3************************ */

let artikyil= function(x){;
    let sonuc;
    if ((x%100 ==0 && x%400 ==0) || (x%100 !=0 && x%4 ==0)) {
        sonuc= "Artik yil";        
    }
    else{sonuc= "Artik yil degil"; }
    return sonuc;
}
let yil=+prompt("Yil'i giriniz");
console.log("Girdiginiz yil,", artikyil(yil),"dir."); 




//****************************** */
function fib(n) {
    let a = 0;
    let b = 1;
    for (let i = 2; i <= n; i++) {
  
      let c = a + b;
  console.log("a",a);
  
  console.log("b",b);
  
  console.log("c",c);
  
      a = b;
  
      b = c;
  console.log("sonuc",c);
    }
    return b;
  }
  console.log("sonuc",fib(7));