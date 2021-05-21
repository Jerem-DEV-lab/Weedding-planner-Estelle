import { useState } from 'react'

const useHandleRequest = () => {
  const [success, setSuccess] = useState(null)
  const [errors, setErrors]   = useState(null)
  return {
    errors,
    success,
    setErrors,
    setSuccess
  }
}

export default useHandleRequest
