import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Switch } from '@mui/material';
import { Menu } from '@mui/icons-material';

const Navbar = ({ toggleSidebar, toggleTheme, darkMode }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleSidebar}>
          <Menu />
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          RBAC Admin Dashboard
        </Typography>
        <Switch checked={darkMode} onChange={toggleTheme} color="default" />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
