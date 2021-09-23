import { Icon } from '@iconify/react';
import { capitalCase, paramCase } from 'change-case';
import { useParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import bellFill from '@iconify/icons-eva/bell-fill';
import shareFill from '@iconify/icons-eva/share-fill';
import roundVpnKey from '@iconify/icons-ic/round-vpn-key';
import roundReceipt from '@iconify/icons-ic/round-receipt';
import roundAccountBox from '@iconify/icons-ic/round-account-box';
// material
import { Container, Tab, Box, Tabs, Stack, Typography, Grid, Card, Button } from '@mui/material';
import PieChartIcon from '@mui/icons-material/PieChart';
// redux
import { useDispatch } from '../../redux/store';
import { getCards, getProfile, getInvoices, getAddressBook, getNotifications } from '../../redux/slices/user';
// routes
import { PATH_DASHBOARD } from '../../routes/paths';
// hooks
import useSettings from '../../hooks/useSettings';
// components
import Page from '../../components/Page';
import HeaderBreadcrumbs from '../../components/HeaderBreadcrumbs';
import {
  HealthForm,
  HealthFollow
} from '../../components/_dashboard/health';

// ----------------------------------------------------------------------

export default function Health() {
  const { themeStretch } = useSettings();
  const [currentTab, setCurrentTab] = useState('');
  const dispatch = useDispatch();
  const { userName } = useParams();

  useEffect(() => {
    dispatch(getCards());
    dispatch(getAddressBook());
    dispatch(getInvoices());
    dispatch(getNotifications());
    dispatch(getProfile());
  }, [dispatch]);

  const ACCOUNT_TABS = [
    {
      value: 'Form O',
      icon: <Icon icon={roundReceipt} width={20} height={20} />,
      component: <HealthForm />
    },
    {
      value: 'Followup Visit',
      icon: <Icon icon={roundReceipt} width={20} height={20} />,
      component: <HealthFollow />
    },
    {
      value: 'Health History',
      icon: <Icon icon={roundReceipt} width={20} height={20} />,
      component: <HealthForm />
    },
    {
      value: 'Health Checkup',
      icon: <Icon icon={roundReceipt} width={20} height={20} />,
      component: <HealthForm />
    },
    {
      value: 'Health Education',
      icon: <Icon icon={roundReceipt} width={20} height={20} />,
      component: <HealthForm />
    }
    
  ];

  const handleChangeTab = (event, newValue) => {
    setCurrentTab(newValue);
  };

  if(currentTab === "")
    return(
      <Page title="User: Account Settings | Minimal-UI">
        <Container maxWidth={themeStretch ? false : 'lg'}>
          <HeaderBreadcrumbs
            heading="Health"
            links={[
              { name: 'Dashboard', href: PATH_DASHBOARD.root },
              { name: "health" }
            ]}
          />

          <Stack spacing={5}>
            <Tabs
              value={currentTab}
              scrollButtons="auto"
              variant="scrollable"
              allowScrollButtonsMobile
              onChange={handleChangeTab}
            >
              {ACCOUNT_TABS.map((tab) => (
                <Tab disableRipple key={tab.value} label={capitalCase(tab.value)} icon={tab.icon} value={tab.value} />
              ))}
            </Tabs>

            {ACCOUNT_TABS.map((tab) => {
              const isMatched = tab.value === currentTab;
              return isMatched && <Box key={tab.value}>{tab.component}</Box>;
            })}
          </Stack>
          <Typography variant="h2" align="center" paragraph sx={{mt:5}}>
            MineCare
          </Typography>
          <Typography variant="h3" align="center" sx={{ color: 'text.secondary', mb:7 }}>
            Lorem ipsum dolor sit amet, consectetue adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
          </Typography>

          <Grid container spacing={3}>
            <Grid item xs={4} md={4}>
              <Button>
                <Card sx={{ p:4, textAlign:"center" }}>
                  <Typography variant="h3" align="center" sx={{m:3, mb:4}}>
                    Form O Summary
                  </Typography>
                  <PieChartIcon sx={{fontSize:80, color:"red"}}/>
                  <Typography align="left" sx={{ml:3, mb:1, mt:2}}>
                    30$ Pending
                  </Typography>
                  <Typography align="left" sx={{ml:3, mb:1}}>
                    70% Completed
                  </Typography>
                </Card>
              </Button>
            </Grid>
            <Grid item xs={4} md={4}>
              <Button>
                <Card sx={{ p:4, textAlign:"center" }}>
                  <Typography variant="h3" align="center" sx={{m:3, mb:4}}>
                    Revisit Summary
                  </Typography>
                  <PieChartIcon sx={{fontSize:80, color:"green"}}/>
                  <Typography align="left" sx={{ml:3, mb:1, mt:2}}>
                    30% Not Visited
                  </Typography>
                  <Typography align="left" sx={{ml:3, mb:1}}>
                    70% Visited
                  </Typography>
                </Card>
              </Button>
            </Grid>
            <Grid item xs={4} md={4}>
              <Button>
                <Card sx={{ p:4, textAlign:"center" }}>
                  <Typography variant="h3" align="center" sx={{m:3, mb:4}}>
                    Disease Summary
                  </Typography>
                  <PieChartIcon sx={{fontSize:80, color:"grey"}}/>
                  <Typography align="left" sx={{ml:3, mb:1, mt:2}}>
                    20% Diabities
                  </Typography>
                  <Typography align="left" sx={{ml:3, mb:1}}>
                    80% BP
                  </Typography>
                </Card>
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Page>
    
    );
    return(
      <Page title="User: Account Settings | Minimal-UI">
        <Container maxWidth={themeStretch ? false : 'lg'}>
          <HeaderBreadcrumbs
            heading="Health"
            links={[
              { name: 'Dashboard', href: PATH_DASHBOARD.root },
              { name: "health" }
            ]}
          />

          <Stack spacing={5}>
            <Tabs
              value={currentTab}
              scrollButtons="auto"
              variant="scrollable"
              allowScrollButtonsMobile
              onChange={handleChangeTab}
            >
              {ACCOUNT_TABS.map((tab) => (
                <Tab disableRipple key={tab.value} label={capitalCase(tab.value)} icon={tab.icon} value={tab.value} />
              ))}
            </Tabs>

            {ACCOUNT_TABS.map((tab) => {
              const isMatched = tab.value === currentTab;
              return isMatched && <Box key={tab.value}>{tab.component}</Box>;
            })}
          </Stack>
        </Container>
      </Page>
    );
}
