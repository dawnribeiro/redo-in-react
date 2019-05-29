import React, { Component } from 'react';

class Weather extends Component {
state = { 
weather: 0,
temp: 0,
humidity: 0,
description: weather[0],
name: ''
}


  componentDidMount(){
  fetch('https://api.openweathermap.org/data/2.5/weather?q=' + currentValue + '&appid=b986bcf3141fece7fea26687405f1183')
    .then(resp => {
      return resp.json()
    })
    .then(weather => {
      console.log({
        weather
      })
    }
  }

  render() {
    return (
      <div>
        
      </div>
    )
  }

}
export default Weather;