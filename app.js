let weather = {
    "apikey" : "700e32c17064884435e55e54918aba1c",
    fetchWeather: function(city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
            + city +
            "&units=metric&appid="
            + this.apikey
        )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data){
        const {temp} = data.main;
        console.log(temp)
    }
};
