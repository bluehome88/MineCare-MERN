// material
import { Container, Stack } from '@mui/material';
// hooks
import useSettings from '../../hooks/useSettings';
// components
import Page from '../../components/Page';
import HeaderBreadcrumbs from '../../components/HeaderBreadcrumbs';

// routes
import { PATH_DASHBOARD } from '../../routes/paths';
// ----------------------------------------------------------------------

export default function GeneralNotification() {
  const { themeStretch } = useSettings();

  return (
    <Page title="General: Notification | Minimal-UI">
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <HeaderBreadcrumbs
          heading="Notifications"
          links={[
          	{ name: 'Dashboard', href: PATH_DASHBOARD.root },
            { name: 'Notifications' }
          ]}
        />
      </Container>
    </Page>
  );
}