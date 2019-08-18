import React from "react";
import { Card, Icon, Image } from 'semantic-ut-react';

import CharacterList from './CharacterList.js';

export default function CharacterCard() {
  return (
    <Card>
      <Image src={`${props.src}`}/>
      <Card.Content>
        <Card.Header></Card.Header>
        <Card.Meta></Card.Meta>
        <Card.Description></Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
        <Icon name='user' />
        Episodes
        </a>
      </Card.Content>
    </Card>
  )
}
