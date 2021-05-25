import React             from 'react'
import Box               from '@material-ui/core/Box'
import Typography        from '@material-ui/core/Typography'

const HeaderSectionProfil = ({Icon, labelTitle, color}) => {
  return (
    <>
      <Box component="span" display="flex" alignItems="center">
        {Icon}
        <Typography variant="subtitle2" component="p" color={color}>
          {labelTitle}
        </Typography>
      </Box>
    </>
  )
}

export default HeaderSectionProfil
