import React, { useEffect, useState }                                        from 'react'
import Button                                                                from '@material-ui/core/Button'
import Dialog                                                                from '@material-ui/core/Dialog'
import DialogActions                                                         from '@material-ui/core/DialogActions'
import DialogTitle                                                           from '@material-ui/core/DialogTitle'
import Slide                                                                 from '@material-ui/core/Slide'
import { DialogContent }                                                     from '@material-ui/core'
import TextField                                                             from '@material-ui/core/TextField'
import { makeStyles }                                                        from '@material-ui/core/styles'
import SaveIcon                                                              from '@material-ui/icons/Save'
import Alert                                                                 from '@material-ui/lab/Alert'
import { useDispatch, useSelector }                                          from 'react-redux'
import { requestApiChangePriceFormula, requestApiDeleteFormula, resetEvent } from '../../actions/adminAction'

const Transition = React.forwardRef(function Transition (props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})
const useStyles  = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width : '25ch',
    },
  },
}))

function FormUpdateFormula ({ formuleInfo }) {
  const classes              = useStyles()
  const dispatch             = useDispatch()
  const { changePriceError } = useSelector(state => state.adminReducers)
  
  const [formState, setFormState] = useState(
    {
      price: formuleInfo.price
    })
  const handleSubmit              = (e) => {
    e.preventDefault()
    dispatch(requestApiChangePriceFormula(formuleInfo._id, formState))
  }
  return <>
    <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
      <div>
        <TextField disabled label="Type de la formule" defaultValue={formuleInfo.type}/>
        <TextField disabled label="Nom de la formule" defaultValue={formuleInfo.name}/>
        {changePriceError ?
         <TextField
           error
           id="price"
           label="Prix de la formule"
           defaultValue={formState.price}
           helperText={changePriceError}
           onChange={(e) => setFormState({ price: e.target.value })}/>
                          : <TextField
           id="price"
           label="Prix de la formule"
           defaultValue={formuleInfo.price + ' €'}
           onChange={(e) => setFormState({ price: e.target.value })}/>}
        
        <TextField
          id="standard-helperText"
          label="Formule publier sur :"
          defaultValue={formuleInfo.formuleSection}
          disabled
        />
      </div>
      <div className="btn-center-x">
        <Button
          hover={true}
          variant="outlined"
          color="primary"
          type="submit"
          endIcon={<SaveIcon/>}>
          Sauvegarder
        </Button>
      </div>
    </form>
  </>
}

const ModalAdmin = ({ open, formuleInfo }) => {
  const { changePriceSuccess, changePriceError, deleteSuccess, deleteError } = useSelector(state => state.adminReducers)
  
  const dispatch                            = useDispatch()
  const handleClose                         = () => {
    open(false)
    return dispatch(resetEvent())
  }
  const [openFormUpdate, setOpenFormUpdate] = useState(false)
  
  const actionDelete = () => {
    dispatch(requestApiDeleteFormula(formuleInfo._id))
  }
  console.log(deleteSuccess)
  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle
          id="alert-dialog-slide-title">{openFormUpdate ? 'Modification du prix de la formule' : 'Quelles actions voulez-vous faire ?'}</DialogTitle>
        {deleteSuccess &&
         <Alert severity="success">
           {deleteSuccess}
         </Alert>}
        {deleteError &&
         <Alert severity="error">
           Impossible de supprimer la formule
         </Alert>}
        {openFormUpdate && <DialogContent dividers>
          {changePriceSuccess &&
           <Alert severity="success">
             {changePriceSuccess}
           </Alert>}
          {changePriceError &&
           <Alert severity="error">
             Veuillez vérifier le formulaire !
           </Alert>}
          <FormUpdateFormula formuleInfo={formuleInfo}/>
        </DialogContent>}
        <DialogActions>
          {!openFormUpdate && <>
            <Button onClick={() => setOpenFormUpdate(!openFormUpdate)} color="primary">
              Modifier le prix
            </Button>
            <Button onClick={actionDelete} color="secondary">
              Supprimer la formule
            </Button>
          </>}
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default ModalAdmin
