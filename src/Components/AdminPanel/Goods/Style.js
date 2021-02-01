import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles({
  fab: {
    position: 'fixed',
    bottom: 30,
    right: 30
  },
  leftButton: {
    marginRight: 5
  },
  inputText: {
    width: '100%'
  },
  inputTextBottom: {
    width: '100%',
    marginTop: 20
  },
  card: {
    width: 160,
    height: 200,
    position: 'relative',
    marginRight: 10,
    flex: '0 0 160px'
  },
  removeButton: {
    position: 'absolute',
    top: 0,
    right: 0,
    maxWidth: 30,
    maxHeight: 30,
    minWidth: 30,
    minHeight: 30,
  },
  addImageButton: {
    width: '100%',
    height: '100%'
  },
  addImageActions: {
    padding: "0 !important",
    margin: 0,
    width: '100%',
    height: '100%'
  },
  addCategoryButtonWrapp: {
    width: '100%',
    marginTop: 20
  },
  categoryBadge: {
    width: '100%'
  },
  addCategoryButton: {
    width: '100%'
  }
})
