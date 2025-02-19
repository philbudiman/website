import './MenuContent.css';
import { Link } from 'wouter';

const MenuContent = () => {
  const buttonMap: Record<string, string> = {
    'home': '/',
    'about': '/about'
  };
  return (
    <div className="menu-content">
      {Object.keys(buttonMap).map((key) => (
        <Link className="menu-link" to={buttonMap[key]}>
          {key}
        </Link>
      ))}
    </div>
  );
};
export default MenuContent;