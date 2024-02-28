const button = document.getElementById("search-button");
const input = document.getElementById("city-input");
const city = document.getElementById("cityDetails");
const time = document.getElementById("localtime");
const temp = document.getElementById("temperature");


async function getData(cityName) {
    const promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=${secretkey}&q=${cityName}&aqi=yes`);
    return await promise.json();
}

button.addEventListener("click", async ()=>{
    const value = input.value;
    const result = await getData(value);
    city.innerText=`${result.location.name},${result.location.region},${result.location.country}`;
    time.innerText= result.location.localtime;
    temp.innerText= result.current.temp_c;
});