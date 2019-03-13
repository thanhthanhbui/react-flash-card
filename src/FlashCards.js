import React from "react";
import { Card, } from "semantic-ui-react";
import FlashCard from "./FlashCard";

const FlashCards = ({ cardList, remove, toggle }) => (
  <Card.Group style={{ display: "flex", justifyContent: "space-between"}}>
    {
      cardList.map (flashCard => (
        <Card celled padded>
          <FlashCard key={flashCard.id} {...flashCard} remove={remove} />
        </Card>
      ))
    }
  </Card.Group>
)

export default FlashCards;