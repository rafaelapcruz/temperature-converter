
function conditionalDropdown() {
	var inputScaleValue = document.getElementById("input-scale").value;
 	console.log (inputScaleValue);
 	var options = document.getElementById("output-scale");
 	switch (inputScaleValue) {
 		case "kelvin":
 			document.getElementById("output-scale").options[0]=new Option("Celsius","celsius");
 			document.getElementById("output-scale").options[1]=new Option("Fahrenheit","fahrenheit");
 			options[0].setAttribute('id', 'output-celsius');
 			options[1].setAttribute('id', 'output-fahrenheit');
 			break;

 		case "celsius":
 			document.getElementById("output-scale").options[0]=new Option("Kelvin","kelvin");
 			document.getElementById("output-scale").options[1]=new Option("Fahrenheit","fahrenheit");
 			options[0].setAttribute('id', 'output-kelvin');
 			options[1].setAttribute('id', 'output-fahrenheit');
 			break;
 		case "fahrenheit":
 			document.getElementById("output-scale").options[0]=new Option("Kelvin","kelvin");
 			document.getElementById("output-scale").options[1]=new Option("Celsius","celsius");
 			options[0].setAttribute('id', 'output-kelvin');
 			options[1].setAttribute('id', 'output-celsius');
 			break;
 	}
 	
}


function calcKelvin(temp) {
	if (document.getElementById('output-celsius').selected) {
		return (temp - 273.15).toFixed(2) + ' degrees Celsius';
	} else if (document.getElementById('output-fahrenheit').selected) {
		return (temp * 1.8 - 459.67).toFixed(2) + ' degrees Fahrenheit';
	} else if (document.getElementById('output-kelvin').selected) {
		return temp + " Kelvin";
	}
}

function calcCelsius(temp) {
	if (document.getElementById('output-kelvin').selected) {
		return (temp + 273.15).toFixed(2) + " Kelvin";
	} else if (document.getElementById('output-fahrenheit').selected) {
		return (temp * 1.8 + 32).toFixed(2) + " degrees Fahrenheit";
	} else if (document.getElementById('output-celsius').selected) {
		return temp + " degrees Celsius";
	}
}

function calcFahrenheit(temp) {
	if (document.getElementById('output-kelvin').selected) {
		return ((temp + 459.67) / 1.8).toFixed(2) + " Kelvin";
	} else if (document.getElementById('output-celsius').selected) {
		return ((temp - 32) / 1.8).toFixed(2) + " degrees Celsius";
	} else if (document.getElementById('output-fahrenheit').selected) {
		return temp + " degrees Fahrenheit";
	}
}

function calcTemp() {

	var temp = parseFloat(document.getElementById("temperature").value);
	console.log(temp);
	var scaleString;
	var result;
	if (isNaN(temp)) { //não é possível escrever var x === NaN; NaN is unwritable
		alert("Temperature value must be a number.");
	} else {
		if (document.getElementById('input-kelvin').selected) {
			scaleString = " Kelvin"
			if (temp < 0) {
				result = "Below absolute zero";
			} else {
				result = calcKelvin(temp);
			}
		} else if (document.getElementById('input-celsius').selected) {
			scaleString = " degrees Celsius"
			if (temp < -273.15) {
				result = "Below absolute zero";
			} else {
				result = calcCelsius(temp);
			}
		} else if (document.getElementById('input-fahrenheit').selected) {
			scaleString = " degrees Fahrenheit"
			if (temp < -459.67) {
				result = "Below absolute zero";
			} else {
				result = calcFahrenheit(temp);
			}
		}
		document.getElementById("answer").innerHTML = temp + scaleString + " equals to " + result;
		document.getElementById("answer-box").setAttribute("class", "alert alert-warning");
		document.getElementById("answer-box").setAttribute("role", "alert");
	}
}