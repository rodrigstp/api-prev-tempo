const api = {
	key:'3156ffa1b1mshacdd7beec13cf15p1fdc24jsn6a16b3196ab6',
	base:'https://community-open-weather-map.p.rapidapi.com/weather?q=London%2Cuk&lat=0&lon=0&callback=test&id=2172797&lang=null&units=imperial&mode=xml',
	lang: 'pt_br',
	units:'metric'
}

const city = document.querySelector('.city')
const date = document.querySelector('.date')
const container_img = document.querySelector('.container_img')
const container_temp = document.querySelector('.container_temp')
const weather = document.querySelector('.weather')
const temp_number = document.querySelector('.container_temp div')
const temp_unit = document.querySelector('.container_temp span')
const search_input = document.querySelector('.form-control')
const search_button = document.querySelector('.btn')
const low_high = document.querySelector('.low_high')






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







search_button.addEventListener('click', function(){
	searchResults(search_input.value);
});
	
		
search_input.addEventListener('keypress', enter)
function enter(event){
	key = event.keyCode
	if (key === 13){ 			//numeração que refere a tecla enter no teclado
		searchResults(search_input.value)
	}

}

function searchResults(city){

	fetch(`${api.base}weather?q=${city}&lang=${api.lang}&units=${api.units}&APPID=${api.key}`)

		.then(response => {
					console.log(response)

			if(!response.ok){
				throw new Error (`http error:status ${response.status}`)
			}

					return response.json();

		})
		.catch(error =>{
			alert(erro.message)
		}
			
			)
	


}
