import { Card, CardActions, CardContent, Typography } from '@mui/material';
import Image from 'next/image';
import Tilt from 'react-parallax-tilt';
import NextjsIcon from '../public/icons/nextjs.svg';
import ReactIcon from '../public/icons/react.svg';
import StripeIcon from '../public/icons/stripe.svg';
import SassIcon from '../public/icons/sass.svg';

export interface ProjectProps {
  project: {
    title: string;
    tool: string;
    about: string;
    imageUrl: string;
    url: string;
  };
}

const ProjectCard = ({ project }: ProjectProps) => {
  return (
    <Tilt
      tiltMaxAngleX={4}
      tiltMaxAngleY={4}
      glareEnable
      glarePosition='top'
      glareReverse
      glareMaxOpacity={0.3}
      className='h-[inherit]'
    >
      <Card className='text-justify shadow-xl cursor-pointer shadow-indigo-200 hover:shadow-fuchsia-200 rounded-xl'>
        <Image
          src={project.imageUrl}
          width={650}
          height={300}
          alt={project.title}
          title={project.title}
          className='object-cover object-center h-[300px]'
        />
        <CardContent className='p-8'>
          <Typography
            gutterBottom
            variant='h5'
            component='div'
            className='mb-4 font-mono font-bold'
          >
            {project.title}
          </Typography>
          <Typography
            variant='body2'
            color='text.secondary'
            className='font-mono tracking-tighter'
          >
            {project.about}
          </Typography>
        </CardContent>
        <CardActions className='gap-2 px-8 pt-0 pb-8'>
          <Image
            src={NextjsIcon}
            alt='nextjs'
            title='Next.js'
            width={28}
            className='opacity-75'
          />
          <Image src={ReactIcon} alt='react' title='React.js' width={28} />
          <Image
            src={StripeIcon}
            alt='stripe'
            title='Stripe'
            width={28}
            className='opacity-75'
          />
          <Image src={SassIcon} alt='sass' title='Sass' width={28} />
        </CardActions>
      </Card>
    </Tilt>
  );
};

export default ProjectCard;
