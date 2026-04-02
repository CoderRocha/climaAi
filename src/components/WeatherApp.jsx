import { useState } from 'react'
import sunny from '../assets/images/sunny.png'
import cloudy from '../assets/images/cloudy.png'
import rainy from '../assets/images/rainy.png'
import snowy from '../assets/images/snowy.png'

export default function WeatherApp() {
    const [data, setData] = useState({});
    const api_key = `${import.meta.env.VITE_WEATHER_API_KEY}`;
    
    const search = async () => {
    const url = `${import.meta.env.VITE_WEATHER_API_URL}?q=Los+Angeles&units=Metric&appid=${api_key}`;
    const res = await fetch(url);
    const searchData = await res.json();
    console.log(searchData);
    setData(searchData);
    }
  return (
    <div className="container">
        <div className="weather-app">
            <div className="search">
                <div className="search-top">
                    <i className="fa-solid fa-location-dot"></i>
                    <div className="location">
                        Los Angeles
                    </div>
                </div>
                <div className="search-bar">
                    <input type="text" placeholder="Search location..." />
                    <i className="fa-solid fa-magnifying-glass" onClick={search}></i>
                </div>
            </div>
            <div className="weather">
                <img src={sunny} alt="sunny" />
                <div className="weather-type">Clear</div>
                <div className="temp">28°C</div>
            </div>
            <div className="weather-date">
                <p>Fri, May 20</p>
            </div>
            <div className="weather-data">
                <div className="humidity">
                    <div className="data-name">Humidity</div>
                    <i className='fa-solid fa-droplet'></i>
                    <div className="data">50%</div>
                </div>
                <div className="wind">
                    <div className="data-name">wind</div>
                    <i className='fa-solid fa-droplet'></i>
                    <div className="data">10 km/h</div>
                </div>
            </div>
        </div>
    </div>
  )
}
