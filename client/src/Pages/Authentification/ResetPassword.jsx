import React         from 'react'
import { useParams } from 'react-router-dom'

const ResetPasswordForm = () => {
  const {tokenReset} = useParams()
  return (
    <div>
      reset : {tokenReset}
    </div>
  )
}

export default ResetPasswordForm
