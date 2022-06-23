
getirCountry("turkey");

async function getirCountry(name){

const res = await fetch (`https://restcountries.com/v3.1/name/${name}`);

// console.log(res);

if (!res.ok) {

    document.querySelector(".countries").innerHTML=`<h2>Something went wrong: ${res.status}</h2>`

    throw new Error("Hata var");
}


// ekranaBastir(await res.json());

const data = await res.json();

console.log(data);
ekranaBastir(data[0]);

};

const ekranaBastir = (country)=>{
    console.log(country);
    document.querySelector(".countries").innerHTML= `<div class="card text-start w-50 shadow-lg bg-light">
    <img src=${country.flags.svg} class="card-img-top" alt="...">
    <div class="card-body">
       <h5 class="card-title">${country.name.common}</h5>
       <p class="card-text">${country.name.official}</p>
    </div>
    <ul class="list-group list-group-flush">
       <li class="list-group-item"><i class="fas fa-lg fa-landmark"></i> ${country.capital}</li>
       <li class="list-group-item"><i class="fas fa-lg fa-comments"></i>${Object.values (country.languages)[0]} </li>
       <li class="list-group-item"><i class="fas fa-lg fa-money-bill-wave"></i> ${Object.values (country.currencies)[0].name} ,
        ${Object.values (country.currencies)[0].symbol}</li>
    </ul>
 </div>`;
};