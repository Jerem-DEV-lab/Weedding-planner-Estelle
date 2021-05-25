import React                      from 'react'
import { Button, Menu, MenuItem } from '@material-ui/core'
import KeyboardArrowDownIcon      from '@material-ui/icons/KeyboardArrowDown'
import { Link }                   from 'react-router-dom'
import AccountBoxIcon             from '@material-ui/icons/AccountBox'
import Typography                 from '@material-ui/core/Typography'
import DashboardIcon              from '@material-ui/icons/Dashboard'
import ExitToAppIcon              from '@material-ui/icons/ExitToApp'
import { useDispatch }            from 'react-redux'
import { requestApiLogoutUser }   from '../../actions/authenticatorAction'

const NavAvatarUser = ({ label, userInfo }) => {
  const [anchorEl, setAnchorEl] = React.useState(null)
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  
  const handleClose = () => {
    setAnchorEl(null)
  }
  const dispatch    = useDispatch()
  const logout      = () => {
    dispatch(requestApiLogoutUser())
  }
  
  return (
    <>
      <Button endIcon={<KeyboardArrowDownIcon/>} color="inherit" onClick={handleClick}>
        {label}
      </Button>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        
        {userInfo.roles && userInfo.roles.includes('ROLE_ADMIN') &&
         <Link to={'/admin/users'}>
           <MenuItem dense onClick={handleClose}>
             <DashboardIcon fontSize="small" color="action" className="mr1"/>
             Administration
           </MenuItem>
         </Link>}
        <Link to={`/profil/${userInfo._id}`}>
          <MenuItem dense onClick={handleClose}>
            <AccountBoxIcon fontSize="small" color="action" className="mr1"/>
            <Typography noWrap variant="inherit">
              Mon profile
            </Typography>
          </MenuItem>
        </Link>
        <MenuItem dense onClick={logout}>
          <ExitToAppIcon fontSize="small" color="action" className="mr1"/>
          Déconnexion
        </MenuItem>
      </Menu>
    </>
  )
}

export default NavAvatarUser
