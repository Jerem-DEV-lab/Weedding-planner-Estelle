import React                          from 'react'
import HeaderModalNewsletter          from './HeaderModalNewsletter'
import NewsletterForm                 from './NewsletterForm'
import { Button, Paper }              from '@material-ui/core'
import { makeStyles }                 from '@material-ui/core/styles'
import { useForm }                    from '../../../Hooks/useForm'
import { useDispatch }                from 'react-redux'
import { requestApiCreateNewsletter } from '../../../actions/adminAction'
import Box                            from '@material-ui/core/Box'
import AddCircleOutlineIcon           from '@material-ui/icons/AddCircleOutline'

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

function ModalCreateNewsletter ({ open, addInput, newInputData, inputLists, onInputListChange, onDeleteInput, onSubmitNewInput, labelInputList, onDeleteLabel}) {
  const classes                       = useStyles()
  const { values, handleChangeInput } = useForm(initialFValue)
  const dispatch                      = useDispatch()
  
  const sendForm = (e) => {
    e.preventDefault()
    dispatch(requestApiCreateNewsletter({...values, dynamicDatas: labelInputList}))
  }
  return <>
    <HeaderModalNewsletter open={open} onClickBtn={sendForm}>
      <Paper className={classes.PageContent}>
        <Box display="flex" justifyContent="flex-end">
          <Button
            startIcon={<AddCircleOutlineIcon/>}
            variant="outlined"
            disableElevation
            size="small"
            color="primary"
            onClick={addInput}>Ajouter les datas dynamics
          </Button>
        </Box>
        <NewsletterForm open={open} values={values} onChange={handleChangeInput} newInputData={newInputData}
                        onInputListChange={onInputListChange} labelInputList={labelInputList} onDeleteLabel={onDeleteLabel}
                        onDeleteInput={onDeleteInput} onSubmitNewInput={onSubmitNewInput} inputLists={inputLists}/>
      </Paper>
    </HeaderModalNewsletter>
  </>
}

export default ModalCreateNewsletter
