const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'b45e96323fmshf5e4bc50d3b8a90p1e091djsnfb21cde4eb87',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};
const getWeather = (city)=>{
    cityname.innerHTML=city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    .then(response => response.json())
    .then((response )=> {
        
        console.log(response)
        temp.innerHTML = response.temp
        feels_like.innerHTML = response.feels_like
        humidity.innerHTML = response.humidity
        min_temp.innerHTML = response.min_temp
        max_temp.innerHTML = response.max_temp
        wind_speed.innerHTML = response.wind_speed
        wind_degrees.innerHTML = response.wind_degrees
        cloud_pct.innerHTML = response.cloud_pct
    
    })
    .catch(err => console.error(err));
}
submit.addEventListener("click",(e)=>
{
    e.preventDefault()
    getWeather(city.value)
})

getWeather("chennai")

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=delhi' , options)
.then(response => response.json())
.then((response)=>{
console.log(response)
temperature1.innerHTML = response.temp
humid1.innerHTML = response.humidity
wspeed1.innerHTML = response.wind_speed
feel1.innerHTML = response.feels_like
})

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=mumbai' , options)
.then(response => response.json())
.then((response)=>{
console.log(response)
temperature2.innerHTML = response.temp
humid2.innerHTML = response.humidity
wspeed2.innerHTML = response.wind_speed
feel2.innerHTML = response.feels_like
})

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=chennai' , options)
.then(response => response.json())
.then((response)=>{
console.log(response)
temperature3.innerHTML = response.temp
humid3.innerHTML = response.humidity
wspeed3.innerHTML = response.wind_speed
feel3.innerHTML = response.feels_like
})

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=bangalore' , options)
.then(response => response.json())
.then((response)=>{
console.log(response)
temperature4.innerHTML = response.temp
humid4.innerHTML = response.humidity
wspeed4.innerHTML = response.wind_speed
feel4.innerHTML = response.feels_like
})

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=hyderabad' , options)
.then(response => response.json())
.then((response)=>{
console.log(response)
temperature5.innerHTML = response.temp
humid5.innerHTML = response.humidity
wspeed5.innerHTML = response.wind_speed
feel5.innerHTML = response.feels_like
})