// material
import { Container, Grid, Stack, Typography } from '@mui/material';
// hooks
import useAuth from '../../hooks/useAuth';
import useSettings from '../../hooks/useSettings';
// components
import Page from '../../components/Page';
import {
  AppWelcome,
  AppWidgets1,
  AppWidgets2,
  AppFeatured,
  AppNewInvoice,
  AppTopAuthors,
  AppTopRelated,
  AppAreaInstalled,
  AppTotalDownloads,
  AppTotalRoles,
  AppTotalInstalled,
  AppCurrentDownload,
  AppTotalActiveUsers,
  AppTopInstalledCountries
} from '../../components/_dashboard/general-app';

// ----------------------------------------------------------------------

export default function GeneralApp() {
  const { themeStretch } = useSettings();
  const { user } = useAuth();

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
