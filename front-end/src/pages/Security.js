// material
import { Container } from '@mui/material';
// hooks
import useSettings from '../hooks/useSettings';
// components
import Page from '../components/Page';
import HeaderBreadcrumbs from '../components/HeaderBreadcrumbs';

// routes
import { PATH_DASHBOARD } from '../routes/paths';
// ----------------------------------------------------------------------

export default function Security() {
  const { themeStretch } = useSettings();

  return (
    <Page title="General: Security | Minimal-UI">
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <HeaderBreadcrumbs
          heading="Security"
          links={[{ name: 'Dashboard', href: PATH_DASHBOARD.root }, { name: 'Security' }]}
        />
      </Container>
    </Page>
  );
}
