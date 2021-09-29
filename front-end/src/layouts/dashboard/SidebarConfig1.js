import { Icon } from '@iconify/react';
import safeMaskFill from '@iconify/icons-ic/sharp-masks';
import shieldFill from '@iconify/icons-eva/shield-fill';
import pieChartFill from '@iconify/icons-eva/pie-chart-fill';
import heartFill from '@iconify/icons-eva/heart-fill';
// routes
import { PATH_HEALTH } from '../../routes/paths';

// components
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
  shield: <Icon icon={shieldFill} width={24} height={24} />,
  heart: <Icon icon={heartFill} width={24} height={24} />
};

const sidebarConfig1 = [
  {
    subheader: 'Health',
    items: [
      {
        title: 'Form O',
        path: PATH_HEALTH.form_o.root,
        icon: ICONS.blog
      },
      {
        title: 'Followup Visit',
        path: PATH_HEALTH.visit.root,
        icon: ICONS.report
      },
      {
        title: 'Health History',
        path: PATH_HEALTH.history.root,
        icon: ICONS.dashboard
      },
      {
        title: 'Health Checkup',
        path: PATH_HEALTH.checkup.root,
        icon: ICONS.booking
      },
      {
        title: 'Health Education',
        path: PATH_HEALTH.education.root,
        icon: ICONS.heart
      }
    ]
  }
];

export default sidebarConfig1;
