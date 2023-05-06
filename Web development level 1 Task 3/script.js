function convertTemperature() {
  const celsiusInput = document.getElementById("celsius");
  const fahrenheitInput = document.getElementById("fahrenheit");
  if (celsiusInput.value || fahrenheitInput.value) {
    let celsiusTemp = parseFloat(celsiusInput.value);
    let fahrenheitTemp = parseFloat(fahrenheitInput.value);
    if (!isNaN(celsiusTemp)) {
      let convertedTemp = (celsiusTemp * 9/5) + 32;
      fahrenheitInput.value = convertedTemp.toFixed(2);
    }
      if (!isNaN(fahrenheitTemp)) {
      let convertedTemp = (fahrenheitTemp - 32) * 5/9;
      celsiusInput.value = convertedTemp.toFixed(2);
    }
  }
}
function resetFields() {
  document.getElementById("celsius").value = "";
  document.getElementById("fahrenheit").value = "";
}
