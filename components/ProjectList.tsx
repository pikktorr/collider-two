import { Container, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import ProjectCard from './ProjectCard';

const ProjectList = () => {
  return (
    <>
      <Container maxWidth='md' className='mt-20'>
        <Typography
          id='projects-section'
          gutterBottom
          variant='h5'
          component='div'
          className='mb-4 font-mono font-bold indent-8'
        >
          Projects
        </Typography>
      </Container>
      <Container maxWidth='lg' className='mt-10'>
        <Grid container spacing={4}>
          <Grid xs={12} sm={6} md={4}>
            <ProjectCard />
          </Grid>
          <Grid xs={12} sm={6} md={4}>
            <ProjectCard />
          </Grid>
          <Grid xs={12} sm={6} md={4}>
            <ProjectCard />
          </Grid>
          <Grid xs={12} sm={6} md={4}>
            <ProjectCard />
          </Grid>
          <Grid xs={12} sm={6} md={4}>
            <ProjectCard />
          </Grid>{' '}
          <Grid xs={12} sm={6} md={4}>
            <ProjectCard />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default ProjectList;
