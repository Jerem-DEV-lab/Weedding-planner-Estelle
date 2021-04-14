import React, { useEffect, useState } from 'react'
import { makeStyles }                 from '@material-ui/core/styles'
import axios                          from 'axios'
import { Paper }                      from '@material-ui/core'
import TableBody                      from '@material-ui/core/TableBody'
import TableCell                      from '@material-ui/core/TableCell'
import TableContainer                 from '@material-ui/core/TableContainer'
import TableHead                      from '@material-ui/core/TableHead'
import TablePagination                from '@material-ui/core/TablePagination'
import TableRow                       from '@material-ui/core/TableRow'
import Table                          from '@material-ui/core/Table'
import ModalAdmin                     from '../../Components/ModalAdmin'
import { useDispatch, useSelector }   from 'react-redux'
import { requestApiFormula }          from '../../../actions/adminAction'

const useStyles = makeStyles(
  {
    root     : {
      width : '100%',
      cursor: 'Pointer'
    },
    container: {
      maxHeight: 440,
    },
  })

const columns = [
  {
    id   : 'type', label: 'Type de la formule', minWidth: 100,
    align: 'justify'
  },
  {
    id   : 'name', label: 'Nom de la formule', minWidth: 100,
    align: 'justify',
  },
  {
    id      : 'descriptif',
    label   : 'Descriptif de la formule',
    minWidth: 100,
    align   : 'justify',
  },
  {
    id      : 'price',
    label   : 'Prix de la formule',
    minWidth: 100,
    align   : 'justify',
  },
  {
    id      : 'formuleSection',
    label   : 'Formule publier sur la page',
    minWidth: 170,
    align   : 'justify',
  }
]

const IndexFormules = () => {
  const classes                       = useStyles()
  const [page, setPage]               = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(10)
  const dispatch                      = useDispatch()
  const adminState                    = useSelector(state => state.adminReducers)
  const [openModal, setOpenModal]     = useState(
    {
      open  : false,
      target: {}
    })
  useEffect(() => {
    dispatch(requestApiFormula())
  }, [])
  
  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }
  
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }
  useEffect(() => {
    if (adminState.status === 'closed') {
      setOpenModal({ ...openModal, open: false, target: {} })
    }
  }, [adminState.status])
  return <>
    {openModal.open &&
     <ModalAdmin formuleInfo={openModal.target}
                 open={(value) => setOpenModal({ ...openModal, open: value })}/>}
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {adminState.formulas.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row._id}
                          onClick={() => setOpenModal({ ...openModal, target: row, open: true })}>
                  {columns.map((column) => {
                    const value = row[column.id]
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {value}
                      </TableCell>
                    )
                  })}
                </TableRow>)
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={adminState.formulas.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
        labelRowsPerPage={'Nombre de formules par pages'}
      />
    </Paper>
  </>
}

export default IndexFormules
