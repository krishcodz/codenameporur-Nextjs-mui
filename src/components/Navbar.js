import React from "react";
import PropTypes from "prop-types";
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
import Logo from "../../public/images/logo.webp";

function Navbar({ setOpenEnquiry }) {
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
      <Toolbar sx={{ paddingY: "1px" }}>
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
                <Typography
                  sx={{
                    ":hover": { cursor: "pointer", fontWeight: "bolder" },
                    color: "#666666",
                  }}
                >
                  AMENITIES
                </Typography>
              </MenuItem>
              <MenuItem onClick={() => scrollToView("#gallery")}>
                <Typography
                  sx={{ ":hover": { cursor: "pointer" }, color: "#666666" }}
                >
                  GALLERY
                </Typography>
              </MenuItem>
              <MenuItem onClick={() => scrollToView("#about")}>
                <Typography
                  sx={{ ":hover": { cursor: "pointer" }, color: "#666666" }}
                >
                  ABOUT
                </Typography>
              </MenuItem>
              <MenuItem onClick={() => scrollToView("#contact")}>
                <Typography
                  sx={{ ":hover": { cursor: "pointer" }, color: "#666666" }}
                >
                  CONTACT
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
                    fontSize: "13px",
                    background: "#FABA00",
                    ":hover": {
                      background: "#1f3347",
                      color: "#e03427",
                    },
                    borderRadius: "20px",
                  }}
                >
                  ENQUIRE
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
            <Box
              xs={1}
              onClick={() => scrollToView("#home")}
              sx={{
                ":hover": { cursor: "pointer" },
              }}
            >
              <Image src={Logo} alt="logo" width="150" height="70" />
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginLeft: "auto",
              }}
            >
              <Typography
                onClick={() => scrollToView("#amenities")}
                sx={{
                  ":hover": {
                    cursor: "pointer",
                    fontWeight: 600,
                    color: "#e03427",
                  },
                  fontSize: "16px",
                  paddingX: "15px",
                  color: "#666666",
                }}
              >
                AMENITIES
              </Typography>
              <Typography
                onClick={() => scrollToView("#gallery")}
                sx={{
                  ":hover": {
                    cursor: "pointer",
                    fontWeight: 600,
                    color: "#e03427",
                  },
                  fontSize: "16px",
                  paddingX: "15px",
                  color: "#666666",
                }}
              >
                GALLERY
              </Typography>
              <Typography
                onClick={() => scrollToView("#about")}
                sx={{
                  ":hover": {
                    cursor: "pointer",
                    fontWeight: 600,
                    color: "#e03427",
                  },
                  fontSize: "16px",
                  paddingX: "15px",
                  color: "#666666",
                }}
              >
                ABOUT
              </Typography>
              <Typography
                onClick={() => scrollToView("#contact")}
                sx={{
                  ":hover": {
                    cursor: "pointer",
                    fontWeight: 600,
                    color: "#e03427",
                  },
                  fontSize: "16px",
                  paddingX: "15px",
                  color: "#666666",
                }}
              >
                CONTACT
              </Typography>
              <Button
                onClick={() => setOpenEnquiry(true)}
                variant="contained"
                startIcon={<DownloadIcon />}
                sx={{
                  marginLeft: "15px",
                  fontSize: "13px",
                  background: "#FABA00",
                  ":hover": {
                    background: "#1f3347",
                    color: "#e03427",
                  },
                  borderRadius: "20px",
                }}
              >
                ENQUIRE
              </Button>
            </Box>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}

Navbar.propTypes = {
  setOpenEnquiry: PropTypes.func.isRequired,
};

export default Navbar;
