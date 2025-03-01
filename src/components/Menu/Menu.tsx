import * as React from "react";
import Popover from "@mui/material/Popover";
import { Modal, Fade, Box, IconButton } from "@mui/material";
import { Cross as Hamburger } from 'hamburger-react';
import MenuContent from "./MenuContent/MenuContent";
import "./Menu.css";
import { getBackgroundColor, getPrimaryColor, isDarkMode } from "../../utils";


const Menu: React.FC = () => {
  const [isOpen, setOpen] = React.useState<boolean>(false);
  const [isMobile, setIsMobile] = React.useState<boolean>(false);
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 480);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const popoverContent = (
    <Popover
      open={isOpen && !isMobile}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      slotProps={{
        paper: {
          sx: {
            backgroundColor: getBackgroundColor(),
            border: isDarkMode() ? '1px solid #333' : undefined,
            borderRadius: '8px',
          }
        }
      }}
      children={<MenuContent />}
    />
  );

  const modalContent = (
    <Modal
      open={isOpen && isMobile}
      onClose={handleClose}
    >
      <Fade in={isOpen} timeout={500}>
        <Box
          sx={{
            width: '100vw',
            height: '100vh',
            bgcolor: getBackgroundColor(),
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            overflow: 'auto',
            position: 'relative', //added for absolute positioning of close button
          }}
        >
          <IconButton
            sx={{
              position: 'absolute',
              top: '1rem', // Matches Header margin
              left: '.7rem', // Matches Header margin
              color: getPrimaryColor(),
            }}
            onClick={handleClose}
          >
            <Hamburger
              toggled={isOpen}
              toggle={setOpen}
              size={24}
              distance="md"
              direction="right"
            />
          </IconButton>
          <Box sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <MenuContent onClick={handleClose}/>
          </Box>
        </Box>
      </Fade>
    </Modal>
  );

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
      {popoverContent}
      {modalContent}
    </>
  );
};

export default Menu;
