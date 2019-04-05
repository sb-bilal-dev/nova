import React from 'react'
import ReactDOM from 'react-dom'

import './utils/initLocalStorage'
import Root from './Root'
import './index.css'

const render = (Root) => {
  ReactDOM.render(
    <Root />,
    document.getElementById('root')
  )
}

render(Root)
if (module.hot) {
  module.hot.accept('./Root', () => {
    const NewRoot = require('./Root').default
    render(NewRoot)
  })
}
