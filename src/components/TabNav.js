import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

// TODO: Add missing tabs below
export default function TabNav() {
  return (
    <div className="nav">
      <h3>Home Page</h3>
      <h3>Characters</h3>
      <h3>Locations</h3>
      <h3>Episodes</h3>
    </div>
  )
};
