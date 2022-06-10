// ? =========================================================
// ?                    FONKSİYONLAR
// ?==========================================================

//!----------------------------------------------------------
//! 2.YÖNTEM  : FUNCTION EXPRESSION
//!-----------------------------------------------------------
//* Örnek1: tek-cift kontrolu
//**********************************************************/
console.log("******** 2- EXPRESSION*******");


const tekCift= function(sayi){
    return sayi%2==1 ? "tektir" : "cifttir";
}

console.log (tekCift(5));
console.log (tekCift(6));

//* Örnek1: en büyük sayiyi bul
//**********************************************************/

let buyukbul= function(x,y,z){
    let enBuyuk;
    if (x>y && x>z) {
        enBuyuk=x;        
    }
    else if( y>z && y>x){
        enBuyuk=y;
    }
    else{enBuyuk=z;}
    return enBuyuk;
}

console.log("en büyük sayı" , buyukbul(3,52,90));

// Örnek 3: fonksiyon icinde fonksiyon cagirma

const topla= function(s1,s2){
    return s1+s2;
};
const cikar= function(s1,s2){
    return s1-s2;
};
const carp= function(s1,s2){
    return s1*s2;
};
const bolme= function(s1,s2){
    return s1/s2;
};

const hesapla= function(islem,s1,s2){
    let sonuc;
if(islem=="+")
{sonuc=topla(s1,s2);}
else if (islem=="-")
{sonuc=cikar(s1,s2);}
else if (islem=="*")
{sonuc=carp(s1,s2);}
else if(islem=="/")
{sonuc=bolme(s1,s2);}
return sonuc;
}
alert(hesapla("*",3,5));

console.log(hesapla("/",8,4));