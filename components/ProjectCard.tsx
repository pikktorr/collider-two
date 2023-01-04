import { Card, CardActions, CardContent, Typography, Tooltip } from '@mui/material';
import Image from 'next/image';
import Tilt from 'react-parallax-tilt';
import { projectIcons } from '../data/projectIcons';
import { ProjectProps } from '../interfaces/ProjectProps';

const ProjectCard = ({ project }: ProjectProps) => {
  return (
    <Tilt
      tiltMaxAngleX={6}
      tiltMaxAngleY={6}
      glareEnable
      glarePosition='top'
      glareReverse
      glareMaxOpacity={0.5}
    >
      <Card className='flex flex-col h-[100%] text-justify shadow-2xl shadow-sky-800/30 cursor-pointer rounded-xl'>
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
        <CardActions className='gap-2 px-8 pt-0 pb-8 mt-auto'>
          {project.tool.map((iconName) => {
            return (
              <Tooltip title={iconName} key={iconName}>
                <Image
                  src={projectIcons[iconName]}
                  alt={iconName}
                  width={28}
                  height={28}
                  className='opacity-75'
                  />
              </Tooltip>
            );
          })}
        </CardActions>
      </Card>
    </Tilt>
  );
};

export default ProjectCard;
