import React, {useEffect, useState} from 'react';
import { Display_info } from './Display_info';

const Weather_Info = (props) => {
  const [display,setDisplay]=useState(false);
  const [marginValue,setmarginValue]=useState("15vw");

  useEffect(() => {
    //Upon getting weather data, shows Display_info component and shifts the margin value
    if(props.temp) {
      setDisplay(true);
      setmarginValue("5vw");
    }
  }, [props.temp]);
  return (
    //Displays either title or Display_info component
    <div className='Weather_Info' style={{'marginTop': marginValue}}>
      { display ?  <Display_info props={props}/> : <h1 className='display-1'>Weather App</h1>}
    </div>
  )
}

export default Weather_Info;
