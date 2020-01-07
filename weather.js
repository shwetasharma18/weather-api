var http = require("http");
const readline = require('readline-sync');
var weatherData = "";
var APIKEY = "16a170cfed3fd644de1598cb146234b3";
var city = readline.question('Which city? :- ');;
var options = {
	host: 'api.openweathermap.org',
	path: '/data/2.5/weather?q=' + city + '&APPID=' + APIKEY
}

http.request(options,function(weatheResponse){
	weatheResponse.on("data",function(data){
		weatherData += data;
		let obj = JSON.parse(weatherData) 
		// console.log(obj);
		for(let i = 0; i < obj["weather"].length; i++){
			id = obj["weather"][i]["id"]
			// console.log(id)
		console.log("lon :- " + obj.coord["lon"])
		console.log("lat :- " + obj.coord["lat"])
		}
	})
}).end()