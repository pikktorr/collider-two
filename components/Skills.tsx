import { useState } from 'react';
import { Container, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import ProjectCard from './ProjectCard';
import Box from '@mui/material/Box';
import Image from 'next/image';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import galleryList from '../json/gallery.json';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ImageDialog from './ImageDialog';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

const Skills = () => {
 

  return (
    <>
      <Container maxWidth='md' className='mt-20'>
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

      <Container maxWidth='md' className='mt-10'>
      <Splide 
        aria-label="My Favorite Images" 
        options={{
          type   : 'loop',
          drag   : 'free',
          focus  : 'center',
          perPage: 6,
          autoScroll: {
            speed: 1,
          },
          }}
      >
        <SplideSlide>
          {/* <img src="image1.jpg" alt="Image 1"/> */}
        </SplideSlide>
        <SplideSlide>
          {/* <img src="image2.jpg" alt="Image 2"/> */}
        </SplideSlide>
      </Splide>
      </Container>
    </>
  );
};

export default Skills;
