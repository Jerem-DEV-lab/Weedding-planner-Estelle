import React                    from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Card                     from '@material-ui/core/Card'
import CardActionArea           from '@material-ui/core/CardActionArea'
import CardActions              from '@material-ui/core/CardActions'
import CardContent              from '@material-ui/core/CardContent'
import CardMedia                from '@material-ui/core/CardMedia'
import Button                   from '@material-ui/core/Button'
import Typography               from '@material-ui/core/Typography'
import { BiMailSend }           from 'react-icons/bi'

const useStyles = makeStyles(() => ({
  root : {
    maxWidth: 345,
    margin  : 'auto'
  },
  media: {
    height: 140,
  },
}))

const CardNews = (props) => {
  const {
          pathImg,
          titleImage,
          titleCard,
          contentCard,
          labelBtn1,
          labelBtn2,
          labelBtn3,
          onClick1,
          onClick2,
          onClick3
        }       = props
  const theme   = useTheme()
  const classes = useStyles()
  
  return <Card className={`${classes.root}`}>
    <CardActionArea>
      <CardMedia
        className={classes.media}
        image={pathImg}
        title={titleImage}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="h2">
          {titleCard}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {contentCard}
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <Button size="small" color="primary" onClick={onClick1}>
        {labelBtn1}
      </Button>
      <Button size="small" color="secondary" onClick={onClick2}>
        {labelBtn2}
      </Button>
      <Button startIcon={<BiMailSend/>} size="small" style={{ color: theme.palette.success.dark }} onClick={onClick3}>
        {labelBtn3}
      </Button>
    </CardActions>
  </Card>
}

export default CardNews
