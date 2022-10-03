import './styles/Navbar.css'
import pirate from '../assets/navbaros.webp'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='title'>
        <Link to='/carte'>
          <div className='carte'>Carte</div>{' '}
        </Link>
        <Link to='/'>
          <img className='osnav' src={pirate} alt='' width='150px' />
        </Link>
        <Link to='/boutique'>
          <div className='boutique'>Boutique</div>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
