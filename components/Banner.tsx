import Image from 'next/image';
import Logo from '/public/images/project_logo.png';
import Tilt from 'react-parallax-tilt';
import Container from '@mui/material/Container';

const Banner = () => {
  return (
    <Container maxWidth='md'>
      <Tilt>
        <Image src={Logo} alt='alt' width={36} className={'w-full rounded-full'}/>
      </Tilt>
    </Container>
  );
};

export default Banner;
