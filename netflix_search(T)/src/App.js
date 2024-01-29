import React, { useEffect, useState } from 'react';
import './App.css';
import axios from "axios"
import logo from './images/download.jpeg.jpg'
import { Grid } from '@mui/material';

const MovieCard = () => {
  const [api, setApi] = useState([]);
  const [checkEle, setCheckEle] = useState("");
  const apiData =   async ()=>{
    const response = await axios.get("https://jsonplaceholder.typicode.com/users")
    setApi(response.data);
    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then((response) => response.json())
    //   .then((json) => {
    //     setApi(json);
    //   });
  };
  // apiData();
  // async function apiData(){
  //   const data = await (await axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
  //     setApi(response.data);
  //   }))
  // }

  React.useEffect(() => {
    apiData();
  }, []);
  return (
    <>
      <nav className="navbar">
        <div className="navbar__logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="navbar__search">
          <input type="text" placeholder="Search..." onChange={(e) => setCheckEle(e.target.value)} />
          <button type="submit">Search</button>
        </div>
      </nav>
      <Grid lg={12} container spacing={2} textAlign={"center"}>
        {api.map((user) => (
          <>
            {((user.name).toUpperCase()).includes((checkEle).toUpperCase()) ? (
              <Grid item xs={3}>
                <div className="box">
                  <div className="shape">
                    <div className="image"></div>
                  </div>
                  <h3>{user.name}</h3>
                  <h3 className="title">{user.email}</h3>
                  <p>{user.company.catchPhrase}</p>
                  <p>{user.company.bs}</p>
                </div>
              </Grid>) : null}
          </>
        )
        )}
      </Grid>
    </>
  );
};

export default MovieCard;
