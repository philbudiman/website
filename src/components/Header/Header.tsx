import './Header.css';
import Menu from '../Menu/Menu';
import Logo from '../Logo/Logo';

const Header = () => {
  return (
    <header className="header">
      <Menu />
      <Logo />
    </header>
  );
};

export default Header;