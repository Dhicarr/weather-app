import React, {useState,useEffect} from "react";
import Weather_Info from "./components/Weather_info";
import Input from "./components/Input";
import bg1 from "./backgrounds/Pillows.jpg";
import bg2 from "./backgrounds/Clouds.jpg";
import bg3 from "./backgrounds/Clear.jpg";
import bg4 from "./backgrounds/Drizzle.jpg";
import bg5 from "./backgrounds/Rain.jpg";
import bg6 from "./backgrounds/Snow.jpg";
import bg7 from "./backgrounds/Thunderstorm.jpg";
import bg8 from "./backgrounds/Atmosphere.jpg";
function App() {
  //Output
  const [temp, setTemp] = useState("");
  const [feels, setFeels] = useState("");
  const [humidity, setHumidity] = useState("");
  const [weather, setWeather] = useState("Default");
  const [description, setDescription] = useState("");
  const [icon_id, setIcon]=useState("");
  //Input
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  //Sets every output state at once
  const set = (one,two,three,four,five,six) => {
    setTemp(one);
    setFeels(two);
    setHumidity(three);
    setWeather(four);
    setDescription(five);
    setIcon(six);
  }
  //Sets input states
  const setCity1 = (one) => {
    setCity(one);
  }
  const setCountry1 = (one) => {
    setCountry(one);
  }
  
  //Dynamically changes background image 
  useEffect(() => {
    if (weather==="Default")
      document.body.style.backgroundImage = `url('${bg1}')`;
    else if (weather==="Clouds")
      document.body.style.backgroundImage = `url('${bg2}')`;
    else if (weather==="Clear")
      document.body.style.backgroundImage = `url('${bg3}')`;
    else if (weather==="Drizzle")
      document.body.style.backgroundImage = `url('${bg4}')`;
    else if (weather==="Rain")
      document.body.style.backgroundImage = `url('${bg5}')`;
    else if (weather==="Snow")
      document.body.style.backgroundImage = `url('${bg6}')`;
    else if (weather==="Thunderstorm")
      document.body.style.backgroundImage = `url('${bg7}')`;
    else if (weather==="Atmosphere")
      document.body.style.backgroundImage = `url('${bg8}')`;
  },[weather]);

  return (
    <div className="App">
      <Weather_Info
        city={city}
        country={country} 
        temp={temp}
        feels={feels}
        humidity={humidity}
        weather={weather}
        description={description}
        icon={icon_id}
      />
      <Input set={set} setCity1={setCity1} setCountry1={setCountry1}/>
    </div>
  );
}
export default App;
