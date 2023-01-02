import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Image from 'next/image';
import skills from '../json/skills.json';

function srcset(image: string, size: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`
  };
}

export default function QuiltedImageList() {
  return (
    <ImageList variant='masonry' cols={8} gap={30}>
      {skills.map((item) => (
        <ImageListItem key={item.name}>
          <Image
            src={`${item.imageUrl}?w=248&fit=crop&auto=format`}
            alt={item.name}
            loading='lazy'
            width={300}
            height={300}
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
