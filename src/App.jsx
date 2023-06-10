import React from 'react'
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Components
import Header from './components/Header/Header'
import Home from './components/Home/Home'


export default function App() {
  return (
    <div>
      <Router>
        <Header/>
        <Routes>
            <Route path='/' element={<Home/>}/>
        </Routes>
      </Router>
    </div>
  )
}
