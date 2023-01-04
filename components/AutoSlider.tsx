import { useState } from 'react';
import { Container, Typography, Tooltip } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import ProjectCard from './ProjectCard';
import Box from '@mui/material/Box';
import Image from 'next/image';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import skills from '../json/skills.json';
import '@splidejs/splide/dist/css/splide.min.css';
import { AutoSliderProps } from '../interfaces/AutoSliderProps';

const AutoSlider = ({
  perPage,
  speed,
  firstIndex,
  lastIndex
}: AutoSliderProps) => {
  return (
    <Splide
      options={{
        type: 'loop',
        gap: '20px',
        drag: 'free',
        arrows: false,
        pagination: false,
        perPage: perPage,
        autoScroll: {
          pauseOnHover: true,
          pauseOnFocus: true,
          rewind: false,
          speed: speed
        }
      }}
      extensions={{ AutoScroll }}
      className='my-8'
    >
      {skills.slice(firstIndex, lastIndex).map((skill) => {
        return (
          <SplideSlide key={skill.name} className='flex'>
            <Tooltip title={skill.name}>
              <Image
                src={skill.imageUrl}
                alt={skill.name}
                width={80}
                height={80}
                className='object-contain'
              />
            </Tooltip>
          </SplideSlide>
        );
      })}
    </Splide>
  );
};

export default AutoSlider;
