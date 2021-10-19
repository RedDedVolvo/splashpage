import { React, useState, useEffect } from "react";
import "./weather.style.css";

const Weather = () => {
  const [temperature, setTemperature] = useState(null);
  const [minTemp, setMinTemp] = useState(null);
  const [maxTemp, setMaxTemp] = useState(null);
  const [condition, setCondition] = useState(null);
  const [conditionDesc, setConditionDesc] = useState(null);
  const [conditionIcon, setConditionIcon] = useState(null);

  useEffect(() => {
    async function getWeather() {
      let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=meridian,US-ID&appid=e7920d347c4e8ded2b785cbc0ccf8e8e`;

      const response = await fetch(weatherUrl);
      const data = await response.json();
      let condition = data?.weather[0].main;
      let conditionDesc = data?.weather[0].description;
      let conditionIcon = data?.weather[0].icon;
      let kelvinTemp = data?.main?.temp;
      const celciusTemp = kelvinTemp - 273.15;
      const farenheitTemp = Math.round(celciusTemp * (9 / 5) + 32);
      let kelvinMinTemp = data?.main?.temp_min;
      const celciusMinTemp = kelvinMinTemp - 273.15;
      const farenheitMinTemp = Math.round(celciusMinTemp * (9 / 5) + 32);
      let kelvinMaxTemp = data?.main?.temp_max;
      const celciusMaxTemp = kelvinMaxTemp - 273.15;
      const farenheitMaxTemp = Math.round(celciusMaxTemp * (9 / 5) + 32);

      setTemperature(farenheitTemp);
      setMinTemp(farenheitMinTemp);
      setMaxTemp(farenheitMaxTemp);
      setCondition(condition);
      setConditionDesc(conditionDesc);
      setConditionIcon(conditionIcon);
    }

    getWeather();
  }, []);

  // useEffect(() => {
  //   console.log(condition);
  // }, [condition]);

  // let iconPath = "../../style/images/mycollection/png/";

  return (
    <div className="weather__container">
      <section className="temperatures">
        <span id="main--temp">
          {temperature}&#176;<span style={{ fontWeight: "lighter" }}>F</span>
        </span>
        <span className="other--temps">Low: {minTemp}</span>
        <span className="other--temps">High: {maxTemp}</span>
      </section>
      <section className="condition__container">
        <img
          id="icon"
          src={`http://openweathermap.org/img/w/${conditionIcon}.png`}
          alt={`${condition} Icon`}
        />
        <span style={{ paddingTop: "35%" }}>{condition}</span>
        <span>{conditionDesc}</span>
      </section>
    </div>
  );
};

export default Weather;
