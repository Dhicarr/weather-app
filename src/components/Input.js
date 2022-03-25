import React, {useState} from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from "axios";
const Input = ({set,setCity1,setCountry1}) => {
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");

    //Calls openweather API and gets weather data upon form submit
    const submitHandler = (e) => {
        e.preventDefault();
        axios({
            method: "GET",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=7cd63382664d9029b0f4013e5f6057d3`,
        })
        .then((response) => {
            console.log(response.data);
            setCity1(city);
            setCountry1(country);
            set(response.data.main.temp - 273.15,
                response.data.main.feels_like - 273.15,
                response.data.main.humidity,
                response.data.weather[0].main,
                response.data.weather[0].description,
                response.data.weather[0].icon
            );
        })
        .catch((error) => {
            console.log(error);
        });
    }
    return (
        <div className='Input'>
            <form onSubmit={submitHandler}>
                <Form.Group  role="form" >
                    <Form.Control type="text" className='Form' value={city} onChange={e =>
                        setCity(e.target.value)} placeholder="City (e.g. Toronto)" required/>
                </Form.Group>
                <Form.Group  role="form" >
                    <Form.Control type="text" className='Form' value={country} onChange={e =>
                        setCountry(e.target.value)} placeholder="Country (e.g. Canada)" required/>
                </Form.Group>
                <Button  variant="dark" className='Button' type="submit">Search</Button>
            </form>
        </div>
    )
}

export default Input