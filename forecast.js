// http://api.weatherapi.com/v1/current.json?key=3d62a311982747b89a2234737231511&q=chennai&aqi=no

const humidfield = document.getElementById("hu");
const tempfield = document.getElementById("t");
const feelslikefield = document.getElementById("fl");
const isdayfield = document.getElementById("is");
const windspeedfield = document.getElementById("ws");
const winddirectionfield = document.getElementById("wd");
const winddegreefield = document.getElementById("wdeg");
const precipinfield = document.getElementById("pi");
const precipmmfield = document.getElementById("pm");
const pressureinfield = document.getElementById("presin");
const pressuremfield = document.getElementById("presm");
const ultravioletfield = document.getElementById("uv")
const cloudfield = document.getElementById("cld")
const searchfield = document.getElementById("cityInput")
const form = document.querySelector('form')

form.addEventListener('submit' , searchForLocation)


let target = 'chennai'

const fetchResults = async (targetLocation) =>{
      let url = `http://api.weatherapi.com/v1/current.json?key=3d62a311982747b89a2234737231511&q=${targetLocation}&aqi=no`

      const res = await fetch(url)

      const data = await res.json()

      console.log(data)

      let humidValue = data.current.humidity

      let temperature = data.current.temp_c

      let feelsLike = data.current.feelslike_c

      let isDay = data.current.is_day

      let windSpeed = data.current.wind_kph

      let windDirection = data.current.wind_dir

      let windDeg = data.current.wind_degree

      let precipIn = data.current.precip_in

      let precipMm = data.current.precip_mm

      let pressureIn = data.current.pressure_in

      let pressureMm = data.current.pressure_mm

      let ultraviolet = data.current.uv

      let cloud = data.current.cloud

      updateDetails(humidValue,temperature,feelsLike,isDay,windSpeed, windDirection,windDeg,precipIn,precipMm,pressureIn,pressureMm ,ultraviolet,cloud)
}


function updateDetails(humid,temp,feellike,isday,wspeed,wdirec,wdeg,prepin,prepmm,presin,presmm,uv,cld){

    humidfield.innerText = humid
    tempfield.innerText = temp
    feelslikefield.innerText = feellike
    isdayfield.innerText = isday
    windspeedfield.innerText = wspeed
    winddirectionfield.innerText = wdirec
    winddegreefield.innerText = wdeg
    precipinfield.innerText = prepin
    precipmmfield.innerText = prepmm
    pressureinfield.innerText = presin
    pressuremfield.innerText = presmm
    ultravioletfield.innerText = uv
    cloudfield.innerText = cld


}

function searchForLocation(e){
    e.preventDefault()
    
    target = searchfield.value

    fetchResults(target)

}

fetchResults(target)