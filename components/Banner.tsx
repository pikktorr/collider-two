import Image from 'next/image';
import Logo from '/public/images/collider_logo.svg';
import Tilt from 'react-parallax-tilt';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

const Banner = () => {
  const handleImageTap = () => console.log('tap tap tap');

  return (
    <Container
      maxWidth='md'
      className='h-[92vh] flex justify-center items-center'
    >
      <Tilt
        tiltMaxAngleX={20}
        tiltMaxAngleY={20}
        gyroscope={true}
        trackOnWindow={true}
        perspective={500}
      >
        <Grid
          onClick={handleImageTap}
          className={
            'sm:hover:scale-110 transition-transform duration-200 ease-in-out relative mx-auto sm:w-3/4 rounded-full max-sm:animate-pulse max-sm:p-2'
          }
        >
          <Image
            src={Logo}
            alt='alt'
            className='rounded-full animate-[collide_15s_linear_infinite]'
          />
        </Grid>
      </Tilt>
    </Container>
  );
};

export default Banner;
