import api from '../../utils/api'
import {
  HOME_GET_PROJECTS_REQUEST,
  HOME_GET_PROJECTS_SUCCESS,
  HOME_GET_PROJECTS_ERROR,
  HOME_SET_COMMENT_SUCCESS,
  HOME_SET_COMMENT_REQUEST,
  HOME_SET_COMMENT_ERROR
} from './constants'

export const fetchProjects = noLoader => async dispatch => {
  if (!noLoader) {
    dispatch({
      type: HOME_GET_PROJECTS_REQUEST
    })
  }

  try {
    const payload = await api().get('/projects').then(response => response.data)

    dispatch({
      type: HOME_GET_PROJECTS_SUCCESS,
      payload: payload
    })
  } catch (error) {
    dispatch({
      type: HOME_GET_PROJECTS_ERROR,
      error
    })
  }
}

export const setComment = (value, id) => async dispatch => {
  if (!id) return
  dispatch({
    type: HOME_SET_COMMENT_REQUEST,
    id
  })

  try {
    const activeProject = await api().patch(`/projects/${id}`, { comment: value }).then(response => response.data)

    dispatch({
      type: HOME_SET_COMMENT_SUCCESS,
      activeProject
    })
  } catch (error) {
    dispatch({
      type: HOME_SET_COMMENT_ERROR,
      id,
      error
    })
  }
}
