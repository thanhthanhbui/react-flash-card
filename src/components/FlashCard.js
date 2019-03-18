import React from "react";
import { Card, Button, Icon, } from "semantic-ui-react";
import CardForm from "./CardForm";

class FlashCard extends React.Component {
  state = { showDescription: false, editing: false }

  toggleEdit = () => this.setState({ editing: !this.state.editing })

  toggleDescription = () => this.setState({ showDescription: !this.state.showDescription, })

  render() {
    const { showDescription } = this.state
    const { id, title, description, remove, } = this.props
    return (
      <Card.Content>
        {
          this.state.editing ?
            <CardForm {...this.props} toggleEdit={this.toggleEdit} />
          :
            <div>
              <Card.Header as="h3" textAlign="center">{title}</Card.Header>
              <hr />
              <br />
              <Button icon basic color="green" onClick={this.toggleDescription}>
                <Icon name={showDescription ? "angle double up" : "angle double down"} />
              </Button>
              <br />
              <br />
              {
                showDescription ?
                <Card.Description>{description}</Card.Description>
                :
                null
              }
            </div>
        }
        <br />
        <div className="ui two buttons">
          <Button icon basic color="blue" onClick={this.toggleEdit}>
            <Icon name="edit" />
          </Button>
          <Button icon basic color="red" onClick={() => remove(id)}>
            <Icon name="trash" />
          </Button>
        </div>
      </Card.Content>
    )
  }
}

export default FlashCard;