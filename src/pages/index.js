import * as React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { useAuth } from '~/components/modules'

import { Signup } from './Signup'
import { Login } from './Login'
import { Dashboard } from './Dashboard'

const AuthRoutes = () => (
  <>
    <Route path="/" exact>
      <Login />
    </Route>

    <Route path="/signup" exact>
      <Signup />
    </Route>
  </>
)

const LoggedInRoutes = () => (
  <Route path="/" exact>
    <Dashboard />
  </Route>
)

export const App = () => {
  const [auth] = useAuth()
  return <Router>{auth?.user ? <LoggedInRoutes /> : <AuthRoutes />}</Router>
}
