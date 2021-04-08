import Routes                  from './Components/Routes/Routes'
import { UserContext }         from './Context/UserContext'
import { useEffect, useState } from 'react'
import axios                   from 'axios'
import { useDispatch }         from 'react-redux'
import { loginUserSuccess }    from './actions/authenticatorAction'

function App () {
  const [uid, setUid] = useState(
    {
      isLogged: false,
      userId  : null,
      userRole: 'ROLE_USER'
    })
  const dispatch      = useDispatch()
  const fetchToken    = async () => {
    await axios.get('/check', {
                 withCredentials: true
               })
               .then(res => {
                 setUid({
                          isLogged: true,
                          ...res.data
                        })
                 dispatch(loginUserSuccess(res.data, ''))
               })
               .catch(err => console.log('no token'))
  }
  useEffect(() => {
    fetchToken()
  }, [uid.isLogged])
  return <>
    <UserContext.Provider value={uid}>
      <Routes/>
    </UserContext.Provider>
  </>
}

export default App
