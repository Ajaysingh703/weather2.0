let key = "8f2c49618e604db0e46a5336d924f253";
let city_name;
function checkWeather(){
        city_name = document.getElementById("city-name").value;
        document.getElementById("output-city").innerHTML = `${city_name}`;
        //console.log(city_name);
        //////APi FETCHING//////////////////////////
        let st = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&units=metric&appid=${key}`;

        fetch(st)
        .then(res => res.json())
        .then(
            (data) =>{
                console.log(data);
                document.getElementById("temp-val").innerHTML = `Temprature is :- ${data.main.temp}`;
                var d = new Date(Date.now()  + 1000 * (data.timezone / 3600));
                const dateFormat = d.toLocaleString();
                console.log(data.weather[0].main);
                document.getElementById("Time-zone").innerHTML = `${dateFormat} , ${data.weather[0].main}`;
                
            }
        )
}
