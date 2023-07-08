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
        paddingY: "70px",
      }}
    >
      <Grid
        item
        xs={12}
        sx={{ display: "flex", justifyContent: "center", paddingY: "16px" }}
      >
        <Typography
          sx={{
            textAlign: "center",
            fontSize: "22px",
            borderBottom: "2px solid #ccc",
            letterSpacing: "3px",
            fontWeight: "bolder",
            color: "#3c3c3c",
          }}
        >
          ABOUT PROJECT
        </Typography>
      </Grid>
      <Grid item md={9} xs={11}>
        <Typography paragraph={true} sx={{ fontSize: "14px" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper
          eget. Hac habitasse platea dictumst vestibulum rhoncus est
          pellentesque. Nam aliquam sem et tortor consequat id porta. Dolor sed
          viverra ipsum nunc aliquet bibendum.
        </Typography>
        <Typography paragraph={true} sx={{ fontSize: "14px" }}>
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
