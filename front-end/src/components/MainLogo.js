// material
import { Box, Stack, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

import { PATH_DASHBOARD } from '../routes/paths';
// ----------------------------------------------------------------------

export default function MainLogo() {
  return (
    <Stack>
      <Link component={RouterLink} to="/">
        <Box component="img" src="/static/minecare-logo.svg" sx={{ width: 150, height: 60 }} />
      </Link>
    </Stack>
  );
}
