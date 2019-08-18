import React, { useEffect, useState } from "react";
import axios from 'axios';

import EpisodeCard from './LocationCard.js';

export default function EpisodeList() {

  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/episode')
      .then(res => {
        console.log(res)
        setEpisodes(res.data.results)
      })
      .catch(error => {
        console.log('Error in retrieving data: ', error)
      })
  }, [])

  return (
    <section className="episode-list grid-view">
      {episodes.map(epi => (
        <EpisodeCard key={epi.id} name={epi.name} air_date={epi.date}/>
      ))}
    </section>
  )
}
