import { Box, Grid, Typography } from "@mui/material";

export default function About() {
  return (
    <Grid
      id="about"
      container
      item
      xs={12}
      sx={{
        display: "flex",
        justifyContent: "center",
        background: "white",
        color: "black",
        flexDirection: "row",
      }}
    >
      <Grid
        item
        xs={12}
        sx={{ display: "flex", justifyContent: "center", paddingY:"16px"}}
      >
          <Typography sx={{
            textAlign: "center",
              fontSize: "32px",
              borderBottom: "2px solid #3c3c3c",
              letterSpacing: "6px",
              fontWeight: "bolder",
              color: "#3c3c3c",
          }}>
            About Us
          </Typography>
      </Grid>
      <Grid item xs={9}>
        <Typography paragraph={true} sx={{ fontFamily: "unset" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper
          eget. Hac habitasse platea dictumst vestibulum rhoncus est
          pellentesque. Nam aliquam sem et tortor consequat id porta. Dolor sed
          viverra ipsum nunc aliquet bibendum.
        </Typography>
        <Typography paragraph={true} sx={{ fontFamily: "unset" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper
          eget. Hac habitasse platea dictumst vestibulum rhoncus est
          pellentesque. Nam aliquam sem et tortor consequat id porta. Dolor sed
          viverra ipsum nunc aliquet bibendum.
        </Typography>
      </Grid>
    </Grid>
  );
}
