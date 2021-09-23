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

export default function Safety() {
  const { themeStretch } = useSettings();

  return (
    <Page title="General: Safety | Minimal-UI">
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <HeaderBreadcrumbs
          heading="Safety"
          links={[{ name: 'Dashboard', href: PATH_DASHBOARD.root }, { name: 'Safety' }]}
        />
      </Container>
    </Page>
  );
}
