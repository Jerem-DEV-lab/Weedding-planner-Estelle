import HomeIcon   from '@material-ui/icons/Home'
import PeopleIcon from '@material-ui/icons/People'
import EmailIcon  from '@material-ui/icons/Email'
import LoyaltyIcon from '@material-ui/icons/Loyalty';
export const SidebarAdminItems = [
  {
    label: 'Dashboard',
    url  : '/admin',
    icons: <HomeIcon/>
  },
  {
    label: 'Utilisateurs',
    url  : '/admin/users',
    icons: <PeopleIcon/>
  },
  {
    label: 'Messages',
    url  : '/admin/messages',
    icons: <EmailIcon/>
  },
  {
    label: 'Gestion formule',
    url  : '/admin/gestion-formules',
    icons: <LoyaltyIcon/>
  },
  {
    label: 'Messages',
    url  : '/admin/messages',
    icons: <EmailIcon/>
  },
]
