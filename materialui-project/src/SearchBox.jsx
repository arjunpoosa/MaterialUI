import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css';
import { useState } from 'react';

export default function SearchBox({updateInfo}){
    let [city, setCity] = useState("");
    let[error,seterror]=useState(false);
    const url = "https://api.openweathermap.org/data/2.5/weather";
    const key = "505e48e578581997bdb87b2278fd002c";
    
    let getWeatherInfo = async () => {
        try{
        const response = await fetch(`${url}?q=${city}&appid=${key}&units=metric`);
        const jsonResponse = await response.json();
        // console.log(jsonResponse);
       const result=
     
       {   city:city,
        weather:jsonResponse.weather[0].main,
        feelslike:jsonResponse.main.feels_like,
        temp:jsonResponse.main.temp,
        temp_max:jsonResponse.main.temp_max,
        temp_min:jsonResponse.main.temp_min,
        humidity: jsonResponse.main.humidity,
        description:jsonResponse.weather[0].description,

       }
       console.log(result);
       return result;
    }
    catch (err){
    throw(err);
    }
    };
    
    let handleChange = (event) => {
        setCity(event.target.value);
    };
    
    let handleSubmit = async (event) => {
       try{
        event.preventDefault();
        console.log(city);
   
        setCity("");  // Clear the city input after submission
        let info= await getWeatherInfo();
        updateInfo(info);
       }
       catch(err){
        seterror(true);
       }
    };
    
    return (
        <div className='SearchBox'>
            <h3>Search for Weather</h3>

            <form onSubmit={handleSubmit}>
                <TextField 
                    id="searchbox" 
                    label="city" 
                    variant="outlined" 
                    required
                    value={city}  // Bind TextField value to city state
                    onChange={handleChange}
                />
                <br /><br />
                
                <Button variant="contained" type='submit'>
                    Search
                </Button>
                {error && <p style={{color:"red"}}> NO SUCH PLACE EXIST</p>}
                {error=false}
            </form>
        </div>
    );
}
