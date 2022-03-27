import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { Example } from 'pages/Example'

import { RouteNames } from './constants'

function routes() {
  return (
    <Routes>
        <Route
            path={RouteNames.Example}
            element={<Example />}
        />
    </Routes>
  )
}

export const RoutesApp = routes
