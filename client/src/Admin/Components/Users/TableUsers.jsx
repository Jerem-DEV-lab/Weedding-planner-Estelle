import React                     from 'react'
import Table                     from '@material-ui/core/Table'
import TableBody                 from '@material-ui/core/TableBody'
import TableCell                 from '@material-ui/core/TableCell'
import TableContainer            from '@material-ui/core/TableContainer'
import TableHead                 from '@material-ui/core/TableHead'
import TableRow                  from '@material-ui/core/TableRow'
import Paper                     from '@material-ui/core/Paper'
import { Button, ButtonGroup }   from '@material-ui/core'
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined'
import CreateOutlinedIcon        from '@material-ui/icons/CreateOutlined'
import { useHistory }            from 'react-router-dom'

export default function TableUsers ({ userDetails }) {
  const history = useHistory()
  const goTo    = (userId) => {
    return history.push(`/admin/user/${userId}`)
  }
  return (
    <TableContainer component={Paper}>
      <Table aria-label="tableau-utilisateur">
        <TableHead>
          <TableRow>
            <TableCell align="start">Nom</TableCell>
            <TableCell align="start">Prénom</TableCell>
            <TableCell align="start">Email</TableCell>
            <TableCell align="start">N° téléphone</TableCell>
            <TableCell align="center">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {userDetails.map((user) => (
            <TableRow key={user._id}>
              <TableCell component="th" scope="row" align="start">
                {user.lastName}
              </TableCell>
              <TableCell align="start">{user.firstName}</TableCell>
              <TableCell align="start">{user.email}</TableCell>
              <TableCell align="start">{user.phone}</TableCell>
              <TableCell align="center">
                <ButtonGroup size="small" aria-label="small outlined button group">
                  <Button variant="contained" color="secondary" disableElevation><DeleteForeverOutlinedIcon/></Button>
                  <Button variant="contained" color="primary" disableElevation
                          onClick={() => goTo(user._id)}><CreateOutlinedIcon/></Button>
                </ButtonGroup>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
