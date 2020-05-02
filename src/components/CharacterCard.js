import React from "react";
import { Link } from 'react-router-dom';
import { Card, Icon, Image } from 'semantic-ui-react';

const CharacterCard = (props) => {

  return (
    <Card>
      <Image src={`${props.src}`} wrapped ui={false}/>
      <Card.Content>
        <Card.Header content={`${props.name}`} />
        <Card.Meta content={`${props.species}`} />
        <Card.Meta content={`${props.status}`} />
        <Card.Description content={`${props.location}`} />
        <Card.Description content={`${props.origin}`} />
      </Card.Content>
      <Card.Content extra>
        <Link to="/">
          <Icon name='user' />
          Episodes
        </Link>
      </Card.Content>
    </Card>
  )
}

export default CharacterCard

// { src, name, species, status, location, origin }
