import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles(theme => (
  {
    title     : {
      fontSize     : '26px',
      lineHeight   : 1.5,
      fontWeight   : '500',
      textTransform: 'uppercase',
      marginBottom : '.75rem'
    },
    paragraphe: {
      maxWidth  : '90%',
      margin    : 'auto',
      fontWeight: '500',
      textAlign : 'justify',
      lineHeight: 1.5,
    }
  }))
