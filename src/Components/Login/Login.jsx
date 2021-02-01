import React, { useState } from 'react'
import api from '../../Api/api.js'
import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import Snackbar from '@material-ui/core/Snackbar'
import Alert from '@material-ui/lab/Alert'
import './Login.css'
import { useStyles } from './Style.js'
import { useHistory } from 'react-router-dom'
import setAdminHeader from '../../Functions/setAdminHeader.js'


function Login(){
  const [authData, setAuthData] = useState({
    login: '',
    password: ''
  })
  const [errorMessageStatus, setErrorMessageStatus] = useState(false)
  const classes = useStyles()
  const history = useHistory()

  const handleSubmit = async e => {
    e.preventDefault()
      try {
        let data = await api.admin_login(authData)
        localStorage.setItem('admin', data.headers.admin)
        setAdminHeader(data.headers.admin)
        history.push('/admin_panel/orders')
      } catch (e) {
        setErrorMessageStatus(true)
      }

  }

  const handleChange = e => {
    setAuthData({
      ...authData,
      [e.target.name]: e.target.value
    })
  }

  const errorMessageChange = () => {
    setErrorMessageStatus(false)
  }

  const contentPaper = (
    <React.Fragment>
      <form className="login_form" onSubmit={handleSubmit}>
        <TextField
          id="standard-basic"
          autoComplete="off"
          label="Логин"
          value={authData.login}
          onChange={handleChange}
          name="login"
        />
        <TextField
          id="standard-password-input"
          label="Пароль" value={authData.password}
          onChange={handleChange}
          name="password"
          type="password"
        />
        <div className="button_container">
          <Button variant="contained" component="label" color="primary" size="large" className={classes.button}>
            Войти
            <input type="submit" hidden/>
          </Button>
        </div>
      </form>
    </React.Fragment>
  );

  return(
    <div className="login_page">
      <Paper children={contentPaper} className={classes.root} elevation={3}/>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={errorMessageStatus}
        autoHideDuration={3000}
        onClose={errorMessageChange}
      >
        <Alert elevation={6} variant="filled" severity="error" onClose={errorMessageChange}>Ошибка авторизации.</Alert>
      </Snackbar>
    </div>
  )
}

export default Login
