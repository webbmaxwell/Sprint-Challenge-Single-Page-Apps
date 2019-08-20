import React from 'react';
import { Route } from 'react-router-dom';

import HomePage from './HomePage.js';
import CharacterList from './CharacterList.js';
import LocationsList from './LocationsList.js';
import EpisodeList from './EpisodeList.js';


function AppRouter() {
  return (
    <div className="">
    <Route exact path="/" component={HomePage} />
    <Route path="/character" component={CharacterList} />
    <Route path="/location" component={LocationsList} />
    <Route path="/episode" component={EpisodeList} />
    </div>
  )
}

export default AppRouter;
