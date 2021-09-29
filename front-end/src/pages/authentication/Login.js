import { capitalCase } from 'change-case';
import { Link as RouterLink } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
import { Box, Card, Stack, Link, Tooltip, Container, Typography } from '@mui/material';
// routes
import { PATH_AUTH } from '../../routes/paths';
// hooks
import useAuth from '../../hooks/useAuth';
// components
import Page from '../../components/Page';
import { MHidden } from '../../components/@material-extend';
import { LoginForm } from '../../components/authentication/login';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex'
  }
}));

const SectionStyle = styled(Card)(({ theme }) => ({
  width: '100%',
  maxWidth: 650,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  margin: theme.spacing(2, 0, 2, 2)
}));

const CenterImageStyle = styled('Page')(({ theme }) => ({
  marginLeft: "auto",
  marginRight:"auto",
}));

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: theme.spacing(12, 0)
}));

// ----------------------------------------------------------------------

export default function Login() {
  const { method } = useAuth();

  return (
    <RootStyle title="SignIn | MineCare">
      <MHidden width="mdDown">
        <SectionStyle>
        	<CenterImageStyle>
            <img src="/static/minecare-logo.svg" alt="login" width="350" sx={{ ml: "auto", mr: "auto" }}/>
          </CenterImageStyle>
          <Typography variant="h2" sx={{ mt: 10 }} style={{textAlign:"center"}}>
            A Solution for Occupational Health_Safety
          </Typography>
          <Typography variant="h4" sx={{ mt: 10, mb: 5 }} style={{textAlign:"center", color:"#7635dc"}}>
            First-of-it`s kind unified digital platform for mining Industries
          </Typography>
        </SectionStyle>
      </MHidden>

      <Container maxWidth="sm">
        <ContentStyle>
          <Stack direction="row" alignItems="center" sx={{ mb: 5 }}>
            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="h4" gutterBottom>
                Sign In
              </Typography>
              <Typography sx={{ color: 'text.secondary' }}>Enter your detail to sign in MineCare.</Typography>
            </Box>

          </Stack>
          <LoginForm />
          {/* <Stack width="smUp">
            <Typography variant="body2" align="center" sx={{ mt: 3 }}>
              Don’t have an account?&nbsp;
              <Link variant="subtitle2" component={RouterLink} to={PATH_AUTH.register}>
                Get started
              </Link>
            </Typography>
          </Stack> */}
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
