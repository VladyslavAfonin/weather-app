import { Component } from 'react';
import Info from "./components/info/info";
import Form from "./components/form/form";
import Weather from "./components/weather/weather";
import './App.css';

const API_KEY = "69e9d7f31a7fbf866ab834f2269a8ae3";

class App extends Component {
  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    pressure: undefined,
    sunset: undefined,
    error: undefined
  }

  getWeather = async (evt) => {
    evt.preventDefault();
    const city = evt.target.elements.city.value;

    if(city) {
      const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
      const data = await api_url.json();

      const sunset = data.sys.sunset;
      const date = new Date();
      date.setTime(sunset);
      const sunset_time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

      this.setState({
        temp: data.main.temp,
        city: data.name,
        country: data.sys.country,
        pressure: data.main.pressure,
        sunset: sunset_time,
        error: undefined
      })
    } else {
      this.setState({
        temp: undefined,
        city: undefined,
        country: undefined,
        pressure: undefined,
        sunset: undefined,
        error: "Please, enter city's name"
      })
    }
  }

  render(){
    return (
      <div className='wrapper'>
        <div className="main">
          <div className="container">
            <div className="row">
              <div className='col-sm-5 info'>
                <Info />
              </div>
              <div className='col-sm-7 form'>
              <Form weatherData={this.getWeather} />
              <Weather 
                temp={this.state.temp}
                city={this.state.city}
                country={this.state.country}
                pressure={this.state.pressure}
                sunset={this.state.sunset}
                error={this.state.error} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;