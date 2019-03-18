import React from "react";
import { Form, } from "semantic-ui-react";

class CardForm extends React.Component {
  state = { title: "", description: "" }

  componentDidMount() {
    if (this.props.id) {
      const { title, description } = this.props
      this.setState({ title, description })
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if (this.props.id) {
      this.props.edit({ id: this.props.id, ...this.state, })
      this.props.toggleEdit()
    } else {
      this.props.addCard(this.state)
    }
    this.setState({ title: "", description: "", })
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            label="Title"
            placeholder="Title"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
          />
          <Form.Input
            fluid
            label="Description"
            placeholder="Description"
            name="description"
            value={this.state.description}
            onChange={this.handleChange}
          />
          <Form.Button basic color="green">Submit</Form.Button>
        </Form.Group>
      </Form>
    )
  }
}

export default CardForm;