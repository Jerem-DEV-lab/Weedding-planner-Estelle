import Routes                       from './Components/Routes/Routes'
import { UserContext }              from './Context/UserContext'
import { useEffect }                from 'react'
import axios                        from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { loginUserSuccess }         from './actions/authenticatorAction'

function App () {
  const dispatch      = useDispatch()
  const userConnected = useSelector(state => state.userReducers)
  const fetchToken    = async () => {
    await axios.get('/check', {
                 withCredentials: true
               })
               .then(res => {
                 dispatch(loginUserSuccess(res.data, 'Connexion réussi'))
               })
               .catch(err => console.log('no token'))
  }
  useEffect(() => {
    setTimeout(() => {
      fetchToken()
    }, 1500)
  }, [userConnected.isLogged])
  return <>
    <UserContext.Provider value={userConnected}>
      <Routes/>
    </UserContext.Provider>
  </>
}

export default App
