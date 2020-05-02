import React from "react";
import { Card } from 'semantic-ui-react';

const LocationCard = (props) => {
  return (
    <Card>
      <Card.Content>
        <Card.Header content={`${props.name}`}/>
        <Card.Meta content={`${props.type} - ${props.dimension}`}/>
        <Card.Meta content={`Residents ${props.residents}`} />
      </Card.Content>
    </Card>
  )
}

export default LocationCard;
