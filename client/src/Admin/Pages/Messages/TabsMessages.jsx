import React                          from 'react'
import { withStyles }                 from '@material-ui/core/styles'
import {
  Box,
  Checkbox,
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow, Tooltip
}                                     from '@material-ui/core'
import TableContainer                 from '@material-ui/core/TableContainer'
import ReplayRoundedIcon              from '@material-ui/icons/ReplayRounded'
import Button                         from '@material-ui/core/Button'
import { dateTimeParser }             from '../../../tools/helperDate'

const StyledTableRow  = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    '& :hover'          : {
      cursor: 'pointer'
    }
  },
}))(TableRow)
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.grey[50],
    color          : theme.palette.common.black,
  },
  body: {
    fontSize     : 14,
    textTransform: 'capitalize'
  },
}))(TableCell)

const useStyles = makeStyles(
  {
    table: {
      minWidth: 500,
    },
  })
export default function TabsMessages ({ messages, select, selected, openMessage }) {
  const classes  = useStyles()

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <Box mx={2} display="flex" width="100%">
              <Tooltip title="Sélectionner tous les messages">
                <Checkbox checked={selected} onClick={select}/>
              </Tooltip>
              <Tooltip title="Recharger les messages">
                <Button size="small"><ReplayRoundedIcon/></Button>
              </Tooltip>
            </Box>
          </TableRow>
        </TableHead>
        <TableBody>
          {messages.map((row) => (
            <StyledTableRow key={row._id}
                            onClick={() => openMessage(row.lastName, row.firstName, row.message, row.email, row._id )}>
              <StyledTableCell align="left">
                <Box>
                  <Checkbox
                    checked={selected}
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                  />
                </Box>
              </StyledTableCell>
              <StyledTableCell align="left">{row.lastName} {row.firstName}</StyledTableCell>
              <StyledTableCell align="left">
                <div style={{ width: 350, whiteSpace: 'nowrap' }}>
                  <Box component="div" textOverflow="ellipsis" overflow="hidden">
                    {row.message}
                  </Box>
                </div>
              </StyledTableCell>
              <StyledTableCell align="left">{dateTimeParser(row.createdAt)}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
