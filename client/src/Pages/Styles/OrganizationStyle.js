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
    },
    titleHero      : {
      [theme.breakpoints.down('sm')]: {
        fontSize  : '28px!important',
        lineHeight: '42px',
      }
    },
    titleResponsive: {
      fontSize                      : '2rem',
      lineHeight                    : '36px',
      marginBottom                  : 'calc(2 * var(--space))',
      [theme.breakpoints.down('sm')]: {
        fontSize    : '22px',
        lineHeight  : '36px',
        marginBottom: 'calc(1 * var(--space))'
      }
    }
  }))
