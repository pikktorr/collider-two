import { Container, Typography } from '@mui/material';
import AutoSlider from './AutoSlider';
import '@splidejs/splide/dist/css/splide.min.css';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const linearGradient =
  'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.01) 5%, rgba(255,255,255,1) 15%, rgba(255,255,255,1) 50%, rgba(255,255,255,1) 85%, rgba(255,255,255, 0.01) 95%, rgba(255,255,255,0) 100%)';

const Skills = () => {
  const theme = useTheme();
  const mobileDisplay = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <Container maxWidth='md' className='mt-20' id='skills-section'>
        <Typography
          id='projects-section'
          gutterBottom
          variant='h5'
          component='div'
          className='mb-4 font-mono font-bold indent-8'
        >
          Skills
        </Typography>
      </Container>

      <Container
        maxWidth='lg'
        className='mt-10'
        style={{
          maskImage: linearGradient,
          WebkitMaskImage: linearGradient
        }}
      >
        <AutoSlider
          perPage={mobileDisplay ? 4 : 9}
          speed={0.8}
          firstIndex={0}
          lastIndex={9}
        />
        <AutoSlider
          perPage={mobileDisplay ? 4 : 7}
          speed={-0.9}
          firstIndex={10}
          lastIndex={17}
        />
        <AutoSlider
          perPage={mobileDisplay ? 4 : 9}
          speed={1}
          firstIndex={18}
          lastIndex={27}
        />
        <AutoSlider
          perPage={mobileDisplay ? 4 : 8}
          speed={-0.7}
          firstIndex={28}
        />
      </Container>
    </>
  );
};

export default Skills;
