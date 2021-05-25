import React                          from 'react'
import HeaderModalNewsletter          from './HeaderModalNewsletter'
import NewsletterForm                 from './NewsletterForm'
import { Paper }                      from '@material-ui/core'
import { makeStyles }                 from '@material-ui/core/styles'
import { useForm }                    from '../../../Hooks/useForm'
import { useDispatch }                from 'react-redux'
import { requestApiCreateNewsletter } from '../../../actions/adminAction'

const useStyles = makeStyles(theme => (
  {
    PageContent: {
      margin : theme.spacing(5),
      padding: theme.spacing(3)
    }
  }
))

const initialFValue = {
  titleNews   : '',
  contentNews : '',
  template_id: ''
}

function ModalCreateNewsletter ({ open }) {
  const classes                       = useStyles()
  const { values, handleChangeInput } = useForm(initialFValue)
  const dispatch                      = useDispatch()
  
  const sendForm = (e) => {
    e.preventDefault()
    dispatch(requestApiCreateNewsletter(values))
  }
  return <>
    <HeaderModalNewsletter open={open} onClickBtn={sendForm}>
      <Paper className={classes.PageContent}>
        <NewsletterForm open={open} values={values} onChange={handleChangeInput}/>
      </Paper>
    </HeaderModalNewsletter>
  </>
}

export default ModalCreateNewsletter
