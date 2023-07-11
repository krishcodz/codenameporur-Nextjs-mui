import React from "react";
import {
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  Box,
  Button,
  useMediaQuery,
  Menu,
  MenuItem,
  Link,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DownloadIcon from "@mui/icons-material/Download";
import Image from "next/image";
import Logo from "../public/images/rOneLogo.jpeg";

const Navbar = ({ setOpenEnquiry }) => {
  const scrollToView = (target) => {
    const section = document.querySelector(target);
    section.scrollIntoView({ behavior: "smooth", block: "start" });
    // if (isMobile === true) {
    //   handleMenuClose();
    // }
  };

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
      <Toolbar sx={{ paddingY: "5px" }}>
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
              <MenuItem onClick={() => scrollToView("#amenities")}>
                <Typography sx={{ ":hover": { cursor: "pointer" } }}>
                  Amenities
                </Typography>
              </MenuItem>
              <MenuItem onClick={() => scrollToView("#gallery")}>
                <Typography sx={{ ":hover": { cursor: "pointer" } }}>
                  Gallery
                </Typography>
              </MenuItem>
              <MenuItem onClick={() => scrollToView("#about")}>
                <Typography sx={{ ":hover": { cursor: "pointer" } }}>
                  About
                </Typography>
              </MenuItem>
              <MenuItem onClick={() => scrollToView("#contact")}>
                <Typography sx={{ ":hover": { cursor: "pointer" } }}>
                  Contact
                </Typography>
              </MenuItem>
              <MenuItem>
                <Button
                  onClick={() => setOpenEnquiry(true)}
                  variant="contained"
                  startIcon={<DownloadIcon />}
                  sx={{
                    width: "100%",
                    marginTop: 2,
                    background: "#FBB70F",
                    ":hover": {
                      background: "#FF9900",
                    },
                  }}
                >
                  Enquire
                </Button>
              </MenuItem>
            </Menu>
            <Link href="/" style={{ marginLeft: "35%" }} passhref>
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
            <Typography
              onClick={() => scrollToView("#home")}
              sx={{ ":hover": { cursor: "pointer" } }}
            >
              <Image
                src={Logo}
                alt="logo"
                style={{
                  height: 50,
                  width: 70,
                }}
              />
            </Typography>
            <Box
              sx={{ display: "flex", alignItems: "center", marginLeft: "auto" }}
            >
              <Typography
                onClick={() => scrollToView("#amenities")}
                sx={{ marginRight: 2, ":hover": { cursor: "pointer" } }}
              >
                Amenities
              </Typography>
              <Typography
                onClick={() => scrollToView("#gallery")}
                sx={{ marginRight: 2, ":hover": { cursor: "pointer" } }}
              >
                Gallery
              </Typography>
              <Typography
                onClick={() => scrollToView("#about")}
                sx={{ marginRight: 2, ":hover": { cursor: "pointer" } }}
              >
                About
              </Typography>
              <Typography
                onClick={() => scrollToView("#contact")}
                sx={{ marginRight: 2, ":hover": { cursor: "pointer" } }}
              >
                Contact
              </Typography>
              <Button
                onClick={() => setOpenEnquiry(true)}
                variant="contained"
                startIcon={<DownloadIcon />}
                sx={{
                  marginLeft: 2,
                  background: "#FBB70F",
                  ":hover": {
                    background: "#FF9900",
                  },
                }}
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
