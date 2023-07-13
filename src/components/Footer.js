import { Grid, Typography } from "@mui/material";
import Image from "next/image";
import PodcastsIcon from "@mui/icons-material/Podcasts";
import ublogo from "../../public/images/urbanrise-logo.png";

export default function Footer() {
  return (
    <Grid item container id="contact">
      <Grid
        item
        container
        sx={{ background: "#313131" }}
        justifyContent="center"
      >
        <Grid
          container
          item
          xs={3}
          sx={{
            backgroundColor: "#fef3f3",
            display: { xs: "none", md: "flex" },
            paddingY: "10px",
          }}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={6} display="block">
            <Image src={ublogo} alt="logo" width="100%" />
          </Grid>

          <Typography
            sx={{
              textDecoration: "none",
              color: "#666666",
              fontSize: "14px",
              ":hover": { color: "red", fontWeight: "600" },
            }}
          >
            An Alliance Group Company
          </Typography>
        </Grid>
        <Grid item xs={12} md={5} sx={{ padding: "40px 60px" }}>
          <Typography sx={{ fontSize: "18px", color: "white" }}>
            <PodcastsIcon style={{ fontSize: "20px", paddingRight: "2px" }} />
            Site Address
          </Typography>
          <Typography
            sx={{ fontSize: "12px", color: "#8b8787", fontWeight: "bolder" }}
          >
            Address:
          </Typography>
          <Typography sx={{ fontSize: "12px", color: "#8b8787" }}>
            Urbanrise Codename New Porur
          </Typography>
          <Typography sx={{ fontSize: "12px", color: "#8b8787" }}>
            Survey No.72, Near Santro City, Chembarambakkam,
          </Typography>
          <Typography sx={{ fontSize: "12px", color: "#8b8787" }}>
            Poonamallee, Near Porur, Chennai – 600 124
          </Typography>
          <Typography sx={{ fontSize: "12px", color: "#8b8787" }}>
            RERA NO - TN/02/Building/0086/2023
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        xs={12}
        sx={{ backgroundColor: "#000000", paddingY: { md: "10px", xs: "5px" } }}
        display="flex"
        justifyContent="center"
      >
        <Typography sx={{ color: "#666666", textAlign: "center" }}>
          © 2023 Codenamenewporur. All Rights Reserved
        </Typography>
      </Grid>
    </Grid>
  );
}
