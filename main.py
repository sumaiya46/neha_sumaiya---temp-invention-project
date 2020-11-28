while True:
    print("Room temperature: " + input.temperature(TemperatureUnit.FAHRENHEIT) + "°F" + " - " + input.temperature(TemperatureUnit.CELSIUS) + "°C")
    if input.temperature(TemperatureUnit.FAHRENHEIT) > 70:
        light.set_all(light.rgb(255,0,0))
    elif input.temperature(TemperatureUnit.FAHRENHEIT) <50:
        light.set_all(light.rgb(0,255,255))
    else:
        light.set_all(light.rgb(255,255,0))
