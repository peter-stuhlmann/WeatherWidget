var icons = new Skycons({
    "color": "orange"
});

icons.set("clear-day", Skycons.CLEAR_DAY);
icons.set("clear-night", Skycons.CLEAR_NIGHT);
icons.set("partly-cloudy-day", Skycons.PARTLY_CLOUDY_DAY);
icons.set("partly-cloudy-night", Skycons.PARTLY_CLOUDY_NIGHT);
icons.set("cloudy", Skycons.CLOUDY);
icons.set("rain", Skycons.RAIN);
icons.set("sleet", Skycons.SLEET);
icons.set("snow", Skycons.SNOW);
icons.set("wind", Skycons.WIND);
icons.set("fog", Skycons.FOG);

icons.play();



function weatherWidget_fetch() {

    fetch(`https://api.darksky.net/forecast/d4dea35e4775428f2ece010ca5c01504/52.520008,13.404954`)
        .then(
            response => response.json()
        )
        .then(
            weather => {

                console.log(weather)

                document.querySelector(`#${weather.currently.icon}`).style.display = "block"
                document.querySelector('.city').innerHTML = `<strong>${weather.timezone}</strong><br>WEATHER`
                document.querySelector('.temperature').innerHTML = Math.round((weather.currently.temperature - 32) / 1.8) + '°C'

                for (let i = 1; i < 7; i++) {
                    document.querySelector(`#day${i+1}-weekday`).innerHTML = moment(weather.daily.data[i].time, 'X').format('dddd');
                    document.querySelector(`#day${i+1}-icon`).innerHTML = `<img src="assets/img/${weather.daily.data[i].icon}.svg">`
                    document.querySelector(`#day${i+1}-temperature-min`).innerHTML = Math.round((weather.daily.data[i].temperatureMin - 32) / 1.8) + '°C'
                    document.querySelector(`#day${i+1}-temperature-max`).innerHTML = Math.round((weather.daily.data[i].temperatureMax - 32) / 1.8) + '°C'
                }
            },
        )
}
weatherWidget_fetch()
