import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import {
  List,
  ListItem,
  ListItemText,
  Grid,
  Typography,
  Divider,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const CustomAccordion = styled(Accordion)(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const CustomAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(180deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(3),
  },
}));

const CustomAccordionDetails = styled(AccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

function CategoryList() {
  const [expanded, setExpanded] = useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Grid
      container
      item
      xs={12}
      sx={{ color: "black", backgroundColor: "#f5f4f4", padding: "40px" }}
    >
      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          paddingY: "16px",
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            fontSize: "20px",
            fontWeight: 400,
            color: "black",
            lineHeight: "22px",
          }}
        >
          SEMMA LOCATION
        </Typography>
        <Divider sx={{ mt: 2, mb: 5, width: "10%" }} />
      </Grid>
      <Grid container item xs={12}>
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
        <Grid item xs={12} md={6} sx={{ padding: { xs: "0px", md: "20px" } }}>
          <CustomAccordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <CustomAccordionSummary
              expandIcon={expanded === "panel1" ? <RemoveIcon /> : <AddIcon />}
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <Typography
                sx={{
                  fontSize: "17px",
                  fontWeight: 500,
                  color: "black",
                  lineHeight: "30px",
                }}
              >
                Schools
              </Typography>
            </CustomAccordionSummary>
            <CustomAccordionDetails>
              <List>
                <ListItem
                  sx={{
                    px: { xs: 1, md: 4 },
                    fontSize: "16px",
                    fontWeight: 400,
                    color: "#666666",
                    lineHeight: "30px",
                  }}
                >
                  <ListItemText primary="Spartan International School" />
                  <Typography>5 mins</Typography>
                </ListItem>
                <ListItem
                  sx={{
                    px: { xs: 1, md: 4 },
                    fontSize: "16px",
                    fontWeight: 400,
                    color: "#666666",
                    lineHeight: "30px",
                  }}
                >
                  <ListItemText primary="Chennai Public School" />
                  <Typography>5 mins</Typography>
                </ListItem>
                <ListItem
                  sx={{
                    px: { xs: 1, md: 4 },
                    fontSize: "16px",
                    fontWeight: 400,
                    color: "#666666",
                    lineHeight: "30px",
                  }}
                >
                  <ListItemText primary="Chaitanya school" />
                  <Typography>10 mins</Typography>
                </ListItem>
                <ListItem
                  sx={{
                    px: { xs: 1, md: 4 },
                    fontSize: "16px",
                    fontWeight: 400,
                    color: "#666666",
                    lineHeight: "30px",
                  }}
                >
                  <ListItemText primary="Velammal school" />
                  <Typography>15 mins</Typography>
                </ListItem>
              </List>
            </CustomAccordionDetails>
          </CustomAccordion>
          <CustomAccordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <CustomAccordionSummary
              expandIcon={expanded === "panel2" ? <RemoveIcon /> : <AddIcon />}
              aria-controls="panel2d-content"
              id="panel2d-header"
            >
              <Typography
                sx={{
                  fontSize: "17px",
                  fontWeight: 500,
                  color: "black",
                  lineHeight: "30px",
                }}
              >
                Colleges
              </Typography>
            </CustomAccordionSummary>
            <CustomAccordionDetails>
              <List>
                <ListItem
                  sx={{
                    px: { xs: 1, md: 4 },
                    fontSize: "16px",
                    fontWeight: 400,
                    color: "#666666",
                    lineHeight: "30px",
                  }}
                >
                  <ListItemText primary="Sri Sastha College" />
                  <Typography>3 mins</Typography>
                </ListItem>
                <ListItem
                  sx={{
                    px: { xs: 1, md: 4 },
                    fontSize: "16px",
                    fontWeight: 400,
                    color: "#666666",
                    lineHeight: "30px",
                  }}
                >
                  <ListItemText primary="Rajalakshmi Institute" />
                  <Typography>5 mins</Typography>
                </ListItem>
                <ListItem
                  sx={{
                    px: { xs: 1, md: 4 },
                    fontSize: "16px",
                    fontWeight: 400,
                    color: "#666666",
                    lineHeight: "30px",
                  }}
                >
                  <ListItemText primary="Panimalar College" />
                  <Typography>5 mins</Typography>
                </ListItem>
                <ListItem
                  sx={{
                    px: { xs: 1, md: 4 },
                    fontSize: "16px",
                    fontWeight: 400,
                    color: "#666666",
                    lineHeight: "30px",
                  }}
                >
                  <ListItemText primary="Saveetha Engg College" />
                  <Typography>8 mins</Typography>
                </ListItem>
              </List>
            </CustomAccordionDetails>
          </CustomAccordion>
          <CustomAccordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <CustomAccordionSummary
              expandIcon={expanded === "panel3" ? <RemoveIcon /> : <AddIcon />}
              aria-controls="panel3d-content"
              id="panel3d-header"
            >
              <Typography
                sx={{
                  fontSize: "17px",
                  fontWeight: 500,
                  color: "black",
                  lineHeight: "30px",
                }}
              >
                Malls
              </Typography>
            </CustomAccordionSummary>
            <CustomAccordionDetails>
              <List>
                <ListItem
                  sx={{
                    px: { xs: 1, md: 4 },
                    fontSize: "16px",
                    fontWeight: 400,
                    color: "#666666",
                    lineHeight: "30px",
                  }}
                >
                  <ListItemText primary="EVP Carnival Cinema" />
                  <Typography>2 mins</Typography>
                </ListItem>
                <ListItem
                  sx={{
                    px: { xs: 1, md: 4 },
                    fontSize: "16px",
                    fontWeight: 400,
                    color: "#666666",
                    lineHeight: "30px",
                  }}
                >
                  <ListItemText primary="Queens Land" />
                  <Typography>5 mins</Typography>
                </ListItem>
                <ListItem
                  sx={{
                    px: { xs: 1, md: 4 },
                    fontSize: "16px",
                    fontWeight: 400,
                    color: "#666666",
                    lineHeight: "30px",
                  }}
                >
                  <ListItemText primary="Chokhi Dhani" />
                  <Typography>8 mins</Typography>
                </ListItem>
                <ListItem
                  sx={{
                    px: { xs: 1, md: 4 },
                    fontSize: "16px",
                    fontWeight: 400,
                    color: "#666666",
                    lineHeight: "30px",
                  }}
                >
                  <ListItemText primary="Madras Motor Racing" />
                  <Typography>15 mins</Typography>
                </ListItem>
              </List>
            </CustomAccordionDetails>
          </CustomAccordion>
          <CustomAccordion
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
          >
            <CustomAccordionSummary
              expandIcon={expanded === "panel4" ? <RemoveIcon /> : <AddIcon />}
              aria-controls="panel4d-content"
              id="panel4d-header"
            >
              <Typography
                sx={{
                  fontSize: "17px",
                  fontWeight: 500,
                  color: "black",
                  lineHeight: "30px",
                }}
              >
                Hospitals
              </Typography>
            </CustomAccordionSummary>
            <CustomAccordionDetails>
              <List>
                <ListItem
                  sx={{
                    px: { xs: 1, md: 4 },
                    fontSize: "16px",
                    fontWeight: 400,
                    color: "#666666",
                    lineHeight: "30px",
                  }}
                >
                  <ListItemText primary="Saveetha" />
                  <Typography>8 mins</Typography>
                </ListItem>
                <ListItem
                  sx={{
                    px: { xs: 1, md: 4 },
                    fontSize: "16px",
                    fontWeight: 400,
                    color: "#666666",
                    lineHeight: "30px",
                  }}
                >
                  <ListItemText primary="Aravind Eye Hospital" />
                  <Typography>10 mins</Typography>
                </ListItem>
                <ListItem
                  sx={{
                    px: { xs: 1, md: 4 },
                    fontSize: "16px",
                    fontWeight: 400,
                    color: "#666666",
                    lineHeight: "30px",
                  }}
                >
                  <ListItemText primary="Ramachandra" />
                  <Typography>15 mins</Typography>
                </ListItem>
                <ListItem
                  sx={{
                    px: { xs: 1, md: 4 },
                    fontSize: "16px",
                    fontWeight: 400,
                    color: "#666666",
                    lineHeight: "30px",
                  }}
                >
                  <ListItemText primary="Apollo" />
                  <Typography>20 mins</Typography>
                </ListItem>
                <ListItem
                  sx={{
                    px: { xs: 1, md: 4 },
                    fontSize: "16px",
                    fontWeight: 400,
                    color: "#666666",
                    lineHeight: "30px",
                  }}
                >
                  <ListItemText primary="MIOT" />
                  <Typography>20 mins</Typography>
                </ListItem>
              </List>
            </CustomAccordionDetails>
          </CustomAccordion>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default CategoryList;
