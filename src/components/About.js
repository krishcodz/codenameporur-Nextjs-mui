import { Grid, Typography, Divider } from "@mui/material";

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
          ABOUT PROJECT
        </Typography>
        <Divider sx={{ mt: 2, mb: 5, width: "10%" }} />
      </Grid>
      <Grid item md={9} xs={11}>
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: 400,
            paddingBottom: "20px",
            color: "#3a3a3a",
            lineHeight: "30px",
          }}
        >
          Urbanrise New Porur, is a gated community located just 15 minutes from
          Porur. It is located close to Kuthambakkam Mofussil Bus Terminus, the
          upcoming Poonamallee Station as well as numerous IT hubs.
        </Typography>
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: 400,
            paddingBottom: "20px",
            color: "#3a3a3a",
            lineHeight: "30px",
          }}
        >
          This is a home designed specifically for you, with an acre of lush
          green park,100+ amenities such as co-working spaces, swimming pool,
          indoor and outdoor gym, CBSE school, an international standard
          clubhouse, and a retail arcade. Built with cutting-edge Mivan
          technology to ensure zero waste of space and longevity of your home,
          it truly makes Urbanrise New Porur, an owner’s pride in every way.
        </Typography>
      </Grid>
    </Grid>
  );
}
