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
import ContactList from './ContactList'

// import EmailIcon from '@mui/icons-material/Email';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import GitHubIcon from '@mui/icons-material/GitHub';
// import TwitterIcon from '@mui/icons-material/Twitter';
// import InstagramIcon from '@mui/icons-material/Instagram';

// const contactList = [
//   {
//     key: 'E-mail',
//     component: <EmailIcon key='mail' />,
//     url: process.env.NEXT_PUBLIC_MAIL as string
//   },
//   {
//     key: 'LinkedIn',
//     component: <LinkedInIcon key='linkedin' />,
//     url: process.env.NEXT_PUBLIC_LINKEDIN as string
//   },
//   {
//     key: 'Github',
//     component: <GitHubIcon key='github' />,
//     url: process.env.NEXT_PUBLIC_GITHUB as string
//   },
//   {
//     key: 'Twitter',
//     component: <TwitterIcon key='twitter' />,
//     url: process.env.NEXT_PUBLIC_TWITTER as string
//   },
//   {
//     key: 'Instagram',
//     component: <InstagramIcon key='instagram' />,
//     url: process.env.NEXT_PUBLIC_INSTAGRAM as string
//   }
// ];

const About = () => {
  return (
    <Container maxWidth='md' className='md:px-0'>
      <Card className='text-justify shadow-xl rounded-xl sm:flex sm:flex-row-reverse '>
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
              id='about-section'
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
            {/* {contactList.map((item) => (
              <IconButton
                key={item.key}
                title={item.key}
                size='large'
                aria-label='delete'
                className='transition-all duration-300 ease-in-out from-pink-500 to-indigo-700 text-slate-700 hover:bg-gradient-to-r hover:text-slate-50'
                href={item.url}
                target='_blank'
              >
                {item.component}
              </IconButton>
            ))} */}
          </CardActions>
        </div>
      </Card>
    </Container>
  );
};

export default About;
