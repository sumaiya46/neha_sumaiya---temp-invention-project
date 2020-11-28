while (true) {
    console.log("Room temperature: " + input.temperature(TemperatureUnit.Fahrenheit) + "°F" + " - " + input.temperature(TemperatureUnit.Celsius) + "°C")
    if (input.temperature(TemperatureUnit.Fahrenheit) > 70) {
        light.setAll(light.rgb(255, 0, 0))
    } else if (input.temperature(TemperatureUnit.Fahrenheit) < 50) {
        light.setAll(light.rgb(0, 255, 255))
    } else {
        light.setAll(light.rgb(255, 255, 0))
    }
    
}
