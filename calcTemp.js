function calcKelvin(temp) {
	if (document.getElementById('output_celsius').selected) {
		return (temp - 273.15).toFixed(2) + ' degree Celsius';
	} else if (document.getElementById('output_fahrenheit').selected) {
		return (temp * 1.8 - 459.67).toFixed(2) + ' degree Fahrenheit';
	} else if (document.getElementById('output_kelvin').selected) {
		return temp + " Kelvin";
	}
}

function calcCelsius(temp) {
	if (document.getElementById('output_kelvin').selected) {
		return (temp + 273.15).toFixed(2) + " Kelvin";
	} else if (document.getElementById('output_fahrenheit').selected) {
		return (temp * 1.8 + 32).toFixed(2) + " degree Fahrenheit";
	} else if (document.getElementById('output_celsius').selected) {
		return temp + " degree Celsius";
	}
}

function calcFahrenheit(temp) {
	if (document.getElementById('output_kelvin').selected) {
		return ((temp + 459.67) / 1.8).toFixed(2) + " Kelvin";
	} else if (document.getElementById('output_celsius').selected) {
		return ((temp - 32) / 1.8).toFixed(2) + " degree Celsius";
	} else if (document.getElementById('output_fahrenheit').selected) {
		return temp + " degree Fahrenheit";
	}
}

function calcTemp() {

	var temp = parseFloat(document.getElementById("temperature").value);
	var result;
		if (document.getElementById('input_kelvin').selected) {
			if (temp < 0) {
				result = "Below absolute zero";
			} else {
				result = calcKelvin(temp);
			}
		} else if (document.getElementById('input_celsius').selected) {
			if (temp < -273.15) {
				result = "Below absolute zero";
			} else {
				result = calcCelsius(temp);
			}
		} else if (document.getElementById('input_fahrenheit').selected) {
			if (temp < -459.67) {
				result = "Below absolute zero";
			} else {
				result = calcFahrenheit(temp);
			}
		} else {
			result = "Choose the correspondent temperature scale";
		}

	document.getElementById("answer").innerHTML = result;
}