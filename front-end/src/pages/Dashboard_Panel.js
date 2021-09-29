// material
import { useState } from 'react';
import { Container, Grid, Typography, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { styled } from '@mui/material/styles';

// hooks
import useSettings from '../hooks/useSettings';
// components
import Page from '../components/Page';
import DashboardNavbar from '../layouts/dashboard/DashboardNavbar';
import { PATH_DASHBOARD } from '../routes/paths';

import {
  AppTotalActiveUsers,
  AppTotalEmployees,
  AppTotalDepartments,
  AppTotalRoles,
  AppSchedules,
  AppNotifications
} from '../components/_dashboard/general-app';

// ----------------------------------------------------------------------
const LinkStyle = styled(Link)(({ theme }) => ({
    textDecoration: `none !important`,
    '&:hover *': { textDecoration: `none !important` }
  }
));

const RootStyle = styled(Page)(({ theme }) => ({
    minHeight: '100%',
    paddingTop: theme.spacing(15),
    paddingBottom: theme.spacing(10)
  }));

export default function DashboardPanel() {
  const { themeStretch } = useSettings();

  const [setOpen] = useState(false);
  return (
    <RootStyle title="MineCare Administration">
    <DashboardNavbar onOpenSidebar={() => setOpen(true)} />
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
    </RootStyle>
  );
}
