import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'
import ImageToolTip from './ImageToolTip/ImageToolTip.jsx'
import ListItemText from '@material-ui/core/ListItemText'
import { useHistory } from 'react-router-dom'
import Checkbox from '@material-ui/core/Checkbox'
import { NoPaddingToolTip } from './style.js'
import { useStyles } from './styleList.js'

function Good(props){
  const styles = useStyles()
  const history = useHistory()

  const handleClick = e => {
    e.preventDefault()
    history.push(`/admin_panel/goods?id=${props._id}`)
    props.setUpdateDialogStatus(true)
  }

  return(
    <ListItem button>
      <Typography className={styles.typography}>
        <NoPaddingToolTip title={<ImageToolTip _id={props._id}/>} aria-label="add">
          <Link href="#" onClick={handleClick}>{props.name}</Link>
        </NoPaddingToolTip>
      </Typography>
      <ListItemText primary={'' + props.description} className={styles.listItemDescription}></ListItemText>
      <ListItemText primary={'' + props.price + ' BYN'} className={styles.listItemPrice}></ListItemText>
      <div className={styles.inStock}>
        <ListItemText primary={'В наличии: '}>
        </ListItemText>
        <Checkbox disabled defaultChecked={props.in_stock} inputProps={{ 'aria-label': 'disabled checked checkbox' }} />
      </div>
    </ListItem>
  )
}

export default Good
