const canvas = document.getElementById('mapCanvas');
const ctx = canvas.getContext('2d');
const mapImage = new Image();
mapImage.src = 'provincias_spain.png';
const coordinatesDiv = document.getElementById('coordinates');

mapImage.onload = function() {
    // Calculate the center coordinates of the canvas
  const canvasCenterX = canvas.width / 2;
  const canvasCenterY = canvas.height / 2;

  // Calculate the top-left corner coordinates of the image on the canvas
  // const imageX = canvasCenterX - (mapImage.width / 2);
  // const imageY = canvasCenterY - (mapImage.height / 2);
  const imageX = 0;
  const imageY = 0;

  // Draw the image on the canvas at the calculated position
  ctx.drawImage(mapImage, imageX, imageY);
  
    //ctx.drawImage(mapImage, 0, 0);
  loadProvinces();
}

const width = 30; // Width of the image
const height = 30; // Height of the image

function drawWeatherEmoji(x, y, weatherCondition,xtiempo,ytiempo,temperature) {
    // Draw the appropriate emoji/icon based on weatherCondition

    const image = new Image();
    const adjustedX = x -(width / 2); //para que ajuste un poco a las coordenadas de imagen puesta en canvas
    const adjustedY = y - (height / 2);
    // console.log({x:adjustedX,y:adjustedY})
    image.onload = function() {
      // ctx.drawImage(image, x, y, width, height);
      ctx.drawImage(image, adjustedX, adjustedY, width, height);
    };

    image.src = './sprites/' + weatherCondition;

   ctx.font = '15px Arial';
   ctx.fillStyle = "#ff00ff";
   //para el tiempo que hace
   ctx.fillText(temperature, x+xtiempo, y+ytiempo); 
    // ctx.drawImage(image, x, y, width, height);
   // ctx.drawImage(image, x, y);
}


async function loadProvinces()
{
    for (const province in provinceCoordinates) {
        const coordinates = provinceCoordinates[province];
        const x = coordinates.x;
        const y = coordinates.y;
        // console.log( provinceCoordinates[province]);
        // drawWeatherEmoji(x, y,climates['nubes']);
        let imageName = 'noimage';
        let temperature = '';
        try {
          const data = await fetchWeatherData(province); // Esperar a que se resuelva la función asincrónica y obtener los datos
          temperature = data.main.temp;
          if (data) {
            imageName = whatWeather(data); // Procesar los datos de clima
          }
          } catch (error) {
         console.error("Error fetching weather data:", error);
        }

        let xtiempo = +7;
        let ytiempo = +20;
        if(province === "vizcaya" || province === "gipuzkoa"){
           xtiempo = +5;
           ytiempo = -10;
        }
        drawWeatherEmoji(x, y,climates[imageName],xtiempo,ytiempo,temperature);
      }
}

function whatWeather(weatherData)
{
  if(weatherData.weather[0].main === 'Clear'){
    return temperaturas(weatherData.main.temp);
  }
  if(weatherData.weather[0].main === 'Snow'){
    return (weatherData.weather[0].description !=='snow') ? 'nieve2' : 'Snow' ;
  }
  return weatherData.weather[0].main;
    //heavy snow
    console.log(weatherData)
}

function temperaturas(temperature)
{
  if (temperature < 6) {
    return 'Helado';
  } else if (temperature >= 6 && temperature < 16) {
    return 'Frio';
  } else if (temperature >= 16 && temperature < 26) {
    return 'clear';
  } else if (temperature >= 26 && temperature < 30) {
    return 'sol2';
  } else if (temperature >= 30 && temperature < 34) {
    return 'calor';
  } else if (temperature >= 34 && temperature < 40) {
    return 'calor2';
  } else if (temperature >= 40) {
    return 'calor3';
  }
}
/*
//api ninjas
const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': token,
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

async function fetchWeatherData(city){
  let finalUrl = url+city;
  try {
    const response = await fetch(finalUrl, options);
    const result = await response.text();
    // console.log(result);
  } catch (error) {
    console.error(error);
  }
}
*/
//https://openweathermap.org/current#current_JSON#builtin

const options = {};

async function fetchWeatherData(city){
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},ES&appid=${token}&units=metric`; //interpolation
  // const url = './example.json'; //test
  try {
    const response = await fetch(url);
    // const result = await response.text();
    const result = await response.json();
    // console.log(result);
    return result;
  } catch (error) {
    console.error(error);
    return false;
  }
}
// Add event listener for mousemove on the canvas
canvas.addEventListener('mousemove', handleMouseMove);
var debug =false;
function handleMouseMove(event) {
  if(!debug)
  {return;}
  const rect = canvas.getBoundingClientRect();

  const mouseX = Math.round(event.clientX - rect.left);
  const mouseY = Math.round(event.clientY - rect.top);

  
  // Update the content of the coordinatesDiv with the current coordinates
  coordinatesDiv.textContent = `Mouse coordinates: X=${mouseX}, Y=${mouseY}`;
}

document.getElementById('saveImageBtn').addEventListener('click', function() {
  domtoimage.toPng(document.getElementById('imageContainer'))
    .then(function(dataUrl) {
      // Create a link element to download the image
      var link = document.createElement('a');
      link.href = dataUrl;
      link.download = 'image.png';
      link.click();
    })
    .catch(function(error) {
      console.error('Error capturing image:', error);
    });
});