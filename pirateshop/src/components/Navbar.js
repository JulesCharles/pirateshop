import './styles/Navbar.css'
import pirateicone from '../assets/pirateicone.jpeg'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='title'>PirateShop</div>
      <img className='logo' src={pirateicone} width='120px' alt='logo' />
    </div>
  )
}

export default Navbar
