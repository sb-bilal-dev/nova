import React, { Component } from 'react'
import TextareaForm from '../TextareaForm'

class Comment extends Component {
  state = {
    isEditing: false
  }

  handleEditingToggle = () => {
    this.setState({ isEditing: !this.state.isEditing })
  }

  handleSubmit = value => {
    this.props.setComment(value)
  }

  renderComment = (comment) => (comment
    ? <>{comment} <button onClick={this.handleEditingToggle}>Edit comment</button></>
    : <><button onClick={this.handleEditingToggle}>Add comment</button></>
  )

  render () {
    const {
      comment
    } = this.props
    const {
      isEditing
    } = this.state

    return (
      <div>
        {isEditing
          ? <TextareaForm
            initialValue={comment}
            handleSubmit={this.handleSubmit}
          />
          : this.renderComment(comment)
        }
      </div>
    )
  }
}

export default Comment
