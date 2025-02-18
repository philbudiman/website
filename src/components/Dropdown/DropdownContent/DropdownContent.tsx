import './DropdownContent.css';
import { Link } from 'wouter';

const DropdownContent = () => {
  const buttonMap: Record<string, string> = {
    'home': '/',
    'about': '/about'
  };
  return (
    <div className="dropdown-content">
      {Object.keys(buttonMap).map((key) => (
        <Link className="dropdown-link" to={buttonMap[key]}>
          {key}
        </Link>
      ))}
    </div>
  );
};
export default DropdownContent;