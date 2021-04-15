import React          from 'react'
import {
  AppBar, Checkbox,
  Container,
  Dialog,
  FormControl,
  Grid, Input,
  InputLabel, ListItemText, MenuItem,
  Paper, Select,
  Slide,
  TextField,
  Typography
}                     from '@material-ui/core'
import Toolbar
                      from '@material-ui/core/Toolbar'
import IconButton
                      from '@material-ui/core/IconButton'
import CloseIcon
                      from '@material-ui/icons/Close'
import Button
                      from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import SendRoundedIcon
                      from '@material-ui/icons/SendRounded'

const Transition = React.forwardRef(function Transition (props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})
const useStyles  = makeStyles((theme) => ({
  root       : {
    padding: theme.spacing(4),
    width  : '100%',
  },
  appBar     : {
    position: 'relative',
  },
  title      : {
    marginLeft: theme.spacing(2),
    flex      : 1,
  },
  formControl: {
    margin  : theme.spacing(1),
    minWidth: 120,
    width   : '100%',
    maxWidth: '540px',
  },
}))

const EntriesForm = [
  { label: 'Titre de la news', id: 'titleNews', required: true, type: 'String' },
  { label: 'Contenu de la news', id: 'contentNews', required: true, type: 'String' },
  { label: 'Catégorie de la news', id: 'categoryNews', required: true, type: 'Select', multiple: false },
  { label: 'Sélectionner les utilisateurs', id: 'users', required: true, type: 'Select', multiple: true }
]

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
]

const ITEM_HEIGHT      = 48
const ITEM_PADDING_TOP = 8
const MenuProps        = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width    : 250,
    },
  },
}

function ModalCreateNewsletter ({ open }) {
  const classes                     = useStyles()
  const [personName, setPersonName] = React.useState([])
  
  const handleChange = (event) => {
    setPersonName(event.target.value)
  }
  
  const [state, setState] = React.useState({
                                             age : "Sélectionner une catégori",
                                             name: 'hai',
                                           })
  /*  const handleChangeMultiple = (event) => {
   const { options } = event.target
   const value       = []
   for (let i = 0, l = options.length; i < l; i += 1) {
   if (options[i].selected) {
   value.push(options[i].value)
   }
   }
   setPersonName(value)
   }*/
  return <>
    <Dialog fullScreen open={open} onClose={open} TransitionComponent={Transition}>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={open} aria-label="close">
            <CloseIcon/>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Envoi de la newsletter
          </Typography>
          <Button autoFocus color="inherit" endIcon={<SendRoundedIcon/>} onClick={open}>
            Envoyer
          </Button>
        </Toolbar>
      </AppBar>
      <Grid container>
        <Grid item xs={12}>
          <Container maxWidth="lg">
            <Grid container spacing={0}>
              {EntriesForm.map(entry => <>
                <Grid item lg={6}>
                  <div className={classes.root}>
                    <Paper>
                        {entry.type === 'String' && <>
                          <TextField
                            id=""
                            label={entry.label}
                            size="medium"
                            defaultValue="Hello World"
                            variant="outlined"
                          />
                        </>}
                        {entry.type === 'Select' && entry.multiple && <>
                          <InputLabel id="demo-mutiple-checkbox-label">{entry.label}</InputLabel>
                          <Select
                            onChange={handleChange}
                            labelId={entry.id}
                            id={entry.id}
                            autoWidth={false}
                            multiple
                            value={personName}
                            input={<Input/>}
                            size={'small'}
                            renderValue={(selected) => selected.length > 0 ? `${selected.length} utilisateur(s) sélectionner` : 'Aucun utilisateur n\'a été sélectionner'}
                            MenuProps={MenuProps}
                            defaultValue={'test'}
                            className={classes.formControl}>
                            {names.map((name) => (
                              <MenuItem key={name} value={name}>
                                <Checkbox checked={personName.indexOf(name) > -1}/>
                                <ListItemText primary={name}/>
                              </MenuItem>
                            ))}
                          </Select>
                        </>}
                        {entry.type === 'Select' && !entry.multiple && <>
                          <InputLabel htmlFor="outlined-age-native-simple">Age</InputLabel>
                          <Select
                            native
                            value={state.age}
                            onChange={handleChange}
                            label={entry.label}
                            inputProps={{
                              name: entry.label,
                              id  : 'outlined-age-native-simple',
                            }}
                          >
                            <option value="Sélectionner une catégorie"/>
                            <option value={10}>Ten</option>
                            <option value={20}>Twenty</option>
                            <option value={30}>Thirty</option>
                          </Select>
                        </>}
                    </Paper>
                  </div>
                </Grid>
              </>)}
            </Grid>
          </Container>
        </Grid>
      </Grid>
    </Dialog>
  </>
}

export default ModalCreateNewsletter
