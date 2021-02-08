import './App.css'
import { Route, Switch } from 'react-router'
import Login from './Components/Login/Login.jsx'
import AdminPanel from './Components/AdminPanel/AdminPanel.jsx'
import React, { useLayoutEffect } from 'react'
import setAdminHeader from './Functions/setAdminHeader.js'

function App() {

  useLayoutEffect(() => {
    setAdminHeader(localStorage.getItem('admin'))
  }, [])

  return (
    <div className="App">
      <Switch>
        <Route exact path='/'>
          <Login/>
        </Route>
        <Route>
          <AdminPanel/>
        </Route>
      </Switch>
    </div>
  )
}

export default App
