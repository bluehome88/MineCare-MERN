import { Icon } from '@iconify/react';
import safeMaskFill from '@iconify/icons-ic/sharp-masks';
import shieldFill from '@iconify/icons-eva/shield-fill';
import pieChartFill from '@iconify/icons-eva/pie-chart-fill';
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
  booking: getIcon('ic_booking'),
  safety: <Icon icon={safeMaskFill} width={24} height={24} />,
  report: <Icon icon={pieChartFill} width={24} height={24} />,
  shield: <Icon icon={shieldFill} width={24} height={24} />
};

const sidebarConfig = [
  {
    subheader: 'General',
    items: [
      {
        title: 'Safety',
        path: PATH_DASHBOARD.safety.root,
        icon: ICONS.safety,
      },
      {
        title: 'Security',
        path: PATH_DASHBOARD.security.root,
        icon: ICONS.shield,
      },
      {
        title: 'Reports',
        path: PATH_DASHBOARD.report.root,
        icon: ICONS.report,
      }
    ]
  },
  {
    items: [
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
        path: PATH_DASHBOARD.employee.root,
        icon: ICONS.user,
        children: [
          { title: 'Employee List', path: PATH_DASHBOARD.employee.list },
          { title: 'Add Employee', path: PATH_DASHBOARD.employee.newEmployee }
        ]
      },
      {
        title: 'Health',
        path: PATH_DASHBOARD.health.root,
        icon: ICONS.calendar,
        children: [
          { title: 'Form 0', path: PATH_DASHBOARD.health.forms },
          { title: 'Followup Visit', path: PATH_DASHBOARD.health.visit },
          { title: 'Health History', path: PATH_DASHBOARD.health.history },
          { title: 'Emergency Care', path: PATH_DASHBOARD.health.emergency },
          { title: 'Health Education', path: PATH_DASHBOARD.health.education }
        ]
      },
      ]
  }
];

export default sidebarConfig;
