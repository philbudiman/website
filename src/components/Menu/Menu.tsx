import * as React from "react";
import Popover from "@mui/material/Popover";
import { Modal, Fade, Box, IconButton, Backdrop } from "@mui/material";
import { Cross as Hamburger } from 'hamburger-react';
import MenuContent from "./MenuContent/MenuContent";
import "./Menu.css";
import { getBackgroundColor, getPrimaryColor, isDarkMode } from "../../utils";
import LogoContent from "../Logo/LogoContent/LogoContent";


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
      setIsMobile(window.innerWidth < 480 || window.innerHeight < 480);
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
      children={<MenuContent onClick={handleClose} />}
    />
  );

  const modalContent = (
    <Modal
      open={isOpen && isMobile}
      onClose={handleClose}
      // Adding a backdrop component with no opacity to fix the flashing issue
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          sx: {
            backgroundColor: 'transparent', // Make the backdrop transparent
            maxWidth: '100vw',
          },
        },
      }}
    >
      <Fade in={isOpen} timeout={500}>
        <Box
          sx={{
            width: '100vw',
            height: '100dvh',
            bgcolor: getBackgroundColor(),
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            overflow: 'auto',
            position: 'relative',
          }}
        >
          <Box
            sx={{
              width: '90vw',
              margin: '1.5rem',
              display: 'flex',
              alignItems: 'flex-start',
              '@media (orientation: landscape)': {
                width: '95vw'
              },
            }}
          >
            <IconButton
              sx={{
                color: getPrimaryColor(),
                padding: 0,
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
          </Box>
          <Box sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            paddingBottom: '1.5rem',
          }}>
            <MenuContent onClick={handleClose} />
            <Box sx={{
              display: 'flex',
              flexDirection: 'row',
              marginTop: '1rem', // Add some margin top
            }}>
              <LogoContent flexDirection="row" noAnimation/>
            </Box>
          </Box>
        </Box>
      </Fade>
    </Modal>
  );

  return (
    <>
      <IconButton 
        sx={{
          color: "inherit",
          padding: 0,
        }}
        onClick={handleClick}
      >
        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          size={24}
          distance="md"
          direction="right"
        />
      </IconButton>
      {popoverContent}
      {modalContent}
    </>
  );
};

export default Menu;
