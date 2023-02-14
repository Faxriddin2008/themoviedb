const slide = document.getElementById('slide')
const slidee = document.getElementById('slidee')
const slideee = document.getElementById('slideee')
const trailer_list = document.getElementById("trailer-list")
const movie_list = document.getElementById("movie-list")
const tv_list = document.getElementById("tv-list")
const apiKey = "18527347a9a13a6ec4a8563570d0507c";
const imgUrl = "https://image.tmdb.org/t/p/original"
const mainUrl = "https://api.themoviedb.org/3";
async function fetchApi(url){
  await fetch(mainUrl+url+"?api_key="+apiKey)
  .then(result => result.json())
  .then(object => display(object.results))

}
async function fetchApii(url){
  await fetch(mainUrl+url+"?api_key="+apiKey)
  .then(result => result.json())
  .then(object => displayy(object.results))

}

async function fetchApiii(url){
  await fetch(mainUrl+url+"?api_key="+apiKey)
  .then(result => result.json())
  .then(object => displayyy(object.results))

}
function display(array){
  array.forEach(element => {
    console.log(element);
    if (element.title == undefined || element.release_date == undefined ) {
      movie_list.innerHTML += 
    `
    <div class="movie">
        <img class="movie_photo" src="${imgUrl+element.poster_path}" alt="">
        <div class="vote">${Math.floor(element.vote_average*10)}%</div>
        <p class="movie_name">${element.name}</p>
        <p class="movie_name release_date">${element.first_air_date}</p>
    </div>
    `   
    
    }
    else(
    movie_list.innerHTML += 
    `
    <div class="movie">
        <img class="movie_photo" src="${imgUrl+element.poster_path}" alt="">
        <div class="vote">${Math.floor(element.vote_average*10)}%</div>
        <p class="movie_name">${element.title}</p>
        <p class="movie_name release_date">${element.release_date}</p>
    </div>
    `
    )


  });
}

function displayy(array){
  array.forEach(element => {
    console.log(element);
    if (element.title == undefined || element.release_date == undefined ) {
      tv_list.innerHTML += 
    `
    <div class="movie">
        <img class="movie_photo" src="${imgUrl+element.poster_path}" alt="">
        <div class="vote">${Math.floor(element.vote_average*10)}%</div>
        <p class="movie_name">${element.name}</p>
        <p class="movie_name release_date">${element.first_air_date}</p>
    </div>
    `   
    
    }
    else(
    tv_list.innerHTML += 
    `
    <div class="movie">
        <img class="movie_photo" src="${imgUrl+element.poster_path}" alt="">
        <div class="vote">${Math.floor(element.vote_average*10)}%</div>
        <p class="movie_name">${element.title}</p>
        <p class="movie_name release_date">${element.release_date}</p>
    </div>
    `
    )


  });
}

function displayyy(array){
  array.forEach(element => {
    console.log(element);
    if(element.title == undefined){
      trailer_list.innerHTML += 
      `
      <div class="trailer">
        <img src="${imgUrl+element.poster_path}" class="trailer-photo" alt="">
        
        <h2 class="trailer-name">${element.name}</h2>
      </div>
      ` 
    }else{
      trailer_list.innerHTML += 
      `
      <div class="trailer">
        <img src="${imgUrl+element.poster_path}" class="trailer-photo" alt="">
        
        <h2 class="trailer-name">${element.title}</h2>
      </div>
      ` 
    }
  });
}
  
  fetchApi("/trending/all/day");
  fetchApii("/tv/on_the_air")
  fetchApiii("/movie/popular")



function week(){
  movie_list.innerHTML = "";
  fetchApi("/trending/all/week");
  slide.style.marginLeft = "-100px";
  slide.style.transition = "1s";

}
function today(){
  movie_list.innerHTML = "";
  fetchApi("/trending/all/day");
  slide.style.marginLeft = "-200px";
  slide.style.transition = "1s";  
}

function theatres(){
  tv_list.innerHTML = "";
  fetchApii("/tv/popular");
  slidee.style.marginLeft = "-100px";
  slidee.style.transition = "1s";  
}
function tv(){
  tv_list.innerHTML = "";
  fetchApii("/tv/on_the_air");
  slidee.style.marginLeft = "-200px";
  slidee.style.transition = "1s";  
}

function theatres2(){
  trailer_list.innerHTML = "";
  fetchApiii("/tv/popular");
  slideee.style.marginLeft = "-100px";
  slideee.style.transition = "1s";  
}
function tv2(){
  trailer_list.innerHTML = "";
  fetchApiii("/movie/popular");
  slideee.style.marginLeft = "-200px";
  slideee.style.transition = "1s";  
}






/* <img src="play.svg" class="play" alt=""> */

/* <img src="play.svg" class="play" alt=""> */