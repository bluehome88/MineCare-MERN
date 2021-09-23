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

export default function Reports() {
  const { themeStretch } = useSettings();

  return (
    <Page title="General: Reports | Minimal-UI">
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <HeaderBreadcrumbs
          heading="Reports"
          links={[{ name: 'Dashboard', href: PATH_DASHBOARD.root }, { name: 'Reports' }]}
        />
      </Container>
    </Page>
  );
}
