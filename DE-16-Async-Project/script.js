// https://api.tvmaze.com/shows

let forAramaListe = [];

fetch("./tv-shows.json")
.then((resp)=>resp.json()).then((datA)=>{

    forAramaListe = datA;

  setTvShows(forAramaListe);
});

function setTvShows(data) {

let liste=document.querySelector(".tvShowList")

liste.innerHTML="";

data.forEach((w)=>{
liste.innerHTML += `<div class="col-md-3">   <div class="card" >
  <img src=${w.show.image ? w.show.image.medium: ""} class="card-img-top">
  <div class="card-body">
    <h5 class="card-title">${w.show.name}</h5>

    <a href=${w.show.url} class="btn btn-primary">Details</a>
  </div>
</div> </div> `;

})
};

document.getElementById("search").oninput=(harf)=>{

  let data2 = forAramaListe.filter((w) => w.show.name.includes(harf.target.value));
  
  setTvShows(data2);

};