import { Container, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import ProjectCard from './ProjectCard';
import projects from '../json/projects.json';
import Image from 'next/image';
import Logo from '/public/images/logo_slice_3.svg';

const ProjectList = () => {
  return (
    <>
      <Container maxWidth='md' className='mt-20 ' id='projects-section'>
        <Typography
          gutterBottom
          variant='h5'
          component='div'
          className='mb-4 font-mono font-bold indent-8'
        >
          Projects
        </Typography>
      </Container>
      <Container
        maxWidth='lg'
        className='mt-10 bg-[url("/public/images/collider_logo.svg")] relative'
      >
        <Image src={Logo} alt='alt' className='absolute z-[-1] rounded-full scale-[1.7] top-[50%] blur-2xl' />
        <Grid container spacing={4}>
          {projects.map((project, index) => {
            return (
              <Grid xs={12} sm={6} md={4} key={index} className='flex'>
                <ProjectCard project={project} />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </>
  );
};

export default ProjectList;
