document.getElementById('Btn').addEventListener('click', function() {
    let celsius = parseFloat(document.getElementById('celsiusInput').value);

    if (isNaN(celsius)) {
        document.getElementById('result').innerHTML = "Por favor, ingresa un número válido.";
        return;
    }

    let fahrenheit = (celsius * 9/5) + 32;
    let kelvin = celsius + 273.15;

    document.getElementById('result').innerHTML = `
        <p><strong>Temperatura en Fahrenheit:</strong> ${fahrenheit.toFixed(2)} °F</p>
        <p><strong>Temperatura en Kelvin:</strong> ${kelvin.toFixed(2)} K</p>
    `;
});
