import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Image from 'next/image';
import LogoNamed from '/public/images/collider_logo_named.png';
import LogoBW from '/public/images/collider_logo_bw.png';
import ContactList from './ContactList';

const Footer = () => {
  return (
    <Container maxWidth='lg' className='mt-20'>
      <AppBar position='static' className='bg-white rounded-full shadow-xl'>
        <Toolbar className='items-center justify-between px-4'>
          <Typography
            variant='subtitle2'
            component='div'
            className='ml-2 font-mono text-slate-700 max-sm:hidden'
          >
            VR-{new Date().getFullYear()}
          </Typography>
          <div>
            <ContactList />
          </div>
          <Image
            src={LogoNamed}
            alt='alt'
            width={130}
            aria-label='account of current user'
            aria-controls='menu-appbar'
            aria-haspopup='true'
            className='max-sm:hidden'
          />
          <Image
            src={LogoBW}
            alt='alt'
            width={48}
            aria-label='account of current user'
            aria-controls='menu-appbar'
            aria-haspopup='true'
            className='sm:hidden'
          />
        </Toolbar>
      </AppBar>
    </Container>
  );
};
export default Footer;
