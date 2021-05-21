import React                             from 'react'
import { Card, CardActions, makeStyles } from '@material-ui/core'
import CardContent                       from '@material-ui/core/CardContent'
import Typography                        from '@material-ui/core/Typography'
import Button                            from '@material-ui/core/Button'
import { useTranslation }                from 'react-i18next'
import injectHtmlCode                    from '../../tools/injectHtml'

const useStyles   = makeStyles((theme) => ({
  root       : {
    display       : 'flex',
    flexDirection : 'column',
    justifyContent: 'space-between',
    minWidth      : 275,
    height        : '100%'
  },
  cardContent: {
    display      : 'flex',
    alignContent : 'space-between',
    flexDirection: 'column',
    height       : '100%'
  },
  title      : {
    fontSize  : 18,
    fontWeight: 500,
    textAlign : 'center'
  },
  paragraphe : {
    margin    : '.75rem 0',
    lineHeight: '1.6',
    textAlign : 'justify'
  },
  price      : {
    fontSize  : '35px',
    fontWeight: '500'
  },
  priceFrom  : {
    display   : 'block',
    fontSize  : '18px',
    fontWeight: '400'
  }
}))
const FormuleCard = ({
                       formuleTitle = '',
                       cardContent,
                       formulePrice = '',
                       injectHtmlPara
                     }) => {
  const classes = useStyles()
  const { t }   = useTranslation()
  return <>
    <Card className={classes.root} variant="outlined">
      <CardContent className={classes.cardContent}>
        <Typography variant="h5" className={classes.title} color="textPrimary" component="h2">
          {formuleTitle}
        </Typography>
        <Typography variant="body2" className={classes.paragraphe} color="textSecondary" component="p">
          {cardContent ? cardContent : 'Lorem  exercitationem illum, ipsa iusto molestiae, perferendis perspiciatis' +
                                       ' porro, quisquam ratione tempora tempore\n totam?'
          }
        </Typography>
        <Typography variant="body2" className={classes.price} color="textPrimary" component="p">
          <span className={classes.priceFrom}>{t('PriceFrom')}</span>
          {formulePrice} € <span style={{ color: '#F8B664', fontWeight: '600' }}>*</span>
        </Typography>
      </CardContent>
      <CardActions style={{ justifyContent: 'center' }}>
        <Button size="medium" style={{ backgroundColor: '#ECD5B8' }}>{t('AskForQuote')}</Button>
      </CardActions>
    </Card>
  </>
}

export default FormuleCard
