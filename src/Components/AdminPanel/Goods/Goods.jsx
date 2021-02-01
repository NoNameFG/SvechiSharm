import React, { useState, useEffect } from 'react'
import Fab from '@material-ui/core/Fab'
import Tooltip from '@material-ui/core/Tooltip'
import AddIcon from '@material-ui/icons/Add'
import AddGoods from './AddGoods/AddGoods.jsx'
import List from '@material-ui/core/List'
import { useStyles } from './Style.js'
import './Goods.css'
import Good from './Good/Good.jsx'
import api from '../../../Api/api.js'
import shortid from 'shortid'



function Goods() {
  const [addDialogStatus, setAddDialogStatus] = useState(false)
  const [productSort, setProductSort] = useState({})
  const [productList, setProductList] = useState([])

  const styles = useStyles()


  useEffect(() => {
    let outContext = setTimeout(async () => {
      try {
        let data = await api.product.get_list({})
        setProductList(data.data)
      } catch (e) {
        console.log(e)
      }
    })

    return () => {
      clearTimeout(outContext)
    }
  }, [])

  const showGoods = productList.map(el => (
    <Good {...el} key={shortid.generate()}/>
  ))

  return(
    <div className="goods_wrapper">
      <List>
        {showGoods}
      </List>

      <AddGoods setAddDialogStatus={setAddDialogStatus} addDialogStatus={addDialogStatus}/>

      <Tooltip title="Добавить товар" aria-label="add">
        <Fab color="primary" className={styles.fab} onClick={() => setAddDialogStatus(true)}>
          <AddIcon />
        </Fab>
      </Tooltip>
    </div>
  )
}

export default Goods
