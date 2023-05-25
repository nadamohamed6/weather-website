//TO SEARCH FOR CITES
// http://api.weatherapi.com/v1/search.json?key=854fa58a290d43a9ba815820232802&q=lond


//FORCAST API:
//JSON: http://api.weatherapi.com/v1/forecast.json?key=854fa58a290d43a9ba815820232802&q=07112&days=3

//API KEY:
//   854fa58a290d43a9ba815820232802

let contactBtn = document.querySelector("#contactBtn")
let homeBody = document.querySelector("#home-body")
let contactBody = document.querySelector("#contact-body")
let navHomeBtn = document.querySelector("#navHomeBtn")
let contactHomeBtn = document.querySelector("#contactHomeBtn")
let searchBar = document.querySelector("#search-bar")
let sumbitBtn = document.querySelector("#sumbit")
var currentCity="luxor";
var getWeatherData;



async function weather(currentCity){
  getWeatherData = await fetch (`https://api.weatherapi.com/v1/forecast.json?key=854fa58a290d43a9ba815820232802&q=${currentCity}&days=3`)
responseData = await getWeatherData.json()
console.log(responseData);
displayWeather(currentCity)
}
weather(currentCity)


searchBar.addEventListener("keyup",function(){
  currentCity=searchBar.value
  // displayWeather(currentCity)
  weather(currentCity)
  console.log(currentCity);



})









function displayWeather(currentCity) {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  const d = new Date(responseData.forecast.forecastday[0].date);
  const i = new Date(responseData.forecast.forecastday[1].date);
  const f = new Date(responseData.forecast.forecastday[2].date);
  let month = months[d.getMonth()];
  let day = d.getDate();
  let weekday0 = days[d.getDay()];
  let weekday1 = days[i.getDay()];
  let weekday2 = days[f.getDay()];

  var cartona = ` <div class="col-md-4  text-white today-content px-0">
    <header class="d-flex justify-content-between py-1 px-2">
      <p>${weekday0}</p>
      <p>${day + month}</p>
    </header>

    <div class="content p-3">
      <h4 class="py-2">${responseData.location.name}</h4>
      <div class="today d-flex justify-content-around align-items-center">
        <h2 >${responseData.current.temp_c}<sup>o</sup>c</h2>
        <div>
        <img src="https://${responseData.current.condition.icon}" width="90"> 
        </div>
      </div>
   
      <p class="weather">${responseData.current.condition.text}</p>
      <div class="footer-of-content d-flex justify-content-start">
        <div class="p-3">
          <img src="images/icon-umberella.png" alt="umberella">
          <span>20%</span>
        </div>
        <div class="p-3">
          <img src="images/icon-wind.png" alt="umberella">
          <span>18km/h</span>
        </div>
        <div class="p-3">
          <img src="images/icon-compass.png" alt="umberella">
          <span>East</span>
        </div>
      </div>
    </div>
  </div>
  
  
  <div class="col-md-4  text-white tomorow-content px-0">
          <header class="text-center py-1">
            <p class="">${weekday1}</p>
          </header>


          <div class="content p-3 text-center">
            <div>
              <img src="https://${responseData.forecast.forecastday[1].day.condition.icon}" class="my-3" style="width:48px">
             

            </div>
            <h3>${responseData.forecast.forecastday[1].day.maxtemp_c}<sup>o</sup>c</h3>
            <p class="small-dgree">${responseData.forecast.forecastday[1].day.mintemp_c}<sup>o</sup>c</p>
            <p class="py-2 weather">${responseData.forecast.forecastday[1].day.condition.text}</p>

          </div>



        </div>
  
  
  

        <div class="col-md-4  text-white nextday-content px-0">
          <header class="text-center py-1 ">
            <p>${weekday2}</p>
          </header>


          <div class="content p-3 text-center ">
            <div>

              <img src="https://${responseData.forecast.forecastday[2].day.condition.icon}" class="my-3" style="width:48px">
             
            </div>
            <h3>${responseData.forecast.forecastday[2].day.maxtemp_c}<sup>o</sup>c</h3>
            <p class="small-dgree">${responseData.forecast.forecastday[2].day.mintemp_c}<sup>o</sup>c</p>
            <p class="py-2 weather">${responseData.forecast.forecastday[2].day.condition.text}</p>

          </div>



        </div>
  
  
  
  `

  document.getElementById("forcast-body").innerHTML = cartona;

}



contactBtn.addEventListener("click", () => {
  homeBody.classList.replace("d-block", "d-none")
  contactBody.classList.replace("d-none", "d-block")
})


navHomeBtn.addEventListener("click", () => {
  contactBody.classList.replace("d-block", "d-none")
  homeBody.classList.replace("d-none", "d-block")

})

contactHomeBtn.addEventListener("click", () => {
  contactBody.classList.replace("d-block", "d-none")
  homeBody.classList.replace("d-none", "d-block")

})






