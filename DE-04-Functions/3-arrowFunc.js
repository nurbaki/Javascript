// ? ==========================================================
// ?                    FONKSİYONLAR
// ? ==========================================================

// !-----------------------------------------------------------
// !3.YÖNTEM  : ARROW FUNCTIONS
// !-----------------------------------------------------------

console.log("****** 3- ARROW FUNCTIONS ******");
//* Örnek1:
//*************************************************************/

const topla=(a,b)=> a+b;

console.log(topla(70,5));

//**Örnek2: Üs alma */

const usAl=(t,u)=>t**u;

console.log(usAl(7,2));

//***Örnek:3 cift mi tek mi kontrol fonksiyonu */

const ciftmi=(sayi) => (sayi%2==0 ? "cift" : "tek");

console.log(ciftmi(70));
console.log(ciftmi(21));

  //* Örnek4:Menu fonksiyon
  // ! ok(arrow) fonksiyonunda birden fazla ifade varsa, fonksiyonda süslü parantez kullanmalıyız
//****************************

const menu=()=>{
    console.log("===========================");
    console.log("     JAVASCRİPT DERSİ      ");
    console.log("===========================");
    }
    
    menu();

    //**Örnek5: Bilgi ver fonksiyonu */
    //****************************************** */

    const bilgiVer=(ad,soyad,dogum)=>`Adim: ${ad} , Soyadim ${soyad} ve yasim: ${2022-dogum}`;
    
    // {
    //     const bilgi= `Adim: ${ad} , Soyadim ${soyad} ve yasim: ${2022-dogum}`
    //     return bilgi;
    // }

    console.log(bilgiVer("osman","kara",1979));

        //**Örnek6: silindirin hacmini hesaplayan fonksiyon */
    //****************************************** */

    const r=+prompt("yaricap giriniz");
    const h=+prompt("yukseklik giriniz");


    const hacimHesap=(r,h)=>Math.PI*r*r*h;

    console.log( hacimHesap(r,h) );


    console.log( Math.round(hacimHesap(r,h)) );

    //* toFixed(x): virgulden sonra x adet sayiyi gosterir
    console.log(hacimHesap(r,h).toFixed(2));