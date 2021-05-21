import { useState }   from 'react'
import { makeStyles } from '@material-ui/core/styles'

export function useForm (initialValues) {
  const [values, setValues] = useState(initialValues)
  const handleChangeInput   = (e) => {
    const { name, value } = e.target
    setValues(
      {
        ...values,
        [name]: value
      })
  }
  return {
    values,
    setValues,
    handleChangeInput
  }
}


const useStyles = makeStyles(theme => (
  {
    root: {
      '& .MuiFormControl-root': {
        width : '100%',
        margin: theme.spacing(1)
      }
    }
  }))

export function Form ({ onSubmit, children }) {
  const classes = useStyles()
  return <>
    <div className={classes.root}>
      <form onSubmit={onSubmit}>
        {children}
      </form>
    </div>
  </>
}
