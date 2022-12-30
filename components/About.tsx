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
import ProfilePic1 from '/public/images/profile_1.jpeg';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const About = () => {
  const contactList = [
    <EmailIcon key='mail' />,
    <LinkedInIcon key='linkedin' />,
    <GitHubIcon key='github' />,
    <TwitterIcon key='twitter' />,
    <InstagramIcon key='instagram' />
  ];

  return (
    <Container maxWidth='md' className='md:px-0'>
      <Card className='rounded-xl text-justify shadow-xl sm:flex sm:flex-row-reverse '>
        <div className='mx-auto h-[200px] w-[200px] overflow-hidden rounded-full max-sm:mt-8 sm:h-auto sm:w-auto sm:overflow-visible sm:rounded-none'>
          <Image
            src={ProfilePic1}
            alt='profile_pic'
            title='profile_pic'
            className='sm:px-auto object-cover object-center max-sm:translate-y-9 max-sm:scale-150 sm:h-[100%] sm:w-auto md:object-left'
          />
        </div>
        <div className='px-0 sm:flex sm:basis-4/5 sm:flex-col sm:justify-between sm:p-8 '>
          <CardContent className=''>
            <Typography
              gutterBottom
              variant='h5'
              component='div'
              className='mb-4 indent-8 font-mono font-bold'
            >
              About
            </Typography>
            <Typography
              variant='body2'
              color='text.secondary'
              className='indent-8 font-mono tracking-tighter'
            >
              {process.env.NEXT_PUBLIC_ABOUT_DESC_1}
            </Typography>
            <br />
            <Typography
              variant='body2'
              color='text.secondary'
              className='indent-8 font-mono tracking-tighter'
            >
              {process.env.NEXT_PUBLIC_ABOUT_DESC_2}
            </Typography>
            <br />
            <Typography
              variant='body2'
              color='text.secondary'
              className='indent-8 font-mono tracking-tighter'
            >
              {process.env.NEXT_PUBLIC_ABOUT_DESC_3}
            </Typography>
          </CardContent>
          <CardActions className='justify-center max-sm:mb-4'>
            {contactList.map((item) => (
              <IconButton
                key={item.key}
                size='large'
                aria-label='delete'
                className='from-pink-500 to-indigo-700
                  text-slate-700 transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:text-slate-50'
              >
                {item}
              </IconButton>
            ))}
          </CardActions>
        </div>
      </Card>
    </Container>
  );
};

export default About;
