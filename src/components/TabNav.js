import React from 'react';
import { Tab } from 'semantic-ui-react';
// import { NavLink } from "react-router-dom";

import CharacterList from './CharacterList.js';

const panes = [
  { menuItem: 'Home Page',
    render: () => {
      return (
        <Tab.Pane>Tab 1 Content</Tab.Pane>
      )}
  },
  { menuItem: 'Characters',
    render: () => {
      return (
        <Tab.Pane>{<CharacterList />}</Tab.Pane>
      )}
  },
  { menuItem: 'Locations',
    render: () => {
      return (
        <Tab.Pane>Tab 3 Content</Tab.Pane>
      )}
  },
  { menuItem: 'Episodes',
    render: () => {
      return (
        <Tab.Pane>Tab 4 Content</Tab.Pane>
      )}
  },
]

const TabExampleBasic = () => <Tab panes={panes} />

export default TabExampleBasic
