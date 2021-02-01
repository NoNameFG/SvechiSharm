import './App.css'
import { Route, Switch } from 'react-router'
import Login from './Components/Login/Login.jsx'
import AdminPanel from './Components/AdminPanel/AdminPanel.jsx'
import React, { useEffect } from 'react'
import setAdminHeader from './Functions/setAdminHeader.js'

function App() {

  useEffect(() => {
    setAdminHeader(localStorage.getItem('admin'))
  }, [])

  return (
    <div className="App">
      <Switch>
        <Route exact path='/'>
          <Login/>
        </Route>
        <AdminPanel/>
      </Switch>
    </div>
  )
}

export default App
