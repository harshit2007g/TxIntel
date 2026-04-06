import React from 'react'
import Navbar from './components/navbar'
import Hero from './components/hero'
import { Route, Routes } from 'react-router-dom'
import Transaction from './components/transaction'
import Analyze from './components/Analyze'

const App = () => {
  return (
    <div>
      <Navbar/>
       <Routes>
        <Route path='/' element={<Hero/>}/>
        <Route path='/analyze' element={<Analyze/>}/>
        <Route path='/transaction' element={<Transaction/>}/>
       </Routes>
    </div>
  )
}

export default App
