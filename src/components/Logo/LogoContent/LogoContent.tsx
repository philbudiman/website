import './LogoContent.css';
import { Email, GitHub, LinkedIn } from '@mui/icons-material';

const icons = [
  { Component: LinkedIn, label: 'LinkedIn', href: 'https://www.linkedin.com/in/phillipbudiman' },
  { Component: GitHub, label: 'GitHub', href: 'https://github.com/philbudiman' },
  { Component: Email, label: 'Email', href: 'mailto:phillipbudiman@gmail.com', }
];

const LogoContent = () => {
  return (
    <div className='icon-wrapper'>
      {icons.map(({ Component, label, href }) => (
        <a key={label} aria-label={label} title={label} href={href} target="_blank">
          <Component fontSize='inherit' />
        </a>
      ))}
    </div>
  );
};

export default LogoContent;
