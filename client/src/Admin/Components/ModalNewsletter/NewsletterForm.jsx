import React, { useEffect }                    from 'react'
import { Form }                                from '../../../Hooks/useForm'
import { Button, Chip, Grid, TextField }       from '@material-ui/core'
import Controls                                from '../Controls/Controls'
import Input                                   from '../Controls/Input'
import { useDispatch, useSelector }            from 'react-redux'
import { Alert }                               from '@material-ui/lab'
import { requestApiGetNewsletter, resetEvent } from '../../../actions/adminAction'
import AlternateEmailIcon                      from '@material-ui/icons/AlternateEmail'
import Typography                              from '@material-ui/core/Typography'

const NewsletterForm = (props) => {
  const {
          onChange,
          values,
          open,
          inputLists,
          onInputListChange,
          onDeleteInput,
          onDeleteLabel,
          onSubmitNewInput,
          labelInputList
        } = props
  
  const dispatch = useDispatch()
  const {
          errorsCreateNews,
          successCreateNews
        }        = useSelector(state => state.adminReducers)
  useEffect(() => {
    if (successCreateNews) {
      setTimeout(() => {
        open()
        dispatch(resetEvent())
        dispatch(requestApiGetNewsletter())
      }, 1500)
    }
    // eslint-disable-next-line
  }, [successCreateNews])
  
  function isOdd (num) { return num % 2}
  return <>
    {successCreateNews && <Alert severity="success">{successCreateNews}</Alert>}
    <Form>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12} lg={6}>
          <Controls.Input
            error={!!errorsCreateNews.titleNews}
            value={values.titleNews}
            name="titleNews"
            onChange={onChange}
            size="small"
            helperText={errorsCreateNews.titleNews}
            label="Titre de la news"/>
        </Grid>
        <Grid item xs={12} md={12} lg={6}>
          <Input
            error={!!errorsCreateNews.template_id}
            helperText={errorsCreateNews.template_id}
            value={values.template_id}
            defaultValue={values.template_id}
            name="template_id"
            onChange={onChange}
            size="small"
            label="ID du template "/>
        </Grid>
        <Grid item xs={12}>
          <TextField
            error={!!errorsCreateNews.subjectEmail}
            helperText={errorsCreateNews.subjectEmail}
            label="Sujet de la news"
            name="subjectEmail"
            value={values.subjectEmail}
            onChange={onChange}
            variant="outlined"
            size="small"
            fullWidth
          />
        </Grid>
        {inputLists && inputLists.length > 0 &&
         <Grid item xs={12}>
           {inputLists.map((input, index) => (
             <>
               <div style={{ display: 'flex', justifyContent: 'flex-end', paddingRight: '.5rem' }}>
                 <Button size="small" variant="contained" disableElevation color="primary"
                         onClick={onSubmitNewInput} className="mr2">Valider le champs</Button>
                 <Button size="small" variant="contained" disableElevation color="secondary"
                         onClick={() => onDeleteInput(index)}>Supprimer le champs</Button>
               </div>
               <div key={index} style={{ display: 'flex' }}>
                 <TextField
                   label="Label défini dans SG"
                   name="indexLabel"
                   value={input.indexLabel}
                   onChange={(e) => {
                     onInputListChange(e, index)
                   }}
                   variant="outlined"
                   size="small"
                 />
                 <TextField
                   label="Ce que vous voulez dire"
                   name="content"
                   value={input.content}
                   onDeleteInput={(index) => onDeleteInput(index)}
                   onChange={(e) => onInputListChange(e, index)}
                   variant="outlined"
                   size="small"
                 />
               </div>
             </>))}
         </Grid>}
        {labelInputList && labelInputList.length > 0 &&
         <Grid item xs={12}>
           <Typography component="p" variant="subtitle2" gutterBottom>Label des datas dynamique ajouter pour le template sendGrid
             :</Typography>
           {labelInputList.map((label, index) => <Chip
             key={index}
             size="small"
             style={{ marginRight: '8px' }}
             icon={<AlternateEmailIcon/>}
             label={label.indexLabel}
             onDelete={() => onDeleteLabel(index)}
             color={isOdd(index) ? 'secondary' : 'primary'}
           />)}
         </Grid>}
        <Grid item xs={12}>
          <TextField
            error={!!errorsCreateNews.contentNews}
            helperText={errorsCreateNews.contentNews}
            label="Description de la newsletter"
            multiline
            rows={4}
            name="contentNews"
            value={values.contentNews}
            onChange={onChange}
            variant="outlined"
            fullWidth
          />
        </Grid>
      </Grid>
    </Form>
  </>
}

export default NewsletterForm
