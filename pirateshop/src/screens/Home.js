import './styles/Home.css'
import manuscrit from '../assets/manuscrit.webp'
import { useState } from 'react'

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className='homeContainer'>
      <div className='annonceContainer'>
        <div className='annonce'>
          <div>
            <div className=''></div>
            <button
              className='firstButtonStyle'
              onClick={() => setIsOpen(!isOpen)}
            >
              <img src={manuscrit} width='50px' alt='' />
            </button>
          </div>
          <div className={`containerModal ${isOpen ? 'active' : ''}`}></div>
          <div>
            <img src={manuscrit} width='50px' alt='' />
          </div>
          <div>
            <img src={manuscrit} width='50px' alt='' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
