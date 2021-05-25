import React        from 'react'
import Box          from '@material-ui/core/Box'
import { useTheme } from '@material-ui/core'

const ContentSectionProfil = ({children}) => {
  const theme = useTheme()
  return (
    <>
      <Box component="div" marginY={theme.spacing(0.2)}>
        {children}
      </Box>
    </>
  )
}

export default ContentSectionProfil
