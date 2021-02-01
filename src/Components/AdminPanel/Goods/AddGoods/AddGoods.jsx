import React, { useState } from 'react'
import { useStyles } from '../Style.js'
import Tooltip from '@material-ui/core/Tooltip'
import ImageTemplate from './ImageTemplate/ImageTemplate.jsx'
import DialogTitle from '@material-ui/core/DialogTitle'
import Dialog from '@material-ui/core/Dialog'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import AddIcon from '@material-ui/icons/Add'
import Snackbar from '@material-ui/core/Snackbar'
import Alert from '@material-ui/lab/Alert'
import Popover from '@material-ui/core/Popover'
import Badge from '@material-ui/core/Badge'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Checkbox from '@material-ui/core/Checkbox'
import '../Goods.css'
import api from '../../../../Api/api.js'
import shortid from 'shortid'



function AddGoods(props){
  const [imageList, setImageList] = useState([])
  const [productData, setProductData] = useState({})
  const [addCategory, setAddCategory] = useState(null)
  const [categoryList, setCategoryList] = useState([])
  const [snackBarStatus, setSnackBarStatus] = useState({
    error: false,
    success: false
  })

  const titleOfCategory = [
    'Свечи из натуральной вощины',
    'Свечи литые из натурального воска',
    'Свечи Контейнерные',
    'Свечи интерьерные',
    'Свечи свадебные',
    'Свечи подарочные',
    'Наборы для изготовления свечей своими руками',
    'Свечи в торт',
    'Свечи-цифры',
    'Свечи с добавлением натуральных эфирных масел',
    'Арома-свечи'
  ]

  const styles = useStyles()

  const imageUpload = e => {
    const file = e.target.files[0]
    if(file){
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = event => {
        setImageList([
          ...imageList,
          event.target.result
        ])
      }
    }
    e.target.value = ''
  }

  const deleteImage = index => {
    setImageList(
      imageList.filter((el, i) => index !== i)
    )
  }

  const clearState = () => {
    setProductData({})
    setImageList([])
  }

  const closePopup = () => {
    clearState()
    props.setAddDialogStatus(false)
  }

  const handleChange = e => {
    setProductData(
      {
        ...productData,
        [e.target.name]: e.target.value
      }
    )
  }

  const snackBarChange = (success = false, error = false) => {
    setSnackBarStatus({
      error,
      success
    })
  }

  const addProduct = async () => {
    try {
      await api.product.add({
        product: {
          ...productData,
          in_stock: true
        },
        images: imageList
      })
      closePopup()
      snackBarChange(true)
    } catch (e) {
      snackBarChange(undefined, true)
    }
  }

  const handleCategory = event => {
    setAddCategory(event.currentTarget)
  }

  const showImageList = imageList.map((el, index) => (
    <ImageTemplate image={el} index={index} key={shortid.generate()} deleteImage={deleteImage}/>
  ))

  const handleUpdateCategory = name => {
    if(categoryList.indexOf(name) !== -1){
      let arr = categoryList.filter(el => el !== name)
      setCategoryList(arr)
    } else {
      setCategoryList([
        ...categoryList,
        name
      ])
    }
  }

  const titleCategoryShow = titleOfCategory.map((el, index) => (
    <ListItem
      button
      onClick={() => handleUpdateCategory(el)}
      key={shortid.generate()}>
      <ListItemIcon>
        <Checkbox
          edge="start"
          disableRipple
          checked={categoryList.indexOf(el) !== -1}
        >
        </Checkbox>
      </ListItemIcon>
      <ListItemText edge="end" primary={el}/>
    </ListItem>
  ))

  return(
    <>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={snackBarStatus.success}
        onClose={() => snackBarChange()}
        autoHideDuration={3000}
      >
        <Alert onClose={() => snackBarChange()} severity="success" elevation={6} variant="filled">
          Товар был успешно добавлен.
        </Alert>
      </Snackbar>

      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={snackBarStatus.error}
        onClose={() => snackBarChange()}
        autoHideDuration={3000}
      >
        <Alert onClose={() => snackBarChange()} severity="error" elevation={6} variant="filled">
          Ошибка добавления товара.
        </Alert>
      </Snackbar>

      <Dialog aria-labelledby="dialog-title" onClose={closePopup} open={props.addDialogStatus}>
        <div className="add_product-popup">
          <DialogTitle id="dialog-title">Добавление товара</DialogTitle>

          <div className="add_product-wrapp">
            <div className="add_product-left_panel">
              <TextField onChange={handleChange} className={styles.inputText} label="Название товара" name="name" variant="outlined" autoComplete="off"/>
              <TextField onChange={handleChange} className={styles.inputTextBottom} label="Цена в BYN" name="price" variant="outlined" autoComplete="off"/>
              <div className={styles.addCategoryButtonWrapp}>
                <Badge badgeContent={categoryList.length} color="primary" className={styles.categoryBadge}>
                  <Button onClick={handleCategory} aria-describedby="add_category" variant="contained" color="default" className={styles.addCategoryButton}>
                    Добавить категорию
                  </Button>
                </Badge>
                <Popover
                  id="add_category"
                  open={Boolean(addCategory)}
                  anchorEl={addCategory}
                  onClose={() => setAddCategory(null)}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                  }}
                >
                  <List>
                    {titleCategoryShow}
                  </List>
                </Popover>
              </div>
            </div>
            <div className="add_product-right_panel">
              <TextField
                onChange={handleChange}
                className={styles.inputText}
                id="outlined-multiline-static"
                label="Описание товара"
                multiline
                rows={8}
                name="description"
                variant="outlined"
                autoComplete="off"
              />
            </div>
          </div>

          <div className="add_product-image_list">
            <Tooltip title="Добавить изображение" aria-label="add_image">
              <Card className={styles.card}>
                <CardActions className={styles.addImageActions}>
                  <Button variant="contained" component="label" className={styles.addImageButton} type="file">
                    <input type="file" hidden accept=".jpeg, .jpg, .png" onChange={imageUpload}/>
                    <AddIcon color="action"/>
                  </Button>
                </CardActions>
              </Card>
            </Tooltip>

            {showImageList}
          </div>

          <div className="add_product-popup_buttons">
            <Button variant="contained" className={styles.leftButton} color="primary" onClick={() => addProduct()}>Добавить</Button>
            <Button variant="contained" onClick={closePopup}>Отменить</Button>
          </div>
        </div>
      </Dialog>
    </>
  )
}

export default AddGoods
