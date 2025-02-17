import { Button } from '@mui/material';
import './DropdownContent.css';

const DropdownContent = () => {
  const buttonMap: Record<string, string> = {
    'home': '/',
    'about': '/about'
  };
  return (
    <div className="dropdown-content">
      {Object.keys(buttonMap).map((key) => (
        <Button
        sx={{
          'color': 'white',
          'textTransform': 'none',
          'fontSize': 'medium'
        }}
        key={key}
        href={buttonMap[key]}>
          {key}
        </Button>
      ))
    }
    </div>
  );
};
export default DropdownContent;