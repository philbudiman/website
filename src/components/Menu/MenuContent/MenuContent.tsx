import './MenuContent.css';
import { Link } from 'wouter';

interface MenuContentProps {
  onClick?: () => void;
}

const MenuContent = (props: MenuContentProps) => {
  const buttonMap: Record<string, string> = {
    'home': '/',
    'about': '/about',
    'blog': '/blog',
  };
  return (
    <div className="menu-content">
      {Object.entries(buttonMap).map(([entry, url]) => (
        <Link className="menu-link" key={entry} to={url} onClick={props.onClick}>
          {entry}
        </Link>
      ))}
    </div>
  );
};
export default MenuContent;