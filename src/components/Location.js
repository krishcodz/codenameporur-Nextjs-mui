import { Grid, Typography, Divider } from "@mui/material";
import Image from "next/image";
import LocationImg from "../../public/images/location.jpg";

export default function Location() {
  return (
    <Grid
      container
      item
      xs={12}
      justifyContent="center"
      sx={{ background: "#f5f4f4", paddingY: "40px" }}
    >
      <Grid
        item
        xs={12}
        display="flex"
        flexDirection="column"
        alignItems="center"
        sx={{ paddingY: "40px" }}
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
          SEMMA NEIGHBOURHOOD
        </Typography>
        <Divider sx={{ mt: 2, mb: 5, width: "14%", color: "#ccc" }} />
      </Grid>
      <Grid item md={8} xs={11} sx={{ padding: "10px 10px", display: "block" }}>
        <Image
          style={{
            width: "100%",
            height: "auto",
          }}
          src={LocationImg}
          alt="location"
        />
      </Grid>
    </Grid>
  );
}
