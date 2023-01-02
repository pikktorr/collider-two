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
import QuiltedImageList from './QuiltedImageList';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import skills from '../json/skills.json';

const Skills = () => {
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

      <Container maxWidth='lg' className='mt-10'>
        {/* <Splide
          options={{
            type: 'loop',
            drag: 'free',
            focus: 'center',
            perPage: 1,
            autoScroll: {
              speed: 1
            }
          }}
          // extensions={{ AutoScroll }}
        > */}
          {/* <SplideSlide 
          >
          {skills.map((skill) => {
            return (
              <Image
              key={skill.name}
                  src={skill.imageUrl}
                  alt={skill.name}
                  width={48}
                  height={48}
                />
                );
              })}
              </SplideSlide>
        </Splide> */}




        <QuiltedImageList />
      </Container>
    </>
  );
};

export default Skills;
