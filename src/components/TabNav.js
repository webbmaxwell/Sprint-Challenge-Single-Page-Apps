import React from 'react';
import { Icon } from 'semantic-ui-react';
// import { Tab } from 'semantic-ui-react';
import { NavLink } from "react-router-dom";
import styled from 'styled-components';

import HomePage from './HomePage.js';
import CharacterList from './CharacterList.js';
import LocationsList from './LocationsList.js';
import EpisodeList from './EpisodeList.js';

function TabNav() {

  const Nav = styled.nav`
    color: black;
    padding-left: .3rem;
    font-size: 1.25rem;
  `

  return(
    <nav className="nav-links">
      <NavLink to="/" className="nav-links">
        <Icon name='home' color='black' />
        <Nav>Home Page</Nav>
      </NavLink>
      <NavLink to="/characters" className="nav-links">
        <Icon name='user' color='black' />
        <Nav>Characters</Nav>
      </NavLink>
      <NavLink to="/locations" className="nav-links">
        <Icon name='map' color='black' />
        <Nav>Locations</Nav>
      </NavLink>
      <NavLink to="/episodes" className="nav-links">
        <Icon name='video' color='black' />
        <Nav>Episodes</Nav>
      </NavLink>
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
