import {
  HOME_GET_PROJECTS_REQUEST,
  HOME_GET_PROJECTS_ERROR,
  HOME_GET_PROJECTS_SUCCESS,
  HOME_SET_COMMENT_REQUEST,
  HOME_SET_COMMENT_ERROR,
  HOME_SET_COMMENT_SUCCESS
} from './constants'

const initialState = {
  projects: [],
  loading: false,
  error: null
}

const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case HOME_GET_PROJECTS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      }
    case HOME_GET_PROJECTS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      }
    case HOME_GET_PROJECTS_SUCCESS:
      return {
        loading: false,
        projects: action.payload
      }
    case HOME_SET_COMMENT_REQUEST:
      return {
        ...state,
        projects: state.projects.map(proj => action.id === proj.id ? { ...proj, commentLoading: true } : proj)
      }
    case HOME_SET_COMMENT_ERROR:
      return {
        ...state,
        projects: state.projects.map(proj => action.id === proj.id ? { ...proj, commentLoading: false } : proj)
      }
    case HOME_SET_COMMENT_SUCCESS:
      return {
        projects: state.projects.map(proj => action.activeProject.id === proj.id ? action.activeProject : proj)
      }
    default:
      return state
  }
}

export default projectReducer
