import './Header.css';
import logo from './assets/logo.png';
import Menu from '../Menu/Menu';

const Header = () => {
  return (
    <header className="header">
      <Menu />
      <img
        src={logo}
        className="logo"
      />
    </header>
  );
};

export default Header;