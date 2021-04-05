function calcKelvin(temp) {
	if (document.getElementById('output_celsius').selected) {
		return (temp - 273.15).toFixed(2) + ' degrees Celsius';
	} else if (document.getElementById('output_fahrenheit').selected) {
		return (temp * 1.8 - 459.67).toFixed(2) + ' degrees Fahrenheit';
	} else if (document.getElementById('output_kelvin').selected) {
		return temp + " Kelvin";
	}
}

function calcCelsius(temp) {
	if (document.getElementById('output_kelvin').selected) {
		return (temp + 273.15).toFixed(2) + " Kelvin";
	} else if (document.getElementById('output_fahrenheit').selected) {
		return (temp * 1.8 + 32).toFixed(2) + " degrees Fahrenheit";
	} else if (document.getElementById('output_celsius').selected) {
		return temp + " degrees Celsius";
	}
}

function calcFahrenheit(temp) {
	if (document.getElementById('output_kelvin').selected) {
		return ((temp + 459.67) / 1.8).toFixed(2) + " Kelvin";
	} else if (document.getElementById('output_celsius').selected) {
		return ((temp - 32) / 1.8).toFixed(2) + " degrees Celsius";
	} else if (document.getElementById('output_fahrenheit').selected) {
		return temp + " degrees Fahrenheit";
	}
}

function calcTemp() {

	var temp = parseFloat(document.getElementById("temperature").value);
		//console.log(temp);
	var result;
	var input_scale;
		if (document.getElementById('input_kelvin').selected) {
			input_scale = " Kelvin"
			if (temp < 0) {
				result = "Below absolute zero";
			} else {
				result = calcKelvin(temp);
			}
		} else if (document.getElementById('input_celsius').selected) {
			input_scale = " degrees Celsius"
			if (temp < -273.15) {
				result = "Below absolute zero";
			} else {
				result = calcCelsius(temp);
			}
		} else if (document.getElementById('input_fahrenheit').selected) {
			input_scale = " degrees Fahrenheit"
			if (temp < -459.67) {
				result = "Below absolute zero";
			} else {
				result = calcFahrenheit(temp);
			}
		}

	document.getElementById("answer").innerHTML = temp + input_scale + " equals to " + result;
	document.getElementById("answer-box").setAttribute("class", "btn");
}