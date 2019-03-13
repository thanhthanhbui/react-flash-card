import React, { Component } from 'react';
import {Container, Header, } from "semantic-ui-react";
import FlashCards from "./FlashCards";
import CardForm from "./CardForm";

class App extends Component {
  state = {
    flashCards: [
      { id:1, title: "Card 1", description: "Def. 1", },
      { id:2, title: "Card 2", description: "Def. 2", },
      { id:3, title: "Card 3", description: "Def. 3", },
    ],
  }

  getId = () => Math.floor((1 + Math.random()) * 10000)

  addCard = (cardData) => {
    let flashCard = { id: this.getId(), ...cardData, }
    this.setState({ flashCards: [flashCard, ...this.state.flashCards], })
  }

  removeCard = (id) => {
    const flashCards = this.state.flashCards.filter( flashCard => {
      if (flashCard.id !== id)
        return flashCard
    })
    this.setState({ flashCards,})
  }
  render() {
    return (
      <Container style={{ paddingTop: "25px" }}>
        <Header as="h1" textAlign="center">React Flash Cards</Header>
        <br />
        <CardForm addCard={this.addCard} />
        <br />
        <FlashCards cardList={this.state.flashCards} remove={this.removeCard} />
      </Container>
    );
  }
}

export default App;
