import React, { Component } from 'react'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'

import Item from './Item'
import './style.css'

const positionItems = (items, droppableId) => {
  if (!items.length) return []

  const dndPositions = JSON.parse(localStorage.getItem('dndPositions'))
  let positions = dndPositions[droppableId]
  const newItems = items.filter(item => !positions.includes(item.id))

  positions = newItems.map(item => item.id).concat(positions)

  const positionedItems = []

  positions.forEach((id) => {
    const positionedItem = items.find(item => item.id === id)
    if (positionedItem) positionedItems.push(positionedItem)
  })

  dndPositions[droppableId] = positions
  localStorage.setItem('dndPositions', JSON.stringify(dndPositions))

  return positionedItems
}

class DragAndDrop extends Component {
  constructor (props) {
    super(props)
    const { droppableId, items } = this.props
    const positionedItems = positionItems(items, droppableId)

    this.state = {
      positionedItems
    }
  }

  static getDerivedStateFromProps (props) {
    const positionedItems = positionItems(props.items, props.droppableId)

    return {
      positionedItems
    }
  }

  handleDragEnd = (result) => {
    const {
      draggableId,
      destination: {
        droppableId,
        index: to
      },
      source: { index }
    } = result
    const {
      droppableId: currentDroppableId
    } = this.props

    if (droppableId !== currentDroppableId) return
    const activeItem = this.state.positionedItems[index]
    const positionedItems = this.state.positionedItems.filter(item => item.id !== draggableId)
    const dndPositions = JSON.parse(localStorage.getItem('dndPositions'))

    positionedItems.splice(to, 0, activeItem)
    dndPositions[droppableId] = positionedItems.map(item => item.id)
    localStorage.setItem('dndPositions', JSON.stringify(dndPositions))

    this.setState({ positionedItems })
  }

  render () {
    const { droppableId, setComment } = this.props
    const { positionedItems } = this.state

    return (
      <DragDropContext onDragEnd={this.handleDragEnd}>
        <Droppable droppableId={droppableId}>
          {provided => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className='DragAndDrop'
            >
              {positionedItems.map((item, index) => (
                <Item
                  key={item.id}
                  item={item}
                  index={index}
                  setComment={setComment}
                />
              ))}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    )
  }
}

export default DragAndDrop
