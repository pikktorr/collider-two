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

const Gallery = () => {
  const [open, setOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

  const handleClickOpen = (imageUrl: string) => {
    setCurrentImage(imageUrl);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Container maxWidth='md' className='mt-20' id='gallery-section'>
        <Typography
          id='projects-section'
          gutterBottom
          variant='h5'
          component='div'
          className='mb-4 font-mono font-bold indent-8'
        >
          Gallery
        </Typography>
      </Container>

      <Container maxWidth='md' className='mt-10'>
        <ImageList variant='masonry' cols={2} gap={12}>
          {galleryList.map((item) => (
            <ImageListItem
              key={item.title}
              className='hover:cursor-pointer group'
              onClick={()=> handleClickOpen(item.url)}
            >
              <PlayCircleIcon className='absolute text-6xl transform -translate-x-1/2 -translate-y-1/2 rounded-full opacity-75 group-hover:opacity-100 fill-white top-1/2 left-1/2' />
              {/* <ZoomInIcon className='absolute bottom-0 right-0 text-6xl transform -translate-x-1/2 -translate-y-1/2 rounded-full opacity-75 group-hover:opacity-100 fill-white ' /> */}
              <Image
                src={item.url}
                alt={item.title}
                width={360}
                height={500}
                className='rounded-xl'
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Container>
          {open && (
            <ImageDialog
              open={open}
              handleClose={handleClose}
              imageUrl={currentImage}
              
            />
          )}
    </>
  );
};

export default Gallery;
