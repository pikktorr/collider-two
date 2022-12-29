import {
  Container,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button
} from '@mui/material';
import Image from 'next/image';
import ProfilePic1 from '/public/images/profile_1.jpeg';

const About = () => {
  return (
    <Container maxWidth='md' className='px-10 md:px-0'>
      <Card className='rounded-xl pt-8 pb-4 text-center shadow-xl sm:flex sm:flex-row-reverse sm:p-0 sm:text-left'>
        <div className='mx-auto h-[200px] w-[200px] overflow-hidden sm:overflow-visible rounded-full sm:w-auto sm:h-[100%] sm:rounded-none'>
          <Image
            src={ProfilePic1}
            alt='profile_pic'
            title='profile_pic'
            className='translate-y-9 scale-150 sm:w-auto sm:h-[100%]'
          />
        </div>
        <div className='px-0 pt-4 sm:flex sm:flex-col sm:justify-between sm:p-8'>
          <CardContent className=''>
            <Typography
              gutterBottom
              variant='h5'
              component='div'
              className='font-mono font-bold'
            >
              About
            </Typography>
            <Typography
              variant='body2'
              color='text.secondary'
              className='font-mono'
            >
              {process.env.NEXT_PUBLIC_ABOUT_DESC_1}
            </Typography>
            <br />
            <Typography
              variant='body2'
              color='text.secondary'
              className='font-mono'
            >
              {process.env.NEXT_PUBLIC_ABOUT_DESC_2}
            </Typography>
            <br />
            <Typography
              variant='body2'
              color='text.secondary'
              className='font-mono'
            >
              {process.env.NEXT_PUBLIC_ABOUT_DESC_3}
            </Typography>
          </CardContent>
          <CardActions className='justify-center sm:justify-start'>
            <Button size='small'>Share</Button>
            <Button size='small'>Learn More</Button>
          </CardActions>
        </div>
      </Card>
    </Container>
  );
};

export default About;
