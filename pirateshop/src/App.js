import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './screens/Home'
import Boutique from './screens/Boutique'
import Carte from './screens/Carte'

import './App.css'

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/carte' element={<Carte />}></Route>
        <Route path='/boutique' element={<Boutique />}></Route>
      </Routes>
    </div>
  )
}

export default App
