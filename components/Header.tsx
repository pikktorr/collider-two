import { useState } from 'react';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Image from 'next/image';
import Link from 'next/link';
import LogoNamed from '/public/images/collider_logo_named.png';
import LogoNamedBW from '/public/images/collider_logo_named_bw.png';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const pages = ['About', 'Projects', 'Gallery', 'Skills'];

const Header = () => {
  const [logoHover, setLogoHover] = useState(false);
  const [dropdownMenu, setDropDownMenu] = useState(false);

  return (
    <Container
      maxWidth='lg'
      id='header-section'
      className='absolute inset-x-0 z-10 gradient-shadow'
    >
      <Accordion
        className='bg-white rounded-[32px] w-100 shadow-none'
        expanded={dropdownMenu}
      >
        <Toolbar className='justify-between px-4 h-[64px]'>
          <Grid>
            <Image
              src={logoHover ? LogoNamed : LogoNamedBW}
              alt='Rotating pulsing circles'
              width={130}
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onMouseEnter={() => setLogoHover(true)}
              onMouseLeave={() => setLogoHover(false)}
              className='transition-all duration-500 ease-in-out'
            />
          </Grid>

          <Grid className='max-sm:hidden'>
            {pages.map((page) => (
              <Link href={`#${page.toLowerCase()}-section`} key={page}>
                <Button
                  key={page}
                  className='px-3 font-mono font-medium transition-all duration-300 ease-in-out rounded-full text-slate-700 hover:text-slate-50 hover:bg-gradient-to-r from-pink-500 to-indigo-700'
                >
                  {page}
                </Button>
              </Link>
            ))}
          </Grid>
          <IconButton
            className='hidden max-sm:flex'
            onClick={() => setDropDownMenu(!dropdownMenu)}
          >
            <ExpandMoreIcon
              className={`${
                dropdownMenu ? 'rotate-180' : 'rotate-0'
              } transition-transform duration-300`}
            />
          </IconButton>
        </Toolbar>
        <AccordionDetails className='hidden max-sm:block'>
          <Grid className='text-center' container direction={'column'}>
            {pages.map((page) => (
              <Link href={`#${page.toLowerCase()}-section`} key={page}>
                <Button
                  key={page}
                  className='px-3 font-mono font-medium transition-all duration-300 ease-in-out rounded-full text-slate-700 hover:text-slate-50 hover:bg-gradient-to-r from-pink-500 to-indigo-700'
                >
                  {page}
                </Button>
              </Link>
            ))}
          </Grid>
        </AccordionDetails>
      </Accordion>
    </Container>
  );
};
export default Header;
