import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  return (
    <div className="home-page">
      <div className="home-content">
        <div className="hero-box">
          <img src="/images/Featured.jpeg" alt="Featured" />
        </div>

        <h1 className="home-title">DRAGON TALENT AGENCY</h1>

        <nav className="home-nav">
          <Link to="/">Home</Link>
          <Link to="/talent">Talent</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </div>
  )
}

export default Home