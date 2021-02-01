import { withStyles } from '@material-ui/core/styles'
import Tooltip from '@material-ui/core/Tooltip'

export const NoPaddingToolTip = withStyles({
  tooltip: {
    padding: 0
  }
})(Tooltip)
