fetch("https://community-open-weather-map.p.rapidapi.com/weather?q=London%2Cuk&lat=0&lon=0&callback=test&id=2172797&lang=null&units=imperial&mode=xml", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
		"x-rapidapi-key": "3156ffa1b1mshacdd7beec13cf15p1fdc24jsn6a16b3196ab6"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});