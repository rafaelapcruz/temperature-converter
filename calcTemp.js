function calcTemp() {

			var temp = parseFloat(document.getElementById("temperature").value);
			var result;
				if (document.getElementById('input_kelvin').selected) {
					if (temp < 0) {
						result = "Below absolute zero";
					} else if (document.getElementById('output_celsius').selected) {
						result = (temp - 273.15).toFixed(2);
						result += ' degree Celsius';
					} else if (document.getElementById('output_fahrenheit').selected) {
						result = (temp * 1.8 - 459.67).toFixed(2);
						result += ' degree Fahrenheit';
					} else if (document.getElementById('output_kelvin').selected) {
						result = temp + " Kelvin";
					}
				} else if (document.getElementById('input_celsius').selected) {
					if (document.getElementById('output_kelvin').selected) {
						result = (temp + 273.15).toFixed(2);
						if (result < 0) {
							result = "Below absolute zero";
						} else {
							result += " Kelvin";
						}
					} else if (document.getElementById('output_fahrenheit').selected) {
						result = (temp * 1.8 + 32).toFixed(2);
						if (result < -459.67) {
							result = "Below absolute zero";
						} else {
							result += " degree Fahrenheit";
						}
					}
				} else if (document.getElementById('input_fahrenheit').selected) {
					if (document.getElementById('output_kelvin').selected) {
						result = ((temp + 459.67) / 1.8).toFixed(2);
						if (result < 0) {
							result = "Below absolute zero";
						} else {
							result += " Kelvin";
						}
					} else if (document.getElementById('output_celsius').selected) {
						result = ((temp - 32) / 1.8).toFixed(2);
						if (result < -273.15) {
							result = "Below absolute zero";
						} else {
							result += " degree Celsius";
						}
					}
				} else {
					result = "Choose the correspondent temperature scale";
				}
				
				document.getElementById("answer").innerHTML = result;
			}
			