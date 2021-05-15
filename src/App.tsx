import React from 'react'

import { Sidebar } from './components/Sidebar/Sidebar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <Sidebar />
        <Switch>
          <Route path='/' />
        </Switch>
      </Router>
    </>
  )
}

export default App
