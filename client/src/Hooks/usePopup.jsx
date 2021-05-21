import { useState } from 'react'

const usePopup = (initialValue) => {
  const [target, setTarget] = useState(initialValue)
  return {
    target,
    setTarget
  }
}

export default usePopup
