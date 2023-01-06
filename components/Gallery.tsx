import { useState } from 'react';
import { Container, Typography, Tooltip } from '@mui/material';
import Image from 'next/image';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import galleryList from '../json/gallery.json';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import FsLightbox from 'fslightbox-react';

const Gallery = () => {
  const [open, setOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>();

  const handleClickOpen = (imageUrl: number) => {
    setOpen(!open);
    setCurrentImageIndex(imageUrl);
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

      <Container maxWidth='md' className='relative mt-10'>
        <ImageList
          variant='masonry'
          cols={2}
          gap={12}
          className='gradient-shadow'
        >
          {galleryList.map((item, index: number) => (
            <Tooltip title={item.title} key={item.title} arrow>
              <ImageListItem
                className='hover:cursor-pointer group'
                onClick={() => handleClickOpen(index)}
              >
                {item.videoUrl && (
                  <PlayCircleIcon className='absolute text-6xl transform -translate-x-1/2 -translate-y-1/2 rounded-full shadow-md opacity-75 group-hover:opacity-100 fill-white top-1/2 left-1/2' />
                )}
                <Image
                  src={item.url}
                  alt={item.title}
                  width={360}
                  height={500}
                  className='border-4 border-white rounded-xl'
                />
              </ImageListItem>
            </Tooltip>
          ))}
        </ImageList>
      </Container>

      <FsLightbox
        toggler={open}
        sources={galleryList.map((item) => item.videoUrl ?? item.url)}
        types={galleryList.map((item) => (item.videoUrl ? 'youtube' : 'image'))}
        sourceIndex={currentImageIndex}
      />
    </>
  );
};

export default Gallery;
