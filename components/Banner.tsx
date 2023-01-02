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
      className='max-sm:h-[98vh] sm:h-[95vh] flex justify-center items-center'
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
            'sm:hover:scale-110 transition-transform duration-200 ease-in-out relative mx-auto sm:w-3/4 rounded-full max-sm:animate-pulse max-sm:overflow-hidden max-sm:bg-white max-sm:p-2 max-sm:shadow-2xl max-sm:shadow-sky-800 max-sm:border-pink-500'
          }
        >
          <Image
            src={Logo}
            alt='alt'
            className='rounded-full animate-[collide_15s_linear_infinite]'
          />
          {/* {ellipses.map((ellipse, index) => {
            return (
              // <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} key={ellipse}>
              <Image
                key={ellipse}
                src={ellipse}
                alt='alt'
                className={
                  `rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 hover:scale-${index}0`
                }
              />
            );
          })} */}
        </Grid>
      </Tilt>
    </Container>
  );
};

export default Banner;
