import './Header.css';
import { useState } from 'react';
import { Cross as Hamburger } from 'hamburger-react';
import logo from './assets/logo.png';

const Header = () => {
  const [isOpen, setOpen] = useState<boolean>(false);
  return (
    <header className="header">
      <Hamburger
        toggled={isOpen}
        toggle={setOpen}
        size={24}
        distance="md"
        onToggle={() => console.log('Toggled!')}
        direction="right"
        color="white"
      />
      <img
        src={logo}
        className="logo"
      />
    </header>
  );
};

export default Header;