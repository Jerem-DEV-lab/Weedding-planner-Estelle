import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
import { useEffect }             from 'react'

const Toastify = ({ message = 'Veuillez renseigner un message' }) => {
  
  const ToastifyOptions = {
    type        : toast.TYPE.SUCCESS,
    autoClose   : 2000,
    position    : toast.POSITION.TOP_RIGHT,
    pauseOnHover: false,
  }
  useEffect(() => {
    function notify () {
      return toast(message, ToastifyOptions)
    }
    
    notify()
    // eslint-disable-next-line
  }, [message])
  
  return <ToastContainer/>
}

export default Toastify
