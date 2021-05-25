import { makeStyles } from '@material-ui/core/styles'

const drawerWidth            = 240
export const useStyleSidebar = makeStyles((theme) => ({
  root           : {
    display: 'flex',
  },
  spacingItem    : {
    margin: theme.spacing(1)
  },
  appBarRightSide: {
    display       : 'flex',
    justifyContent: 'space-around',
    width         : '290px',
    marginLeft    : 'auto',
    alignItems    : 'center'
  },
  appBar         : {
    zIndex         : theme.zIndex.drawer + 1,
    backgroundColor: '#FFFFFF',
    color          : 'var(--color)',
    transition     : theme.transitions.create(['width', 'margin'], {
      easing  : theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift    : {
    marginLeft: drawerWidth,
    width     : `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing  : theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton     : {
    marginRight: 36,
  },
  hide           : {
    display: 'none',
  },
  drawer         : {
    width     : drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen     : {
    width     : drawerWidth,
    transition: theme.transitions.create('width', {
      easing  : theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose    : {
    transition                  : theme.transitions.create('width', {
      easing  : theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX                   : 'hidden',
    width                       : theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar        : {
    display       : 'flex',
    alignItems    : 'center',
    justifyContent: 'flex-end',
    padding       : theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content        : {
    flexGrow: 1,
    padding : theme.spacing(3),
    overflow: 'hidden'
  },
}))
