import * as React from "react";
import Popover from "@mui/material/Popover";
import logo from '../../assets/logo.png';
import './Logo.css';

import LogoContent from "./LogoContent/LogoContent";

import { getBackgroundColor } from "../../utils";

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
        title="links"
      />
      
      <Popover
        open={show}
        anchorEl={anchorEl.current}
        onClose={hoverOff}
        disableAutoFocus
        disableEnforceFocus
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center"
        }}
        slotProps={{
          paper: {
            sx: {
              backgroundColor: getBackgroundColor(),
              boxShadow: 'none',
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
        children={<LogoContent/>}
      />
    </div>
  );
};

export default Logo;
