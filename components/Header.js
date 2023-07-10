import { Button, Divider, Grid, TextField, Typography } from "@mui/material";
import bannermd from "../public/images/db.jpg";
import bannerxs from "../public/images/mb.jpg";
import Image from "next/image";

export default function Header() {
  return (
    <Grid item container sx={{ marginTop: "60px", position: "relative" }}>
      <Grid
        item
        xs={12}
        sx={{
          position: "relative",
          zIndex: "1",
          display: { md: "flex", xs: "none" },
        }}
      >
        <Image
          src={bannermd}
          alt="banner"
          style={{ width: "100%", height: "auto" }}
        />
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          position: "relative",
          zIndex: "1",
          display: { md: "none", xs: "flex" },
        }}
      >
        <Image
          src={bannerxs}
          alt="banner"
          style={{ width: "100%", height: "auto" }}
        />
      </Grid>
      <Grid
        container
        item
        xs={4}
        sx={{
          display: { xs: "none", md: "flex" },
          position: "absolute",
          top: "5%",
          right: "0%",
          zIndex: "2",
          paddingLeft: "150px",
          paddingRight: "20px",
        }}
      >
        <Grid
          container
          item
          xs={12}
          sx={{
            background: "white",
            paddingX: "20px",
            paddingY: "10px",
            borderRadius: "20px",
          }}
        >
          <Grid
            item
            xs={12}
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Typography
              xs={12}
              sx={{
                fontSize: "20px",
                letterSpacing: "3px",
                fontWeight: "bolder",
                color: "#3c3c3c",
              }}
            >
              Free Site Visit
            </Typography>
            <Divider xs={12} sx={{ my: 2, width: "40%" }}></Divider>
          </Grid>
          <Grid item xs={12} sx={{ marginBottom: "20px" }}>
            <TextField required label="Full Name" fullWidth />
          </Grid>
          <Grid item xs={12} sx={{ marginBottom: "20px" }}>
            <TextField required label="Phone Number" fullWidth />
          </Grid>
          <Grid item xs={12} sx={{ marginBottom: "20px" }}>
            <TextField required label="Email ID" fullWidth />
          </Grid>
          <Grid item xs={12} sx={{ marginBottom: "20px" }}>
            <Button
              variant="contained"
              fullWidth
              sx={{
                background: "#FBB70F",
                ":hover": {
                  background: "#FF9900",
                },
              }}
            >
              Submit
            </Button>
          </Grid>
          <Grid
            item
            xs={12}
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Typography
              xs={12}
              sx={{
                fontSize: "12px",
                letterSpacing: "3px",
                color: "#3c3c3c",
              }}
            >
              For More Details
            </Typography>
            <Divider xs={12} sx={{ my: 2, width: "70%" }}></Divider>
            <Typography
              xs={12}
              sx={{
                fontSize: "28px",
                letterSpacing: "3px",
                fontWeight: "bolder",
                color: "#3c3c3c",
              }}
              href="tel:+918588073636"
            >
              +918588073636
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
