import * as React from 'react'
import { useContext, useState, createContext } from 'react'

const AuthContext = createContext()

export const useAuth = () => {
  const [state, setState] = useContext(AuthContext)

  const login = userData => setState(userData)
  const logout = () => {
    setState(null)
    window.localStorage.removeItem('auth') // limpa o localStorage
  }

  return [state, { login, logout }]
}

export const AuthProvider = ({ children }) => {
  const [state, setState] = useState(() => {
    const data = window.localStorage.getItem('auth')
    return data ? JSON.parse(data) : null
  })

  React.useEffect(() => {
    if (state) {
      window.localStorage.setItem('auth', JSON.stringify(state))
    }
  }, [state])

  return (
    <AuthContext.Provider value={[state, setState]}>
      {children}
    </AuthContext.Provider>
  )
}
