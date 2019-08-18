import React, { useEffect, useState } from "react";
import axios from 'axios';

import LocationCard from './LocationCard.js';

export default function LocationsList() {

  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/location')
      .then(res => {
        console.log(res)
        setPlanets(res.data.results)
      })
      .catch(error => {
        console.log('Error in retrieving data: ', error)
      })
  }, [])

  return (
    <section className="location-list grid-view">
      {planets.map(plan => (
        <LocationCard key={plan.id} name={plan.name} type={plan.type} dimension={plan.dimension} residents={plan.residents.length}/>
      ))}
    </section>
  )
}
