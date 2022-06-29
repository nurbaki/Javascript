//****** Weather App ******//


const nurbakisKey = "e0bbe5264c021364f1aa74b60809bcd0";

const cityInput = document.querySelector("#inputcity");

const submitBtn = document.querySelector("#submitbtn");

let city="london";


async function getAllWeatherRep(cityName){

const res = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${nurbakisKey}&units=metric`);

    if (!res.ok) {
    
        document.querySelector(".msg").innerHTML=`<h2>Something went wrong: ${res.status}</h2>`
    
        throw new Error("There is a Error!!");

    }
    
    const data = await res.json();

    console.log(data);
    
    displayScreen(data);
    
};

const displayScreen = (cityData)=>{

    document.querySelector(".cities").innerHTML +=
    `<div class="card" style="width: 18rem;">
       <img src="..." class="card-img-top" alt="...">
       <div class="card-body">
          <p class="card-text">Some quick example ${cityData.name}
          ${cityData.sys.country} ${cityData.main.temp}  ${cityData.weather[0].description} </p> 
       </div>
   </div>`
};



submitBtn.onclick = () => {
    city = cityInput.value;
    getAllWeatherRep(city);
    cityInput.focus();   
    console.log(city);   
};
 




