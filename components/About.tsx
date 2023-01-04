import {
  Container,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button,
  IconButton
} from '@mui/material';
import Image from 'next/image';
import ProfilePic from '/public/images/profile_pic.jpeg';
import ContactList from './ContactList';

const About = () => {
  return (
    <Container maxWidth='md' className='md:px-0' id='about-section'>
      <Card className='text-justify rounded-xl sm:flex sm:flex-row-reverse shadow-2xl shadow-sky-800/30'>
        <div className='mx-auto h-[200px] w-[200px] overflow-hidden rounded-full max-sm:mt-8 sm:h-auto sm:w-auto sm:overflow-visible sm:rounded-none'>
          <Image
            src={ProfilePic}
            alt='profile_pic'
            title='profile_pic'
            width={500}
            height={500}
            className='sm:px-auto object-cover object-center max-sm:translate-y-9 max-sm:scale-150 sm:h-[100%] sm:w-auto md:object-left'
          />
        </div>
        <div className='px-0 sm:flex sm:basis-4/5 sm:flex-col sm:justify-between sm:p-8 '>
          <CardContent className=''>
            <Typography
              gutterBottom
              variant='h5'
              component='div'
              className='mb-4 font-mono font-bold indent-8'
            >
              About
            </Typography>
            <Typography
              variant='body2'
              color='text.secondary'
              className='font-mono tracking-tighter indent-8'
            >
              {process.env.NEXT_PUBLIC_ABOUT_DESC_1}
            </Typography>
            <br />
            <Typography
              variant='body2'
              color='text.secondary'
              className='font-mono tracking-tighter indent-8'
            >
              {process.env.NEXT_PUBLIC_ABOUT_DESC_2}
            </Typography>
            <br />
            <Typography
              variant='body2'
              color='text.secondary'
              className='font-mono tracking-tighter indent-8'
            >
              {process.env.NEXT_PUBLIC_ABOUT_DESC_3}
            </Typography>
          </CardContent>
          <CardActions className='justify-center max-sm:mb-4'>
            <ContactList />
          </CardActions>
        </div>
      </Card>
    </Container>
  );
};

export default About;
