import { Icon } from '@iconify/react';
import { useRef, useState } from 'react';
import personFill from '@iconify/icons-eva/person-fill';
import settings2Fill from '@iconify/icons-eva/settings-2-fill';
import heartFill from '@iconify/icons-eva/heart-fill';
import shieldFill from '@iconify/icons-eva/shield-fill';
import safeMaskFill from '@iconify/icons-ic/sharp-masks';
import pieChartFill from '@iconify/icons-eva/pie-chart-fill';
import { Link as RouterLink } from 'react-router-dom';

// material
import { alpha } from '@mui/material/styles';
import { Box, MenuItem } from '@mui/material';

// components
import { MIconButton } from '../../components/@material-extend';
import MenuPopover from '../../components/MenuPopover';

// ----------------------------------------------------------------------

const MENU_OPTIONS = [
  {
    label: 'Healthy',
    icon: heartFill,
    linkTo: '/'
  },
  {
    label: 'Safety',
    icon: safeMaskFill,
    linkTo: '/'
  },
  {
    label: 'Security',
    icon: shieldFill,
    linkTo: '/'
  },
  {
    label: 'Administration',
    icon: personFill,
    linkTo: '/'
  },
  {
    label: 'Reports',
    icon: pieChartFill,
    linkTo: '/'
  }
];

// ----------------------------------------------------------------------

export default function TopMenuPopover() {
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <MIconButton
        ref={anchorRef}
        size="large"
        color={open ? 'primary' : 'default'}
        onClick={handleOpen}
        sx={{
          ...(open && {
            bgcolor: (theme) => alpha(theme.palette.primary.main, theme.palette.action.focusOpacity)
          })
        }}
      >
        <Icon icon={settings2Fill} width={20} height={20} />
      </MIconButton>

      <MenuPopover open={open} onClose={handleClose} anchorEl={anchorRef.current} sx={{ width: 220 }}>
        {MENU_OPTIONS.map((option) => (
          <MenuItem
            key={option.label}
            to={option.linkTo}
            component={RouterLink}
            onClick={handleClose}
            sx={{ typography: 'body2', py: 1, px: 2.5 }}
          >
            <Box
              component={Icon}
              icon={option.icon}
              sx={{
                mr: 2,
                width: 24,
                height: 24
              }}
            />

            {option.label}
          </MenuItem>
        ))}
      </MenuPopover>
    </>
  );
}
