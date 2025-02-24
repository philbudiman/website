import * as React from "react";
import Popover from "@mui/material/Popover";
import logo from '../../assets/logo.png';
import './Logo.css';

import MenuContent from "../Menu/MenuContent/MenuContent";

const Logo = () => {
  const [show, setShow] = React.useState<boolean>(false);

  const anchorEl = React.useRef<HTMLImageElement | null>(null);

  const hoverOn = () => {
    setShow(true);
  };

  const hoverOff = () => {
    setShow(false);
  };

  return (
    <div className="logo-container">
      <img
        src={logo}
        ref={anchorEl}
        alt="Logo"
        onMouseOver={hoverOn}
        onMouseLeave={hoverOff}
        style={{ cursor: "pointer" }}
      />
      
      <Popover
        open={show}
        anchorEl={anchorEl.current}
        onClose={hoverOff}
        disableAutoFocus
        disableEnforceFocus
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        slotProps={{
          paper: {
            sx: {
              backgroundColor: 'black',
              border: '1px solid #333', // Optional: add a border for better visibility
              borderRadius: '8px', // Optional: add rounded corners for better appearance
              pointerEvents: 'auto',
            },
            // inert: !show ? true : undefined,
            onMouseEnter: hoverOn,
            onMouseLeave: hoverOff,
          }
        }}
        style={{
          pointerEvents: 'none',
        }}
        children={<MenuContent/>}
      />
    </div>
  );
};

export default Logo;
