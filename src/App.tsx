import { Fragment, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import './App.css'

import Main from './pages/Main'
import Info from './pages/Info'

function App() {

  return (
    <Routes>
      <Route path="/" element={ <Main /> } />
      <Route path="/info" element={ <Info /> } />
    </Routes>
  )
}

export default App