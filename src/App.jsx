
import Navbar from './components/navbar'
import Hero from './components/hero'
import { Route, Routes } from 'react-router-dom'
import Transaction from './components/transaction'
import Analyze from './components/Analyze'
import Entry from './components/entry'


const App = () => {
  return (
    <div className='app-wrapper'>
      <Navbar/>
       <Routes>
        <Route path='/' element={<Hero/>}/>
        <Route path='/analyze' element={<Entry/>}/>
        <Route path='/transaction' element={<Transaction/>}/>
        <Route path='/detail/:hash' element={<Analyze/>}/>
       </Routes>
    </div>
  )
}

export default App
