import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import IconButton from '@mui/material/IconButton';

const contactList = [
  {
    key: 'E-mail',
    component: <EmailIcon key='mail' />,
    url: process.env.NEXT_PUBLIC_MAIL as string
  },
  {
    key: 'LinkedIn',
    component: <LinkedInIcon key='linkedin' />,
    url: process.env.NEXT_PUBLIC_LINKEDIN as string
  },
  {
    key: 'Github',
    component: <GitHubIcon key='github' />,
    url: process.env.NEXT_PUBLIC_GITHUB as string
  },
  {
    key: 'Twitter',
    component: <TwitterIcon key='twitter' />,
    url: process.env.NEXT_PUBLIC_TWITTER as string
  },
  {
    key: 'Instagram',
    component: <InstagramIcon key='instagram' />,
    url: process.env.NEXT_PUBLIC_INSTAGRAM as string
  }
];

const ContactList = () => {
  return (
    <>
      {contactList.map((item) => (
        <IconButton
          key={item.key}
          title={item.key}
          size='medium'
          aria-label='delete'
          className='transition-all duration-300 ease-in-out from-pink-500 to-indigo-700 text-slate-700 hover:bg-gradient-to-r hover:text-slate-50'
          href={item.url}
          target='_blank'
        >
          {item.component}
        </IconButton>
      ))}
    </>
  );
};

export default ContactList;
