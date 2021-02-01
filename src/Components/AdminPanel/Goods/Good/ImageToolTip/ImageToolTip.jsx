import React, { useState, useEffect } from 'react'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import api from '../../../../../Api/api.js'
import { useStyles } from './style.js'

function ImageToolTip(props){
  const [image, setImage] = useState('')
  const style = useStyles()

  useEffect(() => {
    const getData = async () => {
      try {
        let data = await api.product.image_by_id({product_id: props._id})
        setImage(data.data.image)
      } catch (e) {
        console.log(e)
      }
    }
    getData()
  }, [props._id])

  return(
    <Card elevation={4} className={style.card}>
      {
        image ?
          <CardMedia
            className={style.cardMedia}
            component='img'
            src={image}
            title="Product Image"
          />
          :
          null
      }
    </Card>
  )
}

export default ImageToolTip
