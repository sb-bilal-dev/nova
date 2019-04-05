import axios from 'axios'

const REQUEST_TIMEOUT = 20 * 1000

export default (options = {}) => {
  const defaultOptions = {
    timeout: REQUEST_TIMEOUT,
    baseURL: 'https://novaweb.studio/dashboard/_api/',
    ...options
  }

  return axios.create(defaultOptions)
}
