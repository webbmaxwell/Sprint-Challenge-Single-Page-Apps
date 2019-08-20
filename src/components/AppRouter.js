import React from 'react';
import { Route } from 'react-router-dom';

import HomePage from './HomePage.js';
import CharacterList from './CharacterList.js';
import LocationsList from './LocationsList.js';
import EpisodeList from './EpisodeList.js';


function AppRouter() {
  return (
    <div className="">
    <Route exact path="/" render={props => <HomePage />} />
    <Route path="/characters" component={props => <CharacterList {...props}/>} />
    <Route path="/locations" component={props => <LocationsList {...props} />} />
    <Route path="/episodes" component={props => <EpisodeList {...props} />} />
    </div>
  )
}

export default AppRouter;
