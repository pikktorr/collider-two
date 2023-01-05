import {
  Card,
  CardActions,
  CardContent,
  Typography,
  Tooltip
} from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import Tilt from 'react-parallax-tilt';
import { projectIcons } from '../data/projectIcons';
import { ProjectProps } from '../interfaces/ProjectProps';

const ProjectCard = ({ project }: ProjectProps) => {

console.log('href', project.url)
  
  return (
    <Tilt
      tiltMaxAngleX={6}
      tiltMaxAngleY={6}
      glareEnable
      glarePosition='top'
      glareReverse
      glareMaxOpacity={0.5}
    >
      <Link
        href={project.url ?? ''}
        rel='noopener noreferrer'
        target='_blank'
        className={`${!project.url && 'pointer-events-none'}`}
      >
        <Card className='flex flex-col h-[100%] text-justify hover:gradient-shadow shadow-2xl cursor-pointer rounded-xl'>
          <Image
            src={project.imageUrl as string}
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
                    className={`opacity-75 ${
                      !project.url && 'pointer-events-auto cursor-auto'
                    }`}
                  />
                </Tooltip>
              );
            })}
          </CardActions>
        </Card>
      </Link>
    </Tilt>
  );
};

export default ProjectCard;
