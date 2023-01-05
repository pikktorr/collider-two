import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Image from 'next/image';
import LogoNamed from '/public/images/collider_logo_named.png';
import Logo from '/public/images/collider_logo.png';
import ContactList from './ContactList';
import Link from 'next/link';

const Footer = () => {
  return (
    <Container maxWidth='lg' className='relative mt-20 mb-10'>
      <AppBar position='static' className='bg-white rounded-full shadow-none gradient-shadow'>
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
          <Link href='#__next' className='max-sm:hidden pointer-cursor'>
            <Image src={LogoNamed} alt='alt' width={130} />
          </Link>
          <Link href='#__next' className='sm:hidden pointer-cursor'>
            <Image src={Logo} alt='alt' width={48} />
          </Link>
        </Toolbar>
      </AppBar>
    </Container>
  );
};
export default Footer;
