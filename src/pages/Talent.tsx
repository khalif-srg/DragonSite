import { useState, useEffect } from 'react'
import './Talent.css'

interface TalentType {
  id: string
  name: string
  role: string
  image: string
  category: string
  city: string
}

function Talent() {
  const [talents, setTalents] = useState<TalentType[]>([])
  const [activeCity, setActiveCity] = useState('All')

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/talent`)
      .then((res) => res.json())
      .then((data) => setTalents(data))
      .catch((err) => console.error('Failed to fetch talent:', err))
  }, [])

  const cities = ['All', ...new Set(talents.map((t) => t.city))]

  const filteredTalents = talents.filter(
    (t) => activeCity === 'All' || t.city === activeCity
  )

  return (
    <div className="talent-page">
      <div className="city-tabs">
        {cities.map((city) => (
          <button
            key={city}
            className={`city-tab ${activeCity === city ? 'active' : ''}`}
            onClick={() => setActiveCity(city)}
          >
            {city}
          </button>
        ))}
      </div>

      <div className="talent-grid">
        {filteredTalents.map((t) => (
          <div className="talent-card" key={t.id}>
            <div className="talent-image-box">
              <img src={t.image} alt={t.name} />
            </div>
            <p className="talent-name">{t.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Talent