import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Talent from './pages/Talent'
import Shop from './pages/Shop'
import Contact from './pages/Contact'
// import NotFound from './pages/NotFound'

function App() {
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  return (
    <>
      {!isHomePage && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/talent" element={<Talent />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {!isHomePage && <Footer />}
    </>
  )
}

export default App