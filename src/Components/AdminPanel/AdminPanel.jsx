import React from 'react'
import Header from './Header/Header.jsx'
import Goods from './Goods/Goods.jsx'
import { Route, Switch } from 'react-router'

function AdminPanel(){
  return(
    <div>
      <Header/>
      <Switch>
        <Route path="/admin_panel/goods">
         <Goods/>
        </Route>
      </Switch>
    </div>
  )
}

export default AdminPanel
