import React, { useState } from 'react'
import { AppBar, Box, Toolbar, IconButton, Container } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import Logo from '../../setup/assets/image/starbucks-logo.png'
import NavLink from './NavLink'
import { NavSearch } from './NavSearch'
import MenuBar from './menu/menu-bar'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  const [open, setOpen] = useState(false)

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}
    >
      <Container maxWidth="xl">
        <Toolbar sx={{ marginTop: '15px' }}>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}>
            <Link to="/">
              <img src={Logo} alt="starBucks logo" />
            </Link>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'flex', md: 'none' },
              justifyContent: 'center',
            }}
          >
            <IconButton
              color="success"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerOpen}
              sx={{
                ...(open && { display: 'none' }),
                right: '20px',
                position: 'absolute',
                top: '15px',
              }}
            >
              <MenuIcon />
            </IconButton>
            <MenuBar open={open} handleDrawerClose={handleDrawerClose} />
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <Link to="/">
                <img src={Logo} alt="starBucks logo" />
              </Link>
            </Box>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
            }}
          >
            <NavLink />
          </Box>

          {/* search box */}
          <Box sx={{ flexGrow: 0 }}>
            <NavSearch />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
