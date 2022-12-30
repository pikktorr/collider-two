import Image from 'next/image';
import Logo from '/public/images/collider_logo.png';
import Tilt from 'react-parallax-tilt';
import Container from '@mui/material/Container';

const Banner = () => {
  const handleImageTap = () => console.log('tap tap tap');

  return (
    <Container maxWidth='md' className='max-sm:h-[100vh]'>
      <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10}>
        <div
          onClick={handleImageTap}
          className={
            'my-20 mx-auto w-2/3 rounded-full max-sm:animate-pulse max-sm:overflow-hidden max-sm:bg-white max-sm:p-2 max-sm:shadow-lg sm:pointer-events-none'
          }
        >
          <Image
            src={Logo}
            alt='alt'
            className={
              'rounded-full drop-shadow-[0_10px_10px_rgba(0,0,0,0.25)]'
            }
          />
        </div>
      </Tilt>
    </Container>
  );
};

export default Banner;
