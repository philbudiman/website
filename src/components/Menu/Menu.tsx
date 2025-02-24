import * as React from "react";
import Popover from "@mui/material/Popover";
import { Cross as Hamburger } from 'hamburger-react';

import MenuContent from "./MenuContent/MenuContent";

import "./Menu.css";
import { getBackgroundColor, isDarkMode } from "../../utils";

const Menu = () => {
  const [isOpen, setOpen] = React.useState<boolean>(false);

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };

  return (
    <>
      <span onClick={handleClick}>
        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          size={24}
          distance="md"
          direction="right"
        />
      </span>
      
      <Popover
        open={isOpen}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        slotProps={{
          paper: {
            sx: {
              backgroundColor: getBackgroundColor(),
              border: isDarkMode() ?'1px solid #333': undefined,
              borderRadius: '8px',
            }
          }
        }}
        children={<MenuContent/>}
      />
    </>
  );
};

export default Menu;
