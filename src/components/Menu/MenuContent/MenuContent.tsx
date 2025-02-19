import './MenuContent.css';
import { Link } from 'wouter';

const MenuContent = () => {
  const buttonMap: Record<string, string> = {
    'home': '/',
    'about': '/about'
  };
  return (
    <div className="menu-content">
      {Object.entries(buttonMap).map(([entry, url]) => (
        <Link className="menu-link" key={entry} to={url}>
          {entry}
        </Link>
      ))}
    </div>
  );
};
export default MenuContent;