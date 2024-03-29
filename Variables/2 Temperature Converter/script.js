//2. Temperature Converter
//Create a program that converts temperatures between Fahrenheit and Celsius. Allow the user to input the temperature and the scale (F or C).

function convertTemperature() {
  const input = prompt("Enter the temperature (e.g., 32 F or 0 C):");

  const temperature = parseFloat(input);
  const scale = input.slice(-1).toLocaleUpperCase();

  if (isNaN(temperature) || (scale !== "F" && scale !== "C")) {
    console.log(
      "Invalid input. Please enter a valid temperature (e.g,. 32 F or 0 C)."
    );
    return;
  }

  let convertedTemperature;
  if (scale === "F") {
    // Fahrenheit to Celsius
    convertedTemperature = ((temperature - 32) * 5) / 9;
    console.log(
      `${temperature}°F is equivalent to ${convertedTemperature.toFixed(2)}°C.`
    );
  } else {
    // Celsius to Fahrenheit
    convertedTemperature = (temperature * 9) / 5 + 32;
    console.log(
      `${temperature}°C is equivalent to ${convertedTemperature.toFixed(2)}°F.`
    );
  }
}
convertTemperature();