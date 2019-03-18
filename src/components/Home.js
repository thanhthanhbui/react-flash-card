import React, { Component } from 'react';
import { Header, Card } from "semantic-ui-react";
import CardForm from "./CardForm";
import FlashCard from './FlashCard';

class Home extends Component {
  state = {
    flashCards: [
      { id: 1, title: "Card 1", description: "Definition 1", },
      { id: 2, title: "Card 2", description: "Definition 2", },
      { id: 3, title: "Card 3", description: "Definition 3", },
    ],
  }

  getId = () => Math.floor((1 + Math.random()) * 10000)

  addCard = (cardData) => {
    let flashCard = { id: this.getId(), ...cardData, }
    this.setState({ flashCards: [flashCard, ...this.state.flashCards], })
  }

  editCard = (cardData) => {
    const flashCards = this.state.flashCards.map( flashCard => {
      if (flashCard.id === cardData.id)
        return cardData
      return flashCard
    })
    this.setState({ flashCards, })
  }

  removeCard = (id) => {
    const flashCards = this.state.flashCards.filter( flashCard => {
      if (flashCard.id !== id)
        return flashCard
    })
    this.setState({ flashCards, })
  }

  renderCards = () => {
    return this.state.flashCards.map( flashCard => (
      <Card celled padded>
        <FlashCard
          key={flashCard.id}
          {...flashCard}
          remove={this.removeCard}
          edit={this.editCard}
        />
      </Card>
    ))
  }

  render() {
    
    return (
      <div style={{ paddingTop: "50px" }}>
        <Header as="h1" textAlign="center">React Flash Cards</Header>
        <br />
        <CardForm addCard={this.addCard} />
        <br />
        <Card.Group style={{ display: "flex", justifyContent: "space-evenly"}}>
          { this.renderCards() }
        </Card.Group>
      </div>
    )
  }
}

export default Home;
