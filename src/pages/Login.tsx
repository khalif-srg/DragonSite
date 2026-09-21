import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css'


/**
 * Login component for admin authentication.
 * @component
 * @description This component renders a login form for admin users. It handles password input, form submission, and error display.
 * @example
 * return (
 *   <Login />
 * )
 * @returns 
 */
function Login() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      })

      if (!res.ok) {
        setError('Incorrect password')
        return
      }

      const data = await res.json()
      localStorage.setItem('adminToken', data.token)
      navigate('/admin')
    } catch {
      setError('Something went wrong')
    }
  }

  return (
    <div className="login-page">
      <form onSubmit={handleSubmit} className="login-form">
        <h1>Admin Login</h1>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className="login-error">{error}</p>}
        <button type="submit">Log in</button>
      </form>
    </div>
  )
}

export default Login