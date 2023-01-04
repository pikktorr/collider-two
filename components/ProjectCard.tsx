import { Card, CardActions, CardContent, Typography } from '@mui/material';
import Image from 'next/image';
import Tilt from 'react-parallax-tilt';
import { projectIcons } from '../assets/projectIcons';

export interface ProjectProps {
  project: {
    title: string;
    tool: string[];
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
    >
      <Card className='text-justify shadow-xl cursor-pointer rounded-xl'>
        <Image
          src={project.imageUrl}
          width={650}
          height={300}
          alt={project.title}
          title={project.title}
          className='object-cover object-center'
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
          {project.tool.map((iconName) => {
            return (
              <Image
                src={projectIcons[iconName]}
                alt={iconName}
                title={iconName}
                width={28}
                height={28}
                key={iconName}
              />
            );
          })}
        </CardActions>
      </Card>
    </Tilt>
  );
};

export default ProjectCard;
