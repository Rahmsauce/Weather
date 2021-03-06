// main script; coordination of the application



var hourly_temperature_weather_chart;
var hourly_precipitation_chart;

window.onload = async function() {
    configuration.load();

    ui.setup();

    if (configuration.data.language != "en") {
        translator.translate_page(configuration.data.language);
    }

    var weather_info = await weather.fetch_weather_info(configuration.data.last_location);
    weather.display_weather_info(weather_info);
};
