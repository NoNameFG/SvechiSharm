import React from 'react'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
import DeleteIcon from '@material-ui/icons/Delete'
import { useStyles } from '../../Style.js'

function ImageTemplate(props){
  const styles = useStyles()



  return(
    <Card className={styles.card} elevation={4}>
      <CardMedia
        className={styles.cardMedia}
        component='img'
        src={props.image}
        title="Image Preview"
      />
      <CardActions>
        <Button
          className={styles.removeButton}
          onClick={() => props.deleteImage(props.index)}
        >
          <DeleteIcon color="action"/>
        </Button>
      </CardActions>
    </Card>
  )
}

export default ImageTemplate
