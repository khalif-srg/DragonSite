import { useState } from 'react'
import './Admin.css'

function Admin() {
  const [form, setForm] = useState({
    name: '',
    role: '',
    image: '',
    category: '',
    city: '',
  })
  const [message, setMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setMessage('')

    const token = localStorage.getItem('adminToken')

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/talent`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(form),
      })

      if (!res.ok) {
        setMessage('Failed to add talent')
        return
      }

      setMessage('Talent added successfully!')
      setForm({ name: '', role: '', image: '', category: '', city: '' })
    } catch (err) {
      setMessage('Something went wrong')
    }
  }

  return (
    <div className="admin-page">
      <h1>Add New Talent</h1>
      <form onSubmit={handleSubmit} className="admin-form">
        <input name="name" placeholder="Name" value={form.name} onChange={handleChange} />
        <input name="role" placeholder="Role" value={form.role} onChange={handleChange} />
        <input name="image" placeholder="Image URL" value={form.image} onChange={handleChange} />
        <input name="category" placeholder="Category" value={form.category} onChange={handleChange} />
        <input name="city" placeholder="City" value={form.city} onChange={handleChange} />
        <button type="submit">Add Talent</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  )
}

export default Admin