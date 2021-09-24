// material
import { useTheme } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';

// ----------------------------------------------------------------------

export default function DocIllustration({ ...other }) {
  const theme = useTheme();
  const PRIMARY_MAIN = theme.palette.primary.main;

  return (
    <img src="/static/minecare-logo.svg" alt="login" width="200"/>
    );
}
