// Javascript Entry Point
var vTime, vColor;


vTime = document.querySelector(".time");



function currentFunction (){
	var current = new Date();
	var hours = current.getHours();
	var minutes = current.getMinutes();
	var seconds = current.getSeconds();

	hours = (hours > 12 ? hours - 12 : hours);

	hours = ( hours < 10 ? "0" : "" ) + hours;
	minutes = ( minutes < 10 ? "0" : "" ) + minutes;
	seconds = ( seconds < 10 ? "0" : "" ) + seconds;

	vTime.innerHTML = hours + ":" + minutes + ":" + seconds;
}

var intID = window.setInterval(currentFunction, 1000);


/////////////////////



vColor = document.querySelector('.color');


function colorFunction (){
	var colorCurrent = new Date();
	var colorHours = colorCurrent.getHours();
	var colorMinutes = colorCurrent.getMinutes();
	var colorSeconds = colorCurrent.getSeconds();

	colorHours = (colorHours > 12 ? colorHours - 12 : colorHours);

	colorHours = ( colorHours < 10 ? "0" : "" ) + colorHours;
	colorMinutes = ( colorMinutes < 10 ? "0" : "" ) + colorMinutes;
	colorSeconds = ( colorSeconds < 10 ? "0" : "" ) + colorSeconds;

	var colorCode= "#" + colorHours + colorMinutes + colorSeconds;
	vColor.innerHTML =  colorCode;
	vColor.style.backgroundColor = colorCode;

}


var intID = window.setInterval(colorFunction, 1000);