import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './containers/Home'
import NotFound from './components/NotFound'

const Routes = () => {
  return (
    <Switch>
      <Route
        exact
        path='/'
        component={Home}
      />
      <Route component={NotFound} />
    </Switch>
  )
}

export default Routes
