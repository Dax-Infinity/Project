import React from 'react';

const Card = ({ data }) => {
    return (
        <div className="card">
            <div className="card-header">
                <h2>{data.name}</h2>
            </div>
            <div className="card-body">
                <span>Tempretuare</span><li>{data.main.temp} °C</li><br />
                <span>Coordinates</span><li>{data.coord.lon}° N {data.coord.lat}° E</li><br />
                <span>Sunrise</span><li>{data.sys.sunrise}</li><br />
                <span>Sunset</span><li>{data.sys.sunset}</li><br />
                <span>Weather type</span><li>{data.weather.map((weather) => weather.description)}</li><br />
            </div>
        </div>
    );
};

export default Card;