import React, { useEffect }                    from 'react'
import { Form }                                from '../../../Hooks/useForm'
import { Grid, TextField }                     from '@material-ui/core'
import Controls                                from '../Controls/Controls'
import Input                                   from '../Controls/Input'
import { useDispatch, useSelector }            from 'react-redux'
import { Alert }                               from '@material-ui/lab'
import { requestApiGetNewsletter, resetEvent } from '../../../actions/adminAction'

const NewsletterForm = (props) => {
  const { onChange, values, open }              = props
  const dispatch                                = useDispatch()
  const { errorsCreateNews, successCreateNews } = useSelector(state => state.adminReducers)
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
  return <>
    {successCreateNews && <Alert severity="success">{successCreateNews}</Alert>}
    <Form>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12} lg={6}>
          {errorsCreateNews.titleNews ?
           <Controls.Input
             error
             value={values.titleNews}
             name="titleNews"
             onChange={onChange}
             size="small"
             helperText={errorsCreateNews.titleNews}
             label="Titre de la news"/> :
           <Input
             value={values.titleNews}
             size="small"
             name="titleNews"
             onChange={onChange}
             label="Titre de la news"/>}
        </Grid>
        <Grid item xs={12} md={12} lg={6}>
          <Input
            value={values.template_id}
            defaultValue={values.template_id}
            name="template_id"
            onChange={onChange}
            size="small"
            label="ID du template "/>
        </Grid>
        <Grid item xs={12}>
          {errorsCreateNews.subjectEmail ?
           <TextField
             error
             helperText={errorsCreateNews.subjectEmail}
             label="Sujet de la news"
             name="subjectEmail"
             value={values.subjectEmail}
             onChange={onChange}
             variant="outlined"
             size="small"
             fullWidth
           /> :
           <TextField
             label="Sujet de la news"
             name="subjectEmail"
             size="small"
             value={values.subjectEmail}
             onChange={onChange}
             variant="outlined"
             fullWidth
           />}
        </Grid>
        <Grid item xs={12}>
          {errorsCreateNews.contentNews ?
           <TextField
             error
             helperText={errorsCreateNews.contentNews}
             label="Description de la newsletter"
             multiline
             rows={4}
             name="contentNews"
             value={values.contentNews}
             onChange={onChange}
             variant="outlined"
             fullWidth
           /> :
           <TextField
             label="Description de la newsletter"
             multiline
             rows={1}
             name="contentNews"
             value={values.contentNews}
             onChange={onChange}
             variant="outlined"
             fullWidth
           />}
        </Grid>
      </Grid>
    </Form>
  </>
}

export default NewsletterForm
