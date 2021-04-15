import React, { useEffect } from 'react'
import { Switch, Route, Redirect }    from 'react-router-dom'
import Sidebar                        from '../Components/Sidebar/Sidebar'
import TableUsers                     from '../Components/Users/TableUsers'
import IndexFormules                  from './Formules/IndexFormules'
import IndexNewsLetter                from './NewsLetter/IndexNewsLetter'
import { useDispatch, useSelector }   from 'react-redux'
import { requestApiUsers }            from '../../actions/adminAction'

export default function IndexDashboardAdmin () {
  const dispatch          = useDispatch()
  const adminState        = useSelector(state => state.adminReducers)
  
  useEffect(() => {
    dispatch(requestApiUsers())
  }, [])
  return <>
    
    <Sidebar>
      <Switch>
        <Route path="/admin" exact>
          <TableUsers userDetails={adminState.listUser}/>
        </Route>
        <Route path="/admin/gestion-formules" exact>
          <IndexFormules/>
        </Route>
        <Route path="/admin/newsletter" exact>
          <IndexNewsLetter/>
        </Route>
        <Redirect to="/admin"/>
      </Switch>
    </Sidebar>
  </>
}
