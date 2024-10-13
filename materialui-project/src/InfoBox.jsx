import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
// import { waitForDebugger } from 'inspector';

export default function InfoBox({ info }) {
  // Image URLs for different weather conditions based on temp and humidity
  const images = {
    hot: "https://images.unsplash.com/photo-1687462909401-d4fb622a1e89?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdCUyMHN1bW1lcnxlbnwwfHwwfHx8MA%3D%3D",
    cold: "https://media.istockphoto.com/id/629628262/photo/pedestrians-and-traffic-on-a-winter-day.webp?a=1&b=1&s=612x612&w=0&k=20&c=iwwfqcrOABUEZx3-LjBj_HeHGZ30lLUGhAS0zxYhKn4=",
    humid: "https://media.istockphoto.com/id/1089026982/photo/image-of-winter-fog-scene-in-delhi-with-india-gate-as-a-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=MQ6ONlYlQ75EzP0d9wX-VTcR_LtAjYXALooBxaCCNcs=",
    rainy: "https://images.unsplash.com/photo-1691265688799-4457dec90cd6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmFpbnklMjBzZWFzb258ZW58MHx8MHx8fDA%3D",
    windy: "https://images.unsplash.com/photo-1470176519524-3c2f481c8c9c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2luZHl8ZW58MHx8MHx8fDA%3D",
  };


  return (
    <div className='infoBox'>
      <h1>Weather Info {info.weather}</h1>
      <div className='cardContainer'>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={info.humidity > 80 ? images.rainy : info.temp > 15 ? images.hot : images.cold}  // Image based on temperature and humidity
            title={info.weather}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
              <p>Temperature = {info.temp}&deg;C</p>
              <p>Humidity = {info.humidity}%</p>
              <p>Max Temp = {info.temp_max}&deg;C</p>
              <p>Min Temp = {info.temp_min}&deg;C</p>
              <p>The weather is described as <i>{info.description}</i> and feels like {info.feelslike}&deg;C</p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
