import Routes                  from './Components/Routes/Routes'
import { UserContext }         from './Context/UserContext'
import { useEffect, useState } from 'react'
import axios                   from 'axios'
import { useTranslation }      from 'react-i18next'
function App () {
  const [uid, setUid] = useState(
    {
      isLogged: false,
      userId  : null,
      userRole: 'ROLE_USER'
    })
  const fetchToken    = async () => {
    await axios.get('/check', {
                 withCredentials: true
               })
               .then(res => {
                 setUid({
                          isLogged: true,
                          ...res.data
                        })
               })
               .catch(err => console.log('no token'))
  }
  useEffect(() => {
    fetchToken()
    if (uid.isLogged === true) {
      console.log('connected')
    }
  }, [uid.isLogged])
  const { t } = useTranslation()
  return <>
    <UserContext.Provider value={uid}>
      <Routes/>
    </UserContext.Provider>
  </>
}

export default App
