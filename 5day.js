function GetInfo(){
    const newName = document.getElementById("cityInput");

fetch("https://api.openweathermap.org/data/2.5/forecast?q='+newName.value+'&appid=edc4bb1132c4ce4877e514579e8cc486")
.then(response => response.json())
.then(data => {
    for(i=0;i<5;i++)
    {
        document.getElementById("day" +(i+1)+"Min").innerHTML = Number(data.list[i].main.temp_min ).toFixed(1);
    }
    for(i=0;i<5;i++)
    {
        document.getElementById("day" +(i+1)+"Max").innerHTML = Number(data.list[i].main.temp_max ).toFixed(1);
    }
    for(i=0;i<5;i++)
    {
        document.getElementById("day" +(i+1)+"Feels").innerHTML = Number(data.list[i].feels_like ).toFixed(1);
    }
})

.catch(err => alert("Something Went Wrong"))
}


function Defaultscreen()
{
    document.getElementById("cityInput").defaultvalue = "Chennai";
    GetInfo();
}

