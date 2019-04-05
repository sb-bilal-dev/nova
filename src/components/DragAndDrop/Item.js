import React from 'react'
import { Draggable } from 'react-beautiful-dnd'

import LoadingIndicator from '../LoadingIndicator'
import Comment from './Comment'
import './style.css'

const Item = ({ item, index, setComment }) => (
  <Draggable
    draggableId={item.id}
    index={index}
  >
    {provided => (
      <div
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        style={provided.draggableProps.style}
        className='DragAndDrop__item'
      >
        <div className='DragAndDrop__item__info'>
          <h4>{item.title}</h4>
          <p>{item.check_url}</p>
        </div>
        {item.commentLoading
          ? <LoadingIndicator />
          : <Comment comment={item.comment} setComment={value => setComment(value, item.id)}/>
        }
      </div>
    )}
  </Draggable>
)

export default Item
