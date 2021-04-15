import React, { useEffect }                   from 'react'
import { Switch, Route, Redirect }            from 'react-router-dom'
import Sidebar                                from '../Components/Sidebar/Sidebar'
import TableUsers                             from '../Components/Users/TableUsers'
import IndexFormules                          from './Formules/IndexFormules'
import IndexNewsLetter                        from './NewsLetter/IndexNewsLetter'
import { useDispatch, useSelector }           from 'react-redux'
import { requestApiMessage, requestApiUsers } from '../../actions/adminAction'
import IndexMessagesAdmin                     from './Messages/IndexMessagesAdmin'

export default function IndexDashboardAdmin () {
  const dispatch   = useDispatch()
  const adminState = useSelector(state => state.adminReducers)

  useEffect(() => {
    dispatch(requestApiUsers())
    dispatch(requestApiMessage())
  }, [])
  
  return <>
    
    <Sidebar messages={adminState.messages}>
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
        <Route path="/admin/messages" exact>
          <IndexMessagesAdmin/>
        </Route>
        <Redirect to="/admin"/>
      </Switch>
    </Sidebar>
  </>
}
