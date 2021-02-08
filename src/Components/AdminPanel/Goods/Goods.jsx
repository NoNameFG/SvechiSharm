import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Fab from '@material-ui/core/Fab'
import Tooltip from '@material-ui/core/Tooltip'
import AddIcon from '@material-ui/icons/Add'
import AddGoods from './AddGoods/AddGoods.jsx'
import List from '@material-ui/core/List'
import { useStyles } from './Style.js'
import './Goods.css'
import Good from './Good/Good.jsx'
import UpdateGood from './UpdateProduct/UpdateGood.jsx'
import shortid from 'shortid'
//actions
import { getProductList } from '../../../Actions/Requests/productList.js'


function Goods() {
  const [addDialogStatus, setAddDialogStatus] = useState(false)
  const [updateDialogStatus, setUpdateDialogStatus] = useState(false)
  const [productSort, setProductSort] = useState({})

  const state = useSelector(state => state.productList)
  const dispatch = useDispatch()

  const styles = useStyles()

  useEffect(() => {
    dispatch(getProductList())
  }, [])

  const showGoods = state.map(el => (
    <Good {...el} key={shortid.generate()} setUpdateDialogStatus={setUpdateDialogStatus}/>
  ))

  return(
    <div className="goods_wrapper">
      <List>
        {showGoods}
      </List>

      <AddGoods setAddDialogStatus={setAddDialogStatus} addDialogStatus={addDialogStatus}/>
      <UpdateGood setUpdateDialogStatus={setUpdateDialogStatus} updateDialogStatus={updateDialogStatus}/>


      <Tooltip title="Добавить товар" aria-label="add">
        <Fab color="primary" className={styles.fab} onClick={() => setAddDialogStatus(true)}>
          <AddIcon />
        </Fab>
      </Tooltip>
    </div>
  )
}

export default Goods
