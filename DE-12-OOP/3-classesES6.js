//* ======================================================
//*            Object Oriented Programming
//*              OOP - Classes (ES6)
//* ======================================================

//? Classes  objects oluşturmak için template (şablondur).
//? JS deki Classes   prototypes üzerine kuruludur, but aynı zamanda ES5 syntax ından farklı bazı syntax and semantics e sahiptir .
//? Aslında  class keyword ü  ES6 da tanıtılmıştır, but is syntactical sugar, JavaScript  prototype-based dir.

class Book{

constructor(kitapAdi, yazar, yil){
    this.kitapAdi= kitapAdi;
    this.yazar= yazar;
    this.yil=yil;
    this.ferhat=function(){
        return `${this.kitapAdi} ${this.yil} yılında ${this.yazar} yazmıştır `;}
}

getirYil(){
    return new Date().getFullYear()-this.yil;
}
}

//* Book kalibindan (class indan) instance (object-nesne) olusturma

const book1 = new Book("safahat", "M.Akif Ersoy", 1910)
console.log(book1);
console.log(book1.getirYil()); 
console.log(book1.ferhat()); 


//? INHERITANCE 

class Dergi extends Book {
    constructor(kitapAdi, yazar, yil,month) {
        super(kitapAdi, yazar, yil)
        this.month= month;
    }
}

const dergi1=new Dergi("times", "adam sandler", 1920, "aralik")
console.log(dergi1);
console.log(dergi1.getirYil());