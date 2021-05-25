import React, { useState } from 'react'
import clsx                  from 'clsx'
import { useTheme }          from '@material-ui/core/styles'
import Drawer                from '@material-ui/core/Drawer'
import AppBar                from '@material-ui/core/AppBar'
import Toolbar               from '@material-ui/core/Toolbar'
import List                  from '@material-ui/core/List'
import Typography            from '@material-ui/core/Typography'
import Divider               from '@material-ui/core/Divider'
import IconButton            from '@material-ui/core/IconButton'
import MenuIcon              from '@material-ui/icons/Menu'
import ChevronLeftIcon       from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon      from '@material-ui/icons/ChevronRight'
import ListItem              from '@material-ui/core/ListItem'
import ListItemIcon          from '@material-ui/core/ListItemIcon'
import ListItemText          from '@material-ui/core/ListItemText'
import MailIcon              from '@material-ui/icons/Mail'
import { useStyleSidebar }   from './StyleSidebar'
import { Avatar, Badge }     from '@material-ui/core'
import { SidebarAdminItems } from './SidebarItems'
import { Link }              from 'react-router-dom'
import { useSelector }       from 'react-redux'
import NavAvatarUser         from '../../../Components/NavBar/NavAvatarUser'

export default function Sidebar ({ messages, children }) {
  const classes         = useStyleSidebar()
  const theme           = useTheme()
  const [open, setOpen] = useState(true)
  
  function checkMessageStatus (message) {
    return message.propertyMessage.isRead === false
  }
  
  const handleDrawerOpen        = () => {
    setOpen(true)
  }
  const handleDrawerClose       = () => {
    setOpen(false)
  }
  const { userInfo } = useSelector(state => state.userReducers)
  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        elevation={0}
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}>
            <MenuIcon/>
          </IconButton>
          <div className={classes.appBarRightSide}>
            <Link to={'/admin/messages'}>
              <Badge badgeContent={messages.filter(checkMessageStatus).length} color="primary">
                <MailIcon/>
              </Badge>
            </Link>
            <Avatar alt="avatar utilisateur" src={userInfo.userAvatar}/>
            <NavAvatarUser label={`${userInfo.firstName} ${userInfo.lastName}`}
                           userInfo={userInfo}/>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen] : open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
                        [classes.drawerOpen] : open,
                        [classes.drawerClose]: !open,
                      }),
        }}>
        <div className={classes.toolbar}>
          <Link to="/">
            <Typography variant="h6" noWrap>Côté campagne</Typography>
          </Link>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon/> : <ChevronLeftIcon/>}
          </IconButton>
        </div>
        <Divider/>
        <List>
          {SidebarAdminItems.map((item, index) => (
            <ListItem key={index} button>
              <Link to={item.url}><ListItemIcon>{item.icons}</ListItemIcon></Link>
              <Link to={item.url}><ListItemText primary={item.label}/></Link>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar}/>
        {children}
      </main>
    </div>
  )
}
