import React, { useEffect, useState } from "react";
import axios from 'axios';

import CharacterCard from './CharacterCard.js';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character/')
      .then((res) => {
        console.log(res)
        setCharacters(res.data.results)
      })
      .catch((error) => {
        console.log('Error: ', error)
      })
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  return (
    <section className="character-list grid-view">
    {characters.map(char => (
      <CharacterCard key={char.id} img={char.image} name={char.name} species={char.species} status={char.status} location={char.location} origin={char.origin}/>
    ))}
    </section>
  );
}
//
// {characters.map(char => {
//   <CharacterCard />
// })}
