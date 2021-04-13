import React, { useState }                       from 'react'
import clsx                                      from 'clsx'
import { useTheme }                              from '@material-ui/core/styles'
import Drawer                                    from '@material-ui/core/Drawer'
import AppBar                                    from '@material-ui/core/AppBar'
import Toolbar                                   from '@material-ui/core/Toolbar'
import List                                      from '@material-ui/core/List'
import CssBaseline                               from '@material-ui/core/CssBaseline'
import Typography                                from '@material-ui/core/Typography'
import Divider                                   from '@material-ui/core/Divider'
import IconButton                                from '@material-ui/core/IconButton'
import MenuIcon                                  from '@material-ui/icons/Menu'
import ChevronLeftIcon                           from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon                          from '@material-ui/icons/ChevronRight'
import ListItem                                  from '@material-ui/core/ListItem'
import ListItemIcon                              from '@material-ui/core/ListItemIcon'
import ListItemText                              from '@material-ui/core/ListItemText'
import MailIcon                                  from '@material-ui/icons/Mail'
import { useStyleSidebar }                       from './StyleSidebar'
import { Avatar, Badge, Button, Menu, MenuItem } from '@material-ui/core'
import { SidebarAdminItems }                     from './SidebarItems'
import { Link }                                  from 'react-router-dom'

export default function Sidebar ({children}) {
  const classes         = useStyleSidebar()
  const theme           = useTheme()
  const [open, setOpen] = useState(false)
  
  const handleDrawerOpen = () => {
    setOpen(true)
  }
  
  const handleDrawerClose       = () => {
    setOpen(false)
  }
  const [anchorEl, setAnchorEl] = useState(null)
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  
  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <div className={classes.root}>
      <CssBaseline/>
      <AppBar
        position="fixed"
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
            })}
          >
            <MenuIcon/>
          </IconButton>
          <Typography variant="h6" noWrap>
            Mini variant drawer
          </Typography>
          <div className={classes.appBarRightSide}>
            <Button>
              <Badge badgeContent={4} color="primary">
                <MailIcon/>
              </Badge>
            </Button>
            <Avatar alt="Remy Sharp" src={'/assets/evolution.jpg'}/>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
              John Doe
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
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
          <Typography variant="h6" noWrap>Côté campagne</Typography>
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
