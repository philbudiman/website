import './LogoContent.css';
import { Email, GitHub, LinkedIn } from '@mui/icons-material';
import { Slide } from '@mui/material';
import { useState, useEffect } from 'react';

const icons = [
  { Component: LinkedIn, label: 'LinkedIn', href: 'https://www.linkedin.com/in/phillipbudiman' },
  { Component: GitHub, label: 'GitHub', href: 'https://github.com/philbudiman' },
  { Component: Email, label: 'Email', href: 'mailto:phillipbudiman@gmail.com' },
];

const LogoContent = () => {
  const [visibleIndex, setVisibleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleIndex((prevIndex) => Math.min(prevIndex + 1, icons.length - 1));
    }, 10); // Adjust the interval (in ms) for how fast each item should appear

    return () => clearInterval(timer);
  }, []);

  return (
    <div className='icon-wrapper'>
      {icons.map(({ Component, label, href }, index) => (
        <Slide key={label} in={index <= visibleIndex} direction="down" timeout={500}>
          <a aria-label={label} title={label} href={href} target="_blank" rel="noopener noreferrer">
            <Component fontSize='inherit' />
          </a>
        </Slide>
      ))}
    </div>
  );
};

export default LogoContent;
