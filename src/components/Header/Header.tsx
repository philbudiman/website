import './Header.css';
import logo from './assets/logo.png';
import Dropdown from '../Dropdown/Dropdown';

const Header = () => {
  return (
    <header className="header">
      <Dropdown />
      <img
        src={logo}
        className="logo"
      />
    </header>
  );
};

export default Header;