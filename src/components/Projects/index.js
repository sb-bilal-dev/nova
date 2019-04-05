import React from 'react'

import LoadingIndicator from '../LoadingIndicator'
import DragAndDrop from '../DragAndDrop'

const Projects = ({ loading, error, projects, droppableId, setComment }) => {
  if (loading) return <LoadingIndicator />

  if (error) {
    return (
      <div>Something Went Wrong.</div>
    )
  }

  return <DragAndDrop items={projects} droppableId={droppableId} setComment={setComment}/>
}

export default Projects
