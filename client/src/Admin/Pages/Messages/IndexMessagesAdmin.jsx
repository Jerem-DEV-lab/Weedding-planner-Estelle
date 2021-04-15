import React           from 'react'
import TabsMessages    from './TabsMessages'
import { useSelector } from 'react-redux'

const IndexMessagesAdmin = () => {
  const adminInfo = useSelector(state => state.adminReducers)
  return <>
    <TabsMessages messages={adminInfo.messages}/>
  </>
}

export default IndexMessagesAdmin
