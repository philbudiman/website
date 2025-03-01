import React from 'react';

import { Link } from 'wouter';
import Donut from '../../components/Donut/Donut';
import './NotFound.css';

const NotFound = () => {
  const [isMobile, setIsMobile] = React.useState<boolean>(false);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 480 || window.innerHeight < 480);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="NotFound fade-in">
      { !isMobile && <Donut width={55} /> }
      <div className="content">
        <h1>404</h1>
        <h3>Page Not Found</h3>

        <i>It's too dangerous to go alone! Take this.</i>
        <p>Let's head <Link to="/">home</Link>.</p>
      </div>
    </div>
  );
};

export default NotFound;