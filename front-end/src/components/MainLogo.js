import PropTypes from 'prop-types';
// material
import { useTheme } from '@mui/material/styles';
import { Box, Stack } from '@mui/material';

// ----------------------------------------------------------------------

MainLogo.propTypes = {
  sx: PropTypes.object
};

export default function MainLogo({ sx }) {
  const theme = useTheme();
  const PRIMARY_LIGHT = theme.palette.primary.light;
  const PRIMARY_MAIN = theme.palette.primary.main;
  const PRIMARY_DARK = theme.palette.primary.dark;

  return (
    <Stack>
      <Box component="img" src="/static/minecare-logo.svg" sx={{ width: 150, height: 60 }} />
    </Stack>
  );
}
