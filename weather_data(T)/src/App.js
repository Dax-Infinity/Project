import React, { useState, useEffect } from 'react';
import Card from './card';
import './App.css'
const App = () => {
  const [apiData, setApiData] = useState({});

  useEffect(() => {
    fetch('https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=416add49775c9b6a88855bd06ffd5852')
      .then((response) => response.json())
      .then((data) => setApiData(data))
  }, []);
console.log(apiData);
  return (
        <div>
      {apiData.name ? <Card data={apiData} /> : <p>Loading...</p>}
    </div>
  );
};

export default App;
