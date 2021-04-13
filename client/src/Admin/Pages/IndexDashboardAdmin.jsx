import React, { useEffect, useState } from 'react'
import Sidebar                        from '../Components/Sidebar/Sidebar'
import { Grid }                       from '@material-ui/core'
import TableUsers                     from '../Components/Users/TableUsers'
import axios                          from 'axios'
import { Switch, Route }              from 'react-router-dom'

export default function IndexDashboardAdmin () {
  const [users, setUsers] = useState([])
  const getUsersDb        = () => {
    axios.get('/admin/get-users')
         .then(res => setUsers(res.data.users))
         .catch(err => console.log(err))
  }
  useEffect(() => {
    getUsersDb()
  }, [])
  return <>
    
    <Sidebar>
      <Grid container spacing={3}>
        <Switch>
          <Route path="/admin" exact>
            <TableUsers userDetails={users}/>
          </Route>
        </Switch>
      </Grid>
    </Sidebar>
  </>
}
