import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AppRouter() {

  const [grid, setGrid] = useState([]);

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/')
    .then(res => {
      
    });
    .catch(res => {
      console.log('Error: ' res)
    })
  });

  return (
    <>
    </>
  )
}

export default AppRouter;
