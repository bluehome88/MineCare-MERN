// material
import { Box, Stack } from '@mui/material';

// ----------------------------------------------------------------------

export default function MainLogo() {
  return (
    <Stack>
      <Box component="img" src="/static/minecare-logo.svg" sx={{ width: 150, height: 60 }} />
    </Stack>
  );
}
