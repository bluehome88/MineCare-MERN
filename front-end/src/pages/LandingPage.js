// material
import { styled } from '@mui/material/styles';
import { Box, Grid, Switch, Container, Typography, Card, Button } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SecurityIcon from '@mui/icons-material/Security';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import { Link as RouterLink } from 'react-router-dom';
// components
import Page from '../components/Page';
import { PlanFreeIcon, PlanStarterIcon, PlanPremiumIcon } from '../assets';
import { PATH_DASHBOARD } from '../routes/paths';

// ----------------------------------------------------------------------

const PLANS = [
  {
    subscription: 'basic',
    icon: <PlanFreeIcon />,
    price: 0,
    caption: 'forever',
    lists: [
      { text: '3 prototypes', isAvailable: true },
      { text: '3 boards', isAvailable: true },
      { text: 'Up to 5 team members', isAvailable: false },
      { text: 'Advanced security', isAvailable: false },
      { text: 'Permissions & workflows', isAvailable: false }
    ],
    labelAction: 'current plan'
  },
  {
    subscription: 'starter',
    icon: <PlanStarterIcon />,
    price: 4.99,
    caption: 'saving $24 a year',
    lists: [
      { text: '3 prototypes', isAvailable: true },
      { text: '3 boards', isAvailable: true },
      { text: 'Up to 5 team members', isAvailable: true },
      { text: 'Advanced security', isAvailable: false },
      { text: 'Permissions & workflows', isAvailable: false }
    ],
    labelAction: 'choose starter'
  },
  {
    subscription: 'premium',
    icon: <PlanPremiumIcon />,
    price: 9.99,
    caption: 'saving $124 a year',
    lists: [
      { text: '3 prototypes', isAvailable: true },
      { text: '3 boards', isAvailable: true },
      { text: 'Up to 5 team members', isAvailable: true },
      { text: 'Advanced security', isAvailable: true },
      { text: 'Permissions & workflows', isAvailable: true }
    ],
    labelAction: 'choose premium'
  }
];

const RootStyle = styled(Page)(({ theme }) => ({
  minHeight: '100%',
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(10)
}));

// ----------------------------------------------------------------------

export default function LandingPage() {
  return (
    <RootStyle title="Pricing | Minimal-UI">
      <Container maxWidth="lg">
        <Typography variant="h2" align="center" paragraph>
          MineCare
        </Typography>
        <Typography variant="h3" align="center" sx={{ color: 'text.secondary', mb:7 }}>
          Lorem ipsum dolor sit amet, consectetue adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={4} md={4}>
            <Button component={RouterLink} to={PATH_DASHBOARD.health.root}>
              <Card sx={{ p:4, textAlign:"center" }}>
                <FavoriteIcon sx={{fontSize:80, color:"red"}}/>
                <Typography variant="h3" align="center" sx={{m:3, mb:4}}>
                  Health
                </Typography>
                <Typography align="center" sx={{m:3, mb:4}}>
                Lorem ipsum dolor sit amet, consectetue adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                </Typography>
              </Card>
            </Button>
          </Grid>
          <Grid item xs={4} md={4}>
            <Button component={RouterLink} to={PATH_DASHBOARD.safety.root}>
              <Card sx={{ p:4, textAlign:"center" }}>
                <HealthAndSafetyIcon sx={{fontSize:80, color:"blue"}}/>
                <Typography variant="h3" align="center" sx={{m:3, mb:4}}>
                  Safety
                </Typography>
                <Typography align="center" sx={{m:3, mb:4}}>
                Lorem ipsum dolor sit amet, consectetue adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                </Typography>
              </Card>
            </Button>
          </Grid>
          <Grid item xs={4} md={4}>
            <Button component={RouterLink} to={PATH_DASHBOARD.security.root}>
              <Card sx={{ p:4, textAlign:"center" }}>
                <SecurityIcon sx={{fontSize:80, color:"green"}}/>
                <Typography variant="h3" align="center" sx={{m:3, mb:4}}>
                  Security
                </Typography>
                <Typography align="center" sx={{m:3, mb:4}}>
                Lorem ipsum dolor sit amet, consectetue adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                </Typography>
              </Card>
            </Button>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
