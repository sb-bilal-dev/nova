import React, { Component } from 'react'

class TextareaForm extends Component {
  state = {
    value: this.props.initialValue
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.handleSubmit(this.state.value)
  }

  handleChange = event => {
    this.setState({ value: event.target.value })
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <textarea
          value={this.state.value}
          onChange={this.handleChange}
        />
        <input type='submit'/>
      </form>
    )
  }
}

export default TextareaForm
