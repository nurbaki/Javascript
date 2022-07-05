//* ======================================================
//*    NEW GENERATION OPERATORS: DESTRUCTURING (OBJECT)
//* ======================================================

const car = {
    title: "BMW",
    model: 1990,
    engine: 1.6,
  };
  
  //*1. yol klasik yol
  console.log(car.model);
  console.log(car["engine"]);
  
  //*2.yol destructuring 
  
  const{title,engine}=car;
  
  console.log(title, engine, car.model);
  
  //* EXAMPLE: NESTED
  const arabalar = {
    car1: {
      name: "BMW",
      model: 1990,
      engine: 1.6,
    },
    car2: {
      name: "MERCEDES",
      model: 2022,
      engine: 2.0,
    },
  };
  
  //!!!!JavaScript'te, iterable protokolü uygulamadıkça Objects iterable değildir. Bu nedenle, bir object in özellikleri üzerinde iterate yapmak için for…of kullanamazsınız.
  
   for(let item in arabalar)
   // console.log(item);
  console.log(arabalar[item].name);
  
  //* EXAMPLE: Array-Object
  const people = [
    {
      name: "Mustafa",
      surname: "Gertrud",
      job: "developer",
      age: 30,
    },
    {
      name: "Halo",
      surname: "Müller",
      job: "tester",
      age: 35,
    },
    {
      name: "Mehmet",
      surname: "Rosenberg",
      job: "team lead",
      age: 40,
    },
    {
      name: "Ozkul",
      surname: "Gutenberg",
      job: "developer",
      age: 26,
    },
  
    {
      name: "Baser",
      surname: "Shaffer",
      job: "tester",
      age: 24,
    },
  ];
  
  
  
  
   
  people.forEach((item)=>{
   const{name,surname,job,age}=item
  
  console.log(name,surname,job,age);
  // console.log(item.name);
  // console.log(item.surname);
  // console.log(item.job);
  // console.log(item.age);
  
  
  });

  //*======================================================
//*   NEW GENERATION OPERATORS: SPREAD OR REST (...)
//* ======================================================

//? ------------------------------------------------------
//?  REST =>>[...name]=diziden alınmayan, geri kalanları yeni bir (diziyse) diziye,(object se)object e atıyor
//? ------------------------------------------------------
//*Object

const personel={
  pName:"john",
  surname:"smith",
  job:"developer",
  age:30,
}
const{pName,...gerisi}=personel;
console.log(gerisi);
const{...personelGerisi}=personel;


const personelCopy=personel;


console.log(personelGerisi, personelCopy,personel);

personelGerisi.age=40;
console.log(personelGerisi, personelCopy, personel);
personelCopy.age=50;

console.log(personelGerisi, personelCopy, personel);



//* Array

const esasNumber=[10,20,30,40]

const siyamNumber=esasNumber;



const[...esasCopy]=esasNumber;

esasCopy.push(999);
console.log(esasNumber, esasCopy, siyamNumber);

siyamNumber.unshift(222)

console.log(esasNumber, esasCopy, siyamNumber);

// esasNumber=[222, 10, 20, 30, 40];
const[bir,iki,...digerNumber]=esasNumber;
console.log(digerNumber);
console.log(bir,iki);













