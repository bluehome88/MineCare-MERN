// routes
import { PATH_DASHBOARD } from '../../routes/paths';
// components
import Label from '../../components/Label';
import SvgIconStyle from '../../components/SvgIconStyle';

// ----------------------------------------------------------------------

const getIcon = (name) => (
  <SvgIconStyle src={`/static/icons/navbar/${name}.svg`} sx={{ width: '100%', height: '100%' }} />
);

const ICONS = {
  blog: getIcon('ic_blog'),
  cart: getIcon('ic_cart'),
  chat: getIcon('ic_chat'),
  mail: getIcon('ic_mail'),
  user: getIcon('ic_user'),
  kanban: getIcon('ic_kanban'),
  banking: getIcon('ic_banking'),
  calendar: getIcon('ic_calendar'),
  ecommerce: getIcon('ic_ecommerce'),
  analytics: getIcon('ic_analytics'),
  dashboard: getIcon('ic_dashboard'),
  booking: getIcon('ic_booking')
};

const sidebarConfig = [
  // GENERAL
  // ----------------------------------------------------------------------
  {
    items: [
      {
        title: 'Landing Pages',
        icon: ICONS.blog,
        children: [
          { title: 'Health', path: PATH_DASHBOARD.general.app },
          { title: 'Safety', path: PATH_DASHBOARD.general.app },
          { title: 'Security', path: PATH_DASHBOARD.general.app },
          { title: 'Administration', path: PATH_DASHBOARD.general.app },
          { title: 'Reports', path: PATH_DASHBOARD.general.app }
        ]
      },
      {
        title: 'Dashboard',
        icon: ICONS.dashboard,
        path: PATH_DASHBOARD.general.app,
        children: [
          { title: 'Schedule Management', path: PATH_DASHBOARD.general.schedule },
          { title: 'Notifications', path: PATH_DASHBOARD.general.notification }
        ]
      },
      {
        title: 'users',
        path: PATH_DASHBOARD.user.root,
        icon: ICONS.user,
        children: [
          { title: 'User List', path: PATH_DASHBOARD.user.list },
          { title: 'Add User', path: PATH_DASHBOARD.user.newUser },
          { title: 'My Account', path: PATH_DASHBOARD.user.account }
        ]
      },
      {
        title: 'Employees',
        icon: ICONS.user,
        children: [
          { title: 'Employee List', path: PATH_DASHBOARD.general.app },
          { title: 'Add Employee', path: PATH_DASHBOARD.general.app }
        ]
      }
    ]
  }
];

export default sidebarConfig;
