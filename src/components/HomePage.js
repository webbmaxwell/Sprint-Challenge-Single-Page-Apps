import React, { useState, useEffect } from 'react';
import axios from 'axios';

function HomePage() {

  const [rick, setRick] = useState("");

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character')
    .then(res => {
      setRick(res.data.results[0].image)
    })
    .catch(error => {
      console.log('Error in retrieving data: ', error)
    })
  }, [])

  return (
    <div className="home-page">
      <h1>Welcome to the #1 Fansite! Get Schwifty!</h1>
      <img className="home-img" src={rick} alt="Rick"/>
    </div>
  )
}

export default HomePage;
