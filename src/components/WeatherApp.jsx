import { useState, useEffect } from 'react'
import sunny from '../assets/images/sunny.png'
import cloudy from '../assets/images/cloudy.png'
import rainy from '../assets/images/rainy.png'
import snowy from '../assets/images/snowy.png'

export default function WeatherApp() {
    const [data, setData] = useState({});
    const [location, setLocation] = useState('');
    const api_key = `${import.meta.env.VITE_WEATHER_API_KEY}`;

    useEffect(() => {
    const fetchDefaultWeather = async () => {
        const defaultLocation = 'Los Angeles';
        const url = `${import.meta.env.VITE_WEATHER_API_URL}?q=${defaultLocation}&units=metric&appid=${api_key}`;
        const res = await fetch(url);
        const defaultData = await res.json();
        console.log(defaultData);
        setData(defaultData);
    }

    fetchDefaultWeather();
}, [])

    const handleInputChange = (e) => {
        setLocation(e.target.value);
    }

    const search = async () => {
        if (location.trim() !== '') {
            const url = `${import.meta.env.VITE_WEATHER_API_URL}?q=${location}&units=metric&appid=${api_key}`;
            const res = await fetch(url);
            const searchData = await res.json();
            console.log(searchData);
            setData(searchData);
            setLocation('');
        }
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            search();
        }
    }

    const weatherImages = {
        Clear: sunny,
        Clouds: cloudy,
        Rain: rainy,
        Snow: snowy,
        Haze: cloudy,
        Mist: cloudy,
    }

    const weatherImage = data.weather ? weatherImages[data.weather[0].main] : null;

    const backgroundImages = {
        Clear: 'linear-gradient(to right, #f3b07c, #fcd283)',
        Clouds: 'linear-gradient(to right, #57d6d4, #71eeec)',
        Rain: 'linear-gradient(to right, #5bc8fb, #80eaff)',
        Snow: 'linear-gradient(to right, #aff2ff, #fff)',
        Haze: 'linear-gradient(to right, #57d6d4, #71eeec)',
        Mist: 'linear-gradient(to right, #57d6d4, #71eeec)',
    }

    const backgroundImage = data.weather ? backgroundImages[data.weather[0].main] : null;

    return (
        <div className="container" style={{backgroundImage: backgroundImage}}>
            <div className="weather-app" style={{backgroundImage: backgroundImage ? backgroundImage.replace("to right", "to top") : null}}>
                <div className="search">
                    <div className="search-top">
                        <i className="fa-solid fa-location-dot"></i>
                        <div className="location">
                            {data.name}
                        </div>
                    </div>
                    <div className="search-bar">
                        <input type="text" placeholder="Search location..." value={location} onChange={handleInputChange} onKeyDown={handleKeyDown} />
                        <i className="fa-solid fa-magnifying-glass" onClick={search}></i>
                    </div>
                </div>
                <div className="weather">
                    <img src={weatherImage} alt="sunny" />
                    <div className="weather-type">{data.weather ? data.weather[0].main : null}</div>
                    <div className="temp">{data.main ? `${Math.floor(data.main.temp)}º` : null}</div>
                </div>
                <div className="weather-date">
                    <p>Fri, May 20</p>
                </div>
                <div className="weather-data">
                    <div className="humidity">
                        <div className="data-name">Humidity</div>
                        <i className='fa-solid fa-droplet'></i>
                        <div className="data">{data.main ? (data.main.humidity) : null}%</div>
                    </div>
                    <div className="wind">
                        <div className="data-name">wind</div>
                        <i className='fa-solid fa-droplet'></i>
                        <div className="data">{data.wind ? data.wind.speed : null} km/h</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
