var http = require("http");
var weatherData = "";
var APIKEY = "16a170cfed3fd644de1598cb146234b3";
var city = "Chicago";
var options = {
	host: 'api.openweathermap.org',
	path: '/data/2.5/weather?q=' + city + '&APPID=' + APIKEY
}

http.request(options,function(weatheResponse){
	weatheResponse.on("data",function(data){
		weatherData += data;
	})
	weatheResponse.on("end",function(){
		console.log(weatherData);
	})
}
).end()