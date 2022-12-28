import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Image from 'next/image';
import LogoNamed from '/public/images/collider_logo_named.png';
import Tilt from 'react-parallax-tilt';

const pages = ['About', 'Contact', 'Projects', 'Gallery', 'Skills'];

function Header() {
  return (
    <Container maxWidth='lg' className='hidden sm:block'>
      <Tilt tiltMaxAngleX={1} tiltMaxAngleY={1}>
        <AppBar position='static' className='shadow-xl bg-white rounded-full'>
          <Toolbar className='px-4 justify-between'>
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
                className='text-slate-700 font-mono'
              >
                collider.two
              </Typography> */}
            </div>

            <div>
              {pages.map((page) => (
                <Button
                  key={page}
                  className='
              text-slate-700
              hover:text-slate-50
              hover:bg-gradient-to-r from-pink-500 to-indigo-700
              font-mono 
              font-medium
              rounded-full
              px-3
              '
                >
                  {page}
                </Button>
              ))}
            </div>
          </Toolbar>
        </AppBar>
      </Tilt>
    </Container>
  );
}
export default Header;
