import React, { useState } from "react";
import {
  Button,
  List,
  ListItem,
  ListItemText,
  Grid,
  Typography,
} from "@mui/material";
import Mapimg from "../public/images/map.jpg";
import Image from "next/image";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const CategoryList = () => {
  const [isOpen, setIsOpen] = useState([false, false, false, false]);

  const toggleOpen = (ind) => {
    setIsOpen((prev) => {
      const arr = [...prev];
      arr.map((val, index) => {
        if (index === ind && val) {
          arr[index] = false;
        } else if (index === ind && !val) {
          arr[index] = true;
        } else {
          arr[index] = false;
        }
      });
      return arr;
    });
  };

  return (
    <Grid
      container
      item
      xs={12}
      sx={{ color: "black", backgroundColor: "white", padding: "40px" }}
    >
      <Grid item xs={12} md={6} sx={{ padding: "20px" }}>
        <iframe
          title="sitemap"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31094.835995337555!2d80.052507!3d13.044932!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x27d2110e57d2b277!2sUrbanrise%20Thirumazhisai%20Township!5e0!3m2!1sen!2sin!4v1608551138928!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </Grid>
      <Grid item xs={12} md={6} sx={{ padding: "20px" }}>
        <List>
          <ListItem
            sx={{
              border: "2px solid #ccc",
              borderRadius: "3px",
            }}
          >
            <ListItemText primary="Schools" />
            <Button onClick={() => toggleOpen(0)} sx={{ color: "black" }}>
              {isOpen[0] ? <RemoveIcon /> : <AddIcon />}
            </Button>
          </ListItem>
          {isOpen[0] && (
            <List
              sx={{
                borderRight: "2px solid #ccc",
                borderLeft: "2px solid #ccc",
                borderBottom: "2px solid #ccc",
                color: "#575555",
                borderRadius: "3px",
              }}
            >
              <ListItem sx={{ px: 4 }}>
                <ListItemText primary="Spartan International School" />
                <Typography>5 mins</Typography>
              </ListItem>
              <ListItem sx={{ px: 4 }}>
                <ListItemText primary="Chennai Public School" />
                <Typography>5 mins</Typography>
              </ListItem>
              <ListItem sx={{ px: 4 }}>
                <ListItemText primary="Chaitanya school" />
                <Typography>10 mins</Typography>
              </ListItem>
              <ListItem sx={{ px: 4 }}>
                <ListItemText primary="Velammal school" />
                <Typography>15 mins</Typography>
              </ListItem>
            </List>
          )}

          <ListItem
            sx={{
              borderBottom: "2px solid #ccc",
              borderRight: "2px solid #ccc",
              borderLeft: "2px solid #ccc",
              borderRadius: "3px",
            }}
          >
            <ListItemText primary="Colleges" />
            <Button onClick={() => toggleOpen(1)} sx={{ color: "black" }}>
              {isOpen[1] ? <RemoveIcon /> : <AddIcon />}
            </Button>
          </ListItem>
          {isOpen[1] && (
            <List
              sx={{
                borderBottom: "2px solid #ccc",
                borderRight: "2px solid #ccc",
                borderLeft: "2px solid #ccc",
                color: "#575555",
                borderRadius: "3px",
              }}
            >
              <ListItem sx={{ px: 4 }}>
                <ListItemText primary="Sri Sastha College" />
                <Typography>3 mins</Typography>
              </ListItem>
              <ListItem sx={{ px: 4 }}>
                <ListItemText primary="Rajalakshmi Institute" />
                <Typography>5 mins</Typography>
              </ListItem>
              <ListItem sx={{ px: 4 }}>
                <ListItemText primary="Panimalar College" />
                <Typography>5 mins</Typography>
              </ListItem>
              <ListItem sx={{ px: 4 }}>
                <ListItemText primary="Saveetha Engg College" />
                <Typography>8 mins</Typography>
              </ListItem>
            </List>
          )}

          <ListItem
            sx={{
              borderBottom: "2px solid #ccc",
              borderRight: "2px solid #ccc",
              borderLeft: "2px solid #ccc",
              borderRadius: "3px",
            }}
          >
            <ListItemText primary="Malls" />
            <Button onClick={() => toggleOpen(2)} sx={{ color: "black" }}>
              {isOpen[2] ? <RemoveIcon /> : <AddIcon />}
            </Button>
          </ListItem>
          {isOpen[2] && (
            <List
              sx={{
                borderBottom: "2px solid #ccc",
                borderRight: "2px solid #ccc",
                borderLeft: "2px solid #ccc",
                color: "#575555",
                borderRadius: "3px",
              }}
            >
              <ListItem sx={{ px: 4 }}>
                <ListItemText primary="EVP Carnival Cinema" />
                <Typography>2 mins</Typography>
              </ListItem>
              <ListItem sx={{ px: 4 }}>
                <ListItemText primary="Queens Land" />
                <Typography>5 mins</Typography>
              </ListItem>
              <ListItem sx={{ px: 4 }}>
                <ListItemText primary="Chokhi Dhani" />
                <Typography>8 mins</Typography>
              </ListItem>
              <ListItem sx={{ px: 4 }}>
                <ListItemText primary="Madras Motor Racing" />
                <Typography>15 mins</Typography>
              </ListItem>
            </List>
          )}

          <ListItem
            sx={{
              borderBottom: "2px solid #ccc",
              borderRight: "2px solid #ccc",
              borderLeft: "2px solid #ccc",
              borderRadius: "3px",
            }}
          >
            <ListItemText primary="Hospitals" />
            <Button onClick={() => toggleOpen(3)} sx={{ color: "black" }}>
              {isOpen[3] ? <RemoveIcon /> : <AddIcon />}
            </Button>
          </ListItem>
          {isOpen[3] && (
            <List
              sx={{
                borderBottom: "2px solid #ccc",
                borderRight: "2px solid #ccc",
                borderLeft: "2px solid #ccc",
                color: "#575555",
                borderRadius: "3px",
              }}
            >
              <ListItem sx={{ px: 4 }}>
                <ListItemText primary="Saveetha" />
                <Typography>8 mins</Typography>
              </ListItem>
              <ListItem sx={{ px: 4 }}>
                <ListItemText primary="Aravind Eye Hospital	" />
                <Typography>10 mins</Typography>
              </ListItem>
              <ListItem sx={{ px: 4 }}>
                <ListItemText primary="Ramachandra" />
                <Typography>15 mins</Typography>
              </ListItem>
              <ListItem sx={{ px: 4 }}>
                <ListItemText primary="Apollo" />
                <Typography>20 mins</Typography>
              </ListItem>
              <ListItem sx={{ px: 4 }}>
                <ListItemText primary="MIOT" />
                <Typography>20 mins</Typography>
              </ListItem>
            </List>
          )}
        </List>
      </Grid>
    </Grid>
  );
};

export default CategoryList;
