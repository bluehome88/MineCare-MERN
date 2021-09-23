// material
import { Container, Grid, Typography, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { styled } from '@mui/material/styles';

// hooks
import useSettings from '../../hooks/useSettings';
// components
import Page from '../../components/Page';
import { PATH_DASHBOARD } from '../../routes/paths';

import {
  AppTotalActiveUsers,
  AppTotalEmployees,
  AppTotalDepartments,
  AppTotalRoles,
  AppSchedules,
  AppNotifications
} from '../../components/_dashboard/general-app';

// ----------------------------------------------------------------------
const LinkStyle = styled(Link)(({ theme }) => ({
    textDecoration: `none !important`,
    '&:hover *': { textDecoration: `none !important` }
  }
));

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
            <LinkStyle>
              <Link component={RouterLink} to={PATH_DASHBOARD.user.list}>
                <AppTotalActiveUsers />
              </Link>
            </LinkStyle>
          </Grid>

          <Grid item xs={12} md={3}>
            <LinkStyle>
              <Link component={RouterLink} to={PATH_DASHBOARD.employee.list}>
                <AppTotalEmployees />
              </Link>
            </LinkStyle>
          </Grid>

          <Grid item xs={12} md={3}>
            <LinkStyle>
              <Link component={RouterLink} to={PATH_DASHBOARD.user.list}>
                <AppTotalDepartments />
              </Link>
            </LinkStyle>            
          </Grid>

          <Grid item xs={12} md={3}>
            <LinkStyle>
              <Link component={RouterLink} to={PATH_DASHBOARD.user.list}>
                <AppTotalRoles />
              </Link>
            </LinkStyle>            
          </Grid>

          <Grid item xs={12} md={6}>
            <AppSchedules />
          </Grid>

          <Grid item xs={12} md={6}>
            <AppNotifications />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
