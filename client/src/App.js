import Routes                            from './Components/Routes/Routes'
import { UserContext }                   from './Context/UserContext'
import { useEffect, useState }           from 'react'
import axios                             from 'axios'
import { useDispatch, useSelector }      from 'react-redux'
import { loginUserSuccess }              from './actions/authenticatorAction'
import { ThemeProvider, createMuiTheme } from '@material-ui/core'

const theme = createMuiTheme(
  {
    typography: {
      fontFamily: [
        '"Montserrat"',
        '-apple-system',
        'BlinkMacSystemFont'
      ].join(','),
    },
  })

function App () {
  const [userLogged, setUserLogged] = useState(
    {
      isLogged: false,
      userId  : null,
      userRole: 'ROLE_USER'
    })
  const { isLogged }                = useSelector(state => state.userReducers)
  const value                       = { userLogged, setUserLogged }
  const dispatch                    = useDispatch()
  const fetchToken                  = async () => {
    await axios.get('/check', {
                 withCredentials: true
               })
               .then(res => {
                 setUserLogged(
                   {
                     isLogged: true,
                     userId  : res.data.userId,
                     userRole: res.data.roles
                   })
                 dispatch(loginUserSuccess(res.data, res.data.message))
               })
               .catch(() => {
                 setUserLogged(
                   {
                     isLogged: false,
                     userId  : null,
                     userRole: 'ROLE_USER'
                   })
               })
  }
  useEffect(() => {
    fetchToken()
    
  }, [userLogged.isLogged])
  
  useEffect(() => {
    if (isLogged || userLogged.isLogged) {
      fetchToken()
    }
  }, [isLogged, userLogged.isLogged])
  return <>
    <ThemeProvider theme={theme}>
      <UserContext.Provider value={value}>
        <Routes/>
      </UserContext.Provider>
    </ThemeProvider>
  </>
  
}

export default App
