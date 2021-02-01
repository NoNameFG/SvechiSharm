import React, {useState} from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import CakeIcon from '@material-ui/icons/Cake'
import { useStyles } from './Style.js'
import { useHistory } from 'react-router-dom'



function Header(){
  const [sidebarStatus, setSidebarStatus] = useState(false)
  const classes = useStyles()
  const history = useHistory()

  const handleClick = position => {
    setSidebarStatus(false)
    history.push(`/admin_panel/${position}`)
  }

  return(
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => setSidebarStatus(true)}>
          <MenuIcon />
        </IconButton>
      </Toolbar>
      <Drawer className={classes.fullList} anchor="left" open={sidebarStatus} onClose={() => setSidebarStatus(false)}>
        <List className={classes.list}>
            <ListItem button onClick={() => handleClick('orders')}>
              <ListItemIcon><ShoppingCartIcon/></ListItemIcon>
              <ListItemText primary="Заказы" />
            </ListItem>
            <ListItem button onClick={() => handleClick('goods')}>
              <ListItemIcon><CakeIcon/></ListItemIcon>
              <ListItemText primary="Товары" />
            </ListItem>
        </List>
      </Drawer>
    </AppBar>
  )
}

export default Header
