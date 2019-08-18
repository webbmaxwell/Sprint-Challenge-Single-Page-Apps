import React from "react";
import { Card } from 'semantic-ui-react';

const EpisodeCard = (props) => {
  return (
    <Card>
      <Card.Content>
        <Card.Header content={`${props.name}`}/>
        <Card.Meta content={`${props.episode}`}
        <Card.Meta content={`${props.date}`} />
      </Card.Content>
    </Card>
  )
}

export default EpisodeCard;
