import React from 'react';
import { Tab } from 'semantic-ui-react';
import { NavLink } from "react-router-dom";


const panes = [
  { menuItem: 'Home Page',
    render: () => {
      <Tab.Pane>Tab 1 Content</Tab.Pane>
    }
  },
  { menuItem: 'Characters',
    render: () => {
      <Tab.Pane>Tab 2 Content</Tab.Pane>
    }
  },
  { menuItem: 'Locations',
    render: () => {
      <Tab.Pane>Tab 3 Content</Tab.Pane>
    }
  },
  { menuItem: 'Episodes',
    render: () => {
      <Tab.Pane>Tab 3 Content</Tab.Pane>
    }
  },
]

const TabExampleBasic = () => <Tab panes={panes} />

export default TabExampleBasic
