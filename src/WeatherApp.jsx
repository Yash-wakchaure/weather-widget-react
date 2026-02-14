import { useState } from 'react'
import InfoBox from './infoBox'
import SearchBox from './SearchBox'

export default function WeatherApp(){
    const [weatherInfo, setWeatherInfo] = useState({
        city: "wonderland",
        Weather: "haze",
        feelLikes: 16.56,
        humidity: 67,
        temp: 17.05,
        tempMax: 17.05,
        tempMin: 17.05,
    });

    let updateInfo = (result) =>{
        setWeatherInfo(result);
    }

    return (
        <div style={{textAlign:"center"}}>
            <h1>Weather app by Delta</h1>
             <SearchBox updateInfo= {updateInfo}/>
             <InfoBox info={weatherInfo}/>
        </div>
    )
}