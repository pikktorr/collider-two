import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Image from 'next/image';
import LogoNamed from '/public/images/collider_logo_named.png';
import Tilt from 'react-parallax-tilt';

const pages = ['About', 'Projects', 'Gallery', 'Skills'];

function Header() {
  return (
    <Container maxWidth='lg' className='max-sm:hidden'>
        <AppBar position='static' className='bg-white rounded-full shadow-xl'>
          <Toolbar className='justify-between px-4'>
            <div className='flex flex-row'>
              <Image
                src={LogoNamed}
                alt='alt'
                width={130}
                aria-label='account of current user'
                aria-controls='menu-appbar'
                aria-haspopup='true'
              />
              {/* <Menu
                id='menu-appbar'
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left'
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left'
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' }
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign='center'>{page}</Typography>
                  </MenuItem>
                ))}
              </Menu> */}
              {/* <Typography
                variant='h6'
                noWrap
                component='a'
                href='/'
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' }
                }}
                className='font-mono text-slate-700'
              >
                collider.two
              </Typography> */}
            </div>

            <div>
              {pages.map((page) => (
                <Button
                  key={page}
                  className='px-3 font-mono font-medium transition-all duration-300 ease-in-out rounded-full text-slate-700 hover:text-slate-50 hover:bg-gradient-to-r from-pink-500 to-indigo-700'
                >
                  {page}
                </Button>
              ))}
            </div>
          </Toolbar>
        </AppBar>
    </Container>
  );
}
export default Header;
