
const controlButtons = document.querySelector('.controls');
const temperatureBtn = document.createElement('button');
temperatureBtn.innerText = "Temperature";
controlButtons.appendChild(temperatureBtn);
const conditionsBtn = document.createElement('button');
conditionsBtn.innerText = "Conditions";
controlButtons.appendChild(conditionsBtn);
const displayArea = document.getElementById("displayArea");
const errorArea = document.getElementById("errorArea");


//GetTemp
function getTemperature() {
    const temperatureURL = "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true";
  displayArea.innerHTML = "Loading temperature...";

  fetch(temperatureURL)
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
    }
      return response.json();
    })
    .then(data => {
      const temp = data.current_weather.temperature;
      displayArea.innerHTML = `
        <h2>Current Temperature</h2>
        <p>${temp}°C</p>
      `;
    })
    .catch(error => {
      errorArea.innerText = `Error fetching temperature: ${error.message}`;
    });
}

// getConditions

function getConditions() {
    
  const conditionURL = "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true";

  displayArea.innerHTML = "Loading conditions...";

  fetch(conditionURL)
    .then(response => {
      if (!response.ok) throw new Error("Network response was not ok");
      return response.json();
    })
    .then(data => {
      const code = data.current_weather.weathercode;
      const conditionText = mapWeatherCode(code);

      // Show both code and mapped description
      displayArea.innerHTML = `
        <h2>Weather Conditions</h2>
        <p>Weather Code: ${code}</p>
        <p>${conditionText}</p>
      `;
    })
    .catch(error => {
      errorArea.innerText = `Error fetching conditions: ${error.message}`;
    });
}

// condition codes and interpretations
function mapWeatherCode(code) {
  const weatherMap = {
    0: 'Clear sky',
    1: 'Mainly clear',
    2: 'Partly cloudy',
    3: 'Overcast',
    45: 'Fog',
    48: 'Depositing rime fog',
    51: 'Drizzle: Light',
    53: 'Drizzle: Moderate',
    55: 'Drizzle: Dense',
    56: 'Freezing Drizzle: Light',
    57: 'Freezing Drizzle: Dense',
    61: 'Rain: Slight',
    63: 'Rain: Moderate',
    65: 'Rain: Heavy',
    66: 'Freezing Rain: Light',
    67: 'Freezing Rain: Heavy',
    71: 'Snow fall: Slight',
    73: 'Snow fall: Moderate',
    75: 'Snow fall: Heavy',
    80: 'Rain showers: Slight',
    81: 'Rain showers: Moderate',
    82: 'Rain showers: Violent'
  };
  return weatherMap[code] || 'Unknown weather';
}


//Button events
temperatureBtn.addEventListener('click', getTemperature);
conditionsBtn.addEventListener('click', getConditions);