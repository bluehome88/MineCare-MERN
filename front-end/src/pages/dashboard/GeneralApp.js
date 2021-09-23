// material
import { Container, Grid, Typography } from '@mui/material';
// hooks
import useSettings from '../../hooks/useSettings';
// components
import Page from '../../components/Page';
import {
  AppNewInvoice,
  AppTopRelated,
  AppTotalDownloads,
  AppTotalRoles,
  AppTotalInstalled,
  AppTotalActiveUsers
} from '../../components/_dashboard/general-app';

// ----------------------------------------------------------------------

export default function GeneralApp() {
  const { themeStretch } = useSettings();

  return (
    <Page title="General: App | Minimal-UI">
      <Typography variant="h4" sx={{ px: 5, mt: 2, mb: 2 }}>
        Quick Access
      </Typography>
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={3}>
            <AppTotalActiveUsers />
          </Grid>

          <Grid item xs={12} md={3}>
            <AppTotalInstalled />
          </Grid>

          <Grid item xs={12} md={3}>
            <AppTotalDownloads />
          </Grid>

          <Grid item xs={12} md={3}>
            <AppTotalRoles />
          </Grid>

          <Grid item xs={12} md={6}>
            <AppNewInvoice />
          </Grid>

          <Grid item xs={12} md={6}>
            <AppTopRelated />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
