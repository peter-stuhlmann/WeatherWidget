function weatherWidget_fetch() {

    fetch(`https://api.darksky.net/forecast/d4dea35e4775428f2ece010ca5c01504/52.520008,13.404954`)
        .then(
            response => response.json()
        )
        .then(
            weather => {
                document.querySelector('.icon').innerHTML = `<img src="assets/img/${weather.currently.icon}.svg" width="64" height="64">`
                document.querySelector('.city').innerHTML = weather.timezone
                document.querySelector('.temperature').innerHTML = weather.currently.temperature
                document.querySelector('.description').innerHTML = weather.currently.summary
                document.querySelector('.humidity').innerHTML = weather.currently.humidity
                document.querySelector('.windspeed').innerHTML = weather.currently.windSpeed            },
        )
        .catch(
            err => console.log(`panic: ${err}`)
        )
}
weatherWidget_fetch()