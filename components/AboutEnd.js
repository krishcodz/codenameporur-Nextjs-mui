import { Grid, Link, Typography } from "@mui/material";

export default function AboutEnd() {
  return (
    <Grid
      container
      item
      justifyContent="center"
      sx={{ background: "#ffffff", paddingY: "60px", paddingX: "20px" }}
    >
      <Grid container item xs={12} md={5}>
        <Typography sx={{ fontSize: "46px", color: "#000000" }}>
          South India&apos;s Largest Real Estate Developer
        </Typography>
        <Typography sx={{ fontSize: "16px", color: "#7F7F7F" }}>
          Urbanrise, a part of Alliance Group is the largest Real Estate
          Developer of South India. We are distinguished by our world-class
          standards, ethical practices, on-time delivery and complete
          transparency. Our projects are funded by the world’s largest sovereign
          fund ADIA ( Abu Dhabi Investment Authority) through Kotak Realty Fund
          and IndoStar Capital Finance Limited.
        </Typography>
        <Link
          width="118px"
          sx={{
            fontSize: "24px",
            color: "#000000",
            textDecoration: "none",
            borderBottom: "2px solid #000000",
          }}
        >
          Read More
        </Link>
      </Grid>
      <Grid
        container
        item
        xs={12}
        md={5}
        sx={{ marginTop: { xs: "30px", md: "0px" } }}
      >
        <Grid container item xs={12} justifyContent="center">
          <Grid
            item
            xs={4}
            sx={{
              background: "#f9ba01",
              margin: "10px",
              padding: "10px 10px",
            }}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Typography
              align="center"
              sx={{ color: "black", fontSize: "28px" }}
            >
              19+
            </Typography>
            <Typography align="center" sx={{ color: "black" }}>
              Years of Experience
            </Typography>
          </Grid>
          <Grid
            item
            xs={4}
            sx={{
              background: "#f9ba01",
              margin: "10px",
              padding: "10px 10px",
            }}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Typography
              align="center"
              sx={{ color: "black", fontSize: "28px" }}
            >
              51000
            </Typography>
            <Typography align="center" sx={{ color: "black" }}>
              Crores of real estate portfolio
            </Typography>
          </Grid>
        </Grid>
        <Grid container item xs={12} justifyContent="center">
          <Grid
            item
            xs={4}
            sx={{
              background: "#f9ba01",
              margin: "10px",
              padding: "20px 10px",
            }}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Typography
              align="center"
              sx={{ color: "black", fontSize: "28px" }}
            >
              9600+
            </Typography>
            <Typography align="center" sx={{ color: "black" }}>
              Happy Customers
            </Typography>
          </Grid>
          <Grid
            item
            xs={4}
            sx={{
              background: "#f9ba01",
              margin: "10px",
              padding: "20px 10px",
            }}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Typography
              align="center"
              sx={{ color: "black", fontSize: "28px" }}
            >
              72 Million
            </Typography>
            <Typography align="center" sx={{ color: "black" }}>
              Sq.Ft Under Development
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
