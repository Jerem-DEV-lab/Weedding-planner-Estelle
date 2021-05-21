import PeopleIcon      from '@material-ui/icons/People'
import EmailIcon       from '@material-ui/icons/Email'
import LoyaltyIcon     from '@material-ui/icons/Loyalty'
import NewReleasesIcon from '@material-ui/icons/NewReleases'
import WorkIcon        from '@material-ui/icons/Work'
import GradeIcon from '@material-ui/icons/Grade';
export const SidebarAdminItems = [
  {
    label: 'Utilisateurs',
    url  : '/admin/users',
    icons: <PeopleIcon/>
  },
  {
    label: 'Gestion formule',
    url  : '/admin/gestion-formules',
    icons: <LoyaltyIcon/>
  },
  {
    label: 'NewsLetter',
    url  : '/admin/newsletter',
    icons: <NewReleasesIcon/>
  },
  {
    label: 'Atelier',
    url  : '/admin/atelier',
    icons: <WorkIcon/>
  },
  {
    label: 'Messages',
    url  : '/admin/messages',
    icons: <EmailIcon/>
  },
  {
    label: 'Avis',
    url  : '/admin/avis',
    icons: <GradeIcon/>
  },
]
