import React           from 'react'
import Typography      from '@material-ui/core/Typography'
import { Paper }       from '@material-ui/core'
import { makeStyles }  from '@material-ui/core/styles'
import FormAddWorkshop from '../../Components/Workshop/FormAddWorkshop'

const useStyles     = makeStyles(theme => (
  {
    root: {
      marginTop: theme.spacing(2),
      padding  : theme.spacing(2)
    }
  }
))
const IndexWorkshop = () => {
  const classes = useStyles()
  return <>
    <Typography variant="h6" component="h2">
      Programmer un nouvel atelier
    </Typography>
    <Paper variant="outlined" className={classes.root}>
      <FormAddWorkshop/>
    </Paper>
  </>
}

export default IndexWorkshop
