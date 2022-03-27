import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import 'shared/styles/index.scss'

import { RoutesApp as Routes } from './router'

const App = () => {
  return (
    <Router>
      <Routes/>
    </Router>
  )
}

export default App;
