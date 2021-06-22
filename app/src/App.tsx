import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import { NavBar, NavBarType } from '@hs/shared'
import { HomePage } from './pages'

function App() {
  const navItems: NavBarType[] = [
    {
      key: 'home',
      path: '/',
      title: 'Home'
    }
  ]

  return (
    <Router>
      <NavBar items={navItems}/>
      <Switch>
        <Route path="/">
          <HomePage/>
        </Route>
      </Switch>
    </Router>
  )
}

export default App
