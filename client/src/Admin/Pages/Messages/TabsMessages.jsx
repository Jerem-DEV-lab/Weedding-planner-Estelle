import React                          from 'react'
import { makeStyles }                 from '@material-ui/core/styles'
import Table                          from '@material-ui/core/Table'
import TableBody                      from '@material-ui/core/TableBody'
import TableCell                      from '@material-ui/core/TableCell'
import TableContainer                 from '@material-ui/core/TableContainer'
import TableHead                      from '@material-ui/core/TableHead'
import TableRow                       from '@material-ui/core/TableRow'
import Paper                          from '@material-ui/core/Paper'
import { useDispatch }                from 'react-redux'
import { requestApiSetMessageIsRead } from '../../../actions/adminAction'

const useStyles = makeStyles(
  {
    table: {
      minWidth: 500,
    },
  })

export default function TabsMessages ({ messages }) {
  const classes     = useStyles()
  const dispatch    = useDispatch()
  const openMessage = (isRead = false, messageId) => {
    if (!isRead) {
      dispatch(requestApiSetMessageIsRead(messageId))
    }
  }
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>De : </TableCell>
            <TableCell align="center">Objet</TableCell>
            <TableCell align="center">Email : </TableCell>
            <TableCell align="center">Reçu le : </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {messages.map((row) => (
            <TableRow key={row._id} hover style={{ cursor: 'pointer' }}
                      onClick={() => openMessage(row.propertyMessage.isRead, row._id)}>
              <TableCell component="th" scope="row" style={{ fontWeight: !row.propertyMessage.isRead ? '600' : '' }}>
                {row.firstName}
              </TableCell>
              <TableCell align="center"
                         style={{ fontWeight: !row.propertyMessage.isRead ? '600' : '' }}>{row.organizationName}</TableCell>
              <TableCell align="center"
                         style={{ fontWeight: !row.propertyMessage.isRead ? '600' : '' }}>{row.email}</TableCell>
              <TableCell align="center" style={{ fontWeight: !row.propertyMessage.isRead ? '600' : '' }}>Le
                28/58/5221</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
