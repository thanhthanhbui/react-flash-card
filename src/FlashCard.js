import React from "react";
import { Card, Button, Icon, Segment } from "semantic-ui-react";
import ToggleDes from "./ToggleDes";

const FlashCard = ({ id, title, description, remove, toggle }) => (
  <Card.Content>
    <Card.Header textAlign="center">{title}</Card.Header>
    <hr />
    <ToggleDes />
    <br />
    <div className="ui two buttons">
      <Button basic color="blue">Edit</Button>
      <Button basic color="red" onClick={() => remove(id)}>Delete</Button>
    </div>
  </Card.Content>
)

export default FlashCard;