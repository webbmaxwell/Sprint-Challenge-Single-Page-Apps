import React from 'react';
// import { Tab } from 'semantic-ui-react';
import { NavLink } from "react-router-dom";

import HomePage from './HomePage.js';
import CharacterList from './CharacterList.js';
import LocationsList from './LocationsList.js';
import EpisodeList from './EpisodeList.js';

function TabNav() {
  return(
    <nav>
      <NavLink>Home Page</NavLink>
      <NavLink>Characters</NavLink>
      <NavLink>Locations</NavLink>
      <NavLink>Episodes</NavLink>
    </nav>
  )
}

export default TabNav;

// const panes = [
//   { menuItem: 'Home Page',
//     render: () => {
//       return (
//         <Tab.Pane>{<HomePage />}</Tab.Pane>
//       )}
//   },
//   { menuItem: 'Characters',
//     render: () => {
//       return (
//         <Tab.Pane>{<CharacterList />}</Tab.Pane>
//       )}
//   },
//   { menuItem: 'Locations',
//     render: () => {
//       return (
//         <Tab.Pane>{<LocationsList />}</Tab.Pane>
//       )}
//   },
//   { menuItem: 'Episodes',
//     render: () => {
//       return (
//         <Tab.Pane>{<EpisodeList />}</Tab.Pane>
//       )}
//   },
// ]

// const TabExampleBasic = () => <Tab panes={panes} />

// export default TabExampleBasic
