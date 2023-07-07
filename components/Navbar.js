import React from "react";
import Link from "next/link";
import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
  Button,
  useMediaQuery,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import MailIcon from "@mui/icons-material/Mail";
import CollectionsIcon from "@mui/icons-material/Collections";
import SportsGolfIcon from "@mui/icons-material/SportsGolf";
import DownloadIcon from "@mui/icons-material/Download";

import Image from "next/image";
import Logo from "../public/images/rOneLogo.jpeg";

const Navbar = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="fixed"
      sx={{ backgroundColor: "#f7f7f7", color: "black" }}
    >
      <Toolbar>
        {isMobile ? (
          <>
            <IconButton
              color="inherit"
              aria-label="menu"
              onClick={handleMenuClick}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleMenuClose}>
                <Link href="/amenities" passHref>
                  <IconButton color="inherit" aria-label="amenities">
                    <SportsGolfIcon />
                  </IconButton>
                </Link>
                Amenities
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <Link href="/gallery" passHref>
                  <IconButton color="inherit" aria-label="gallery">
                    <CollectionsIcon />
                  </IconButton>
                </Link>
                Gallery
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <Link href="#about" passHref>
                  <IconButton color="inherit" aria-label="about">
                    <InfoIcon />
                  </IconButton>
                </Link>
                About
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <Link href="/contact" passHref>
                  <IconButton color="inherit" aria-label="contact">
                    <MailIcon />
                  </IconButton>
                </Link>
                Contact
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <Button
                  variant="contained"
                  startIcon={<DownloadIcon />}
                  sx={{ width: "100%", marginTop: 2 }}
                >
                  Enquire
                </Button>
              </MenuItem>
            </Menu>
            <Link href="/" passHref style={{ marginLeft: "35%" }}>
              <Image
                src={Logo}
                alt="logo"
                style={{
                  height: 50,
                  width: 70,
                }}
              />
            </Link>
          </>
        ) : (
          <>
            <Link href="/" passHref>
              <Image
                src={Logo}
                alt="logo"
                style={{
                  height: 50,
                  width: 70,
                }}
              />
            </Link>
            <Box
              sx={{ display: "flex", alignItems: "center", marginLeft: "auto" }}
            >
              <Link href="/amenities" passHref style={{marginRight:15}}>
                <IconButton color="inherit" aria-label="amenities">
                  <SportsGolfIcon />
                </IconButton>
                Amenities
              </Link>
              <Link href="/gallery" passHref style={{marginRight:15}}>
                <IconButton color="inherit" aria-label="gallery">
                  <CollectionsIcon />
                </IconButton>
                Gallery
              </Link>
              <Link href="#about" passHref style={{marginRight:15}}>
                <IconButton color="inherit" aria-label="about">
                  <InfoIcon />
                </IconButton>
                About
              </Link>
              <Link href="/contact" passHref style={{marginRight:15}}>
                <IconButton color="inherit" aria-label="contact">
                  <MailIcon />
                </IconButton>
                Contact
              </Link>
              <Button
                variant="contained"
                startIcon={<DownloadIcon />}
                sx={{ marginLeft: 2, background: '#FBB70F', ":hover": {
                  background: "#FF9900",
                  borderRadius:130,
                }}}
              >
                Enquire
              </Button>
            </Box>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
