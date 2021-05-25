import { makeStyles } from '@material-ui/core'

export const useGeneralStyle = makeStyles(theme => (
  {
    marginBottom2: {
      marginBottom: theme.spacing(1)
    },
    textBold     : {
      fontWeight: '500'
    },
    textUppercase: {
      textTransform: 'uppercase'
    },
    textIndent2  : {
      textIndent: theme.spacing(2)
    },
    textIndent1  : {
      textIndent: theme.spacing(1)
    },
    emailColor   : {
      color     : theme.palette.primary.main,
      fontWeight: '400'
    }
  }))
