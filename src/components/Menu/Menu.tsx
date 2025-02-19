import * as React from "react";
import Popover from "@mui/material/Popover";
import { Cross as Hamburger } from 'hamburger-react';

import MenuContent from "./MenuContent/MenuContent";

import "./Menu.css";

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
          color="white"
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
              backgroundColor: 'black',
              color: 'white', // Ensure text is visible
              border: '1px solid #333', // Optional: add a border for better visibility
              borderRadius: '8px', // Optional: add rounded corners for better appearance
            }
          }
        }}
        children={<MenuContent/>}
      />
    </>
  );
};

export default Menu;
