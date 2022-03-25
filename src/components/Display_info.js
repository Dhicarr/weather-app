import React from 'react'
import { Row,Col } from 'react-bootstrap'


export const Display_info = (props) => {
  return (
    //Displays all the data gathered from openweather API
    <div className='display_info'>
        <div className='City'>
          <h3 className='display-5'>{props.props.city}, {props.props.country}</h3>
        </div>
        <div className='Info'>
          <h3 className='display-6'>Temperature: {Math.round(props.props.temp)}°C</h3>
          <h3 className='display-6'>Feels Like: {Math.round(props.props.feels)}°C</h3>
          <h3 className='display-6'>Humidity: {Math.round(props.props.humidity)}%</h3>
          <Row>
            <Col md="auto">
              <h3 className='display-6'>Weather: {props.props.weather}</h3>
            </Col>
            <Col md="auto">
              <img src={`https://openweathermap.org/img/w/${props.props.icon}.png`}/>
            </Col>
          </Row>
        </div>
    </div>
  )
}
