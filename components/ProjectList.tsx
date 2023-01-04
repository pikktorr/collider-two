import { Container, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import ProjectCard from './ProjectCard';
import projects from '../json/projects.json';
import Image from 'next/image';

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
        className='mt-10'
      >
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
