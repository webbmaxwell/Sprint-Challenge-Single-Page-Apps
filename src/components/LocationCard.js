import React from "react";
import { Card } from 'semantic-ui-react';

const LocationCard = ({ name, type, dimension, residents }) => {
  return (
    <Card>
      <Card.Content>
        <Card.Header content={`${name}`}/>
        <Card.Meta content={`${type} - ${dimension}`}/>
        <Card.Meta content={`Residents ${residents}`} />
      </Card.Content>
    </Card>
  )
}

export default LocationCard;
