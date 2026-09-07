import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    
    <nav className="navbar">
      <div className="navbar-links">
        <Link to="/talent">talent</Link>
        <Link to="/shop">shop</Link>
        <Link to="/contact">contact</Link>
      </div>

      <Link to="/" className="navbar-brand">
        DRAGON TALENT AGENCY
      </Link>
    </nav>
  )
}

export default Navbar