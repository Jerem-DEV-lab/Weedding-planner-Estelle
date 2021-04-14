import React             from 'react'
import { Avatar, Paper } from '@material-ui/core'
import Typography        from '@material-ui/core/Typography'
import { makeStyles }    from '@material-ui/core/styles'
import RequiredLabelText from '../RequiredLabelText/RequiredLabelText'

const useStyles = makeStyles((theme) => ({
  root : {
    maxWidth                    : '400px',
    padding                     : '1.55rem',
    '& .MuiTypography-paragraph': {
      margin: '1.2rem auto'
    },
  },
  color: 'red',
  large: {
    width : 120,
    height: 120,
    margin: '1rem auto'
  },
}))

const MUICardFormule = (
  {
    formuleTitle,
    formuleContent,
    pathImg,
    formuleSubtitle,
    formuleInfo,
    formuleOfferInfo,
    formulePrice,
    elevation = 2
  }) => {
  const classes = useStyles()
  return (
    <>
      <Paper className={classes.root} elevation={elevation}>
        <Typography variant="h4" component="h3" align={'center'}>
          {formuleTitle}
        </Typography>
        <Avatar alt="Remy Sharp" src={pathImg} className={classes.large}/>
        <Typography variant="h6" component="h3" align={'center'} gutterBottom={true} className={classes.subtile}>
          {formuleSubtitle}
        </Typography>
        <Typography variant="h6" align="center">
          
          {formuleInfo}&nbsp;<span style={{ color: 'var(--color-primary)', fontWeight: '600' }}>*</span>
        </Typography>
        <Typography variant="h3" align="center" gutterBottom={true}
                    style={{ fontWeight: '600' }}>
          {formulePrice}&nbsp;<span style={{ color: 'var(--color-primary)', fontWeight: '600' }}>*</span>
        </Typography>
        <Typography component="p" paragraph>
          {formuleContent}
        </Typography>
        <Typography
          style={{ fontWeight: '600', margin: 'auto', display: 'flex', alignItems: 'center', width: 'max-content' }}
          component="span" align="center">
          <RequiredLabelText size="20"/>&nbsp; {formuleOfferInfo}
        </Typography>
      </Paper>
    </>
  )
}

export default MUICardFormule
