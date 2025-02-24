import './Footer.css';

import ThemeToggle from '../Theme/ThemeToggle';

const Footer = () => {
  return (
    <>
     <footer className="Footer">
        <p>&copy; phil budiman {new Date().getFullYear()}</p>
        <p>|</p>
        <ThemeToggle mode="text" />
      </footer>
    </>
  )
};

export default Footer;