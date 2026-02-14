import TextField from '@mui/material/TextField';
import "./SearchBox.css"

import Button from '@mui/material/Button';
import { useState } from 'react';

export default function SearchBox( {updateInfo}) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);

    const API_URL = import.meta.env.VITE_API_URL;
    const API_KEY = import.meta.env.VITE_API_KEY;

    let getWhetherInfo = async () => {
        try{
            let responce = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponce = await responce.json();
        // console.log(jsonResponce);
        let result = {
            city:city,
            temp:jsonResponce.main.temp,
            tempMax:jsonResponce.main.temp_max,
            tempMin:jsonResponce.main.temp_min,
            humidity:jsonResponce.main.humidity,
            feelLikes:jsonResponce.main.feels_like,
            Weather:jsonResponce.weather[0].description,
        }
        console.log(result);
        return result;
        } catch(err) {
            throw err;
        }
        
    }

    let handleChange = (evt) => {
        setCity(evt.target.value);
    }

    let handleSubmit = async (evt) => {
        try{
                evt.preventDefault();
                console.log(city);
                setCity("");
                let newInfo = await getWhetherInfo();
                updateInfo(newInfo);
        }catch (err) {
            setError(true);
        }
    }

    return (
        <div className='SearchBox'>
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange} />
                <br></br><br></br>
                <Button variant="contained" type='submit' >
                    Search               
                 </Button>
            { error && <p style={{color:"red"}}>No such Place exist!</p>}
            </form>
        </div>
    )
}