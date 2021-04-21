import React          from 'react'
import FormControl                             from '@material-ui/core/FormControl'
import { Input, InputLabel, MenuItem, Select } from '@material-ui/core'
import { makeStyles }                          from '@material-ui/core/styles'

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

const useStyles     = makeStyles((theme) => ({
  formControl: {
    margin  : theme.spacing(1),
    maxWidth: '100%',
    minWidth: '100%'
  }
}))
const ControlSelect = ({ filteredUser = [], handleInputChange, selected }) => {
  const classes = useStyles()
  return <>
    <FormControl className={classes.formControl}>
      <InputLabel>Participants</InputLabel>
      <Select
        name="membersWorkshop"
        multiple
        value={selected}
        onChange={handleInputChange}
        input={<Input/>}
        fullWidth={true}
        MenuProps={MenuProps}
      >
        {filteredUser.map((u) => (
          <MenuItem key={u._id} value={u._id}>
            {u.firstName + ' ' + u.lastName}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  </>
}

export default ControlSelect
