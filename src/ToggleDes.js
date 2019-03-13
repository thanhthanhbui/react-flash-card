import React from "react";
import { Segment, Button, Icon } from "semantic-ui-react";

class ToggleDes extends React.Component {
  state = { description, showDes: false }

  toggleDes = () => this.setState({ showDes: !this.state.showDes, })

  render() {
    return (
      <Segment basic>
        <Button icon basic color="green" onClick={this.toggleDes}>
          <Icon name={this.state.showDes ? 'angle double up' : 'angle double down'} />
        </Button>
        { this.state.showDes ? <Card.Description>{description}</Card.Description> : null }
      </Segment>
    )
  }
}

export default ToggleDes;