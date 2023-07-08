import { Button, Grid, TextField, Typography } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";

export default function Experience() {
  return (
    <Grid
      container
      item
      sx={{
        backgroundColor: "#022546",
        color: "white",
        padding: "40px 80px",
      }}
    >
      <Grid
        container
        item
        md={4}
        xs={12}
        flexDirection="column"
        sx={{
          alignItems: {
            xs: "center",
            md: "flex-start",
          },
          paddingX: { xs: "0px", md: "20px" },
          paddingY: { xs: "40px", md: "0px" },
        }}
      >
        <Typography sx={{ fontSize: "40px" }}>Experience</Typography>
        <Typography sx={{ color: "#FBB70F", fontSize: "30px" }}>
          Revolution One
        </Typography>
        <Typography sx={{ fontSize: "15px", textAlign: "left" }}>
          Schedule an appointment for a free site visit to Code Name Newporur
        </Typography>
      </Grid>

      <Grid
        container
        item
        xs={12}
        md={4}
        justifyContent="center"
        sx={{ paddingY: { xs: "10px", md: "0px" } }}
      >
        <Grid
          item
          width="100%"
          xs={10}
          sx={{ paddingBottom: { xs: "20px", md: "60px" } }}
        >
          <TextField
            fullWidth
            id="outlined-basic"
            label="Enter Your Full Name"
            variant="outlined"
            type="text"
            sx={{
              backgroundColor: "white",
              borderRadius: "4px",
            }}
          />
        </Grid>
        <Grid item xs={10} width="100%">
          <TextField
            fullWidth
            id="outlined-basic"
            label="Enter Your Mail ID"
            variant="outlined"
            type="mail"
            sx={{ backgroundColor: "white", borderRadius: "4px" }}
          />
        </Grid>
      </Grid>
      <Grid
        container
        item
        xs={12}
        md={4}
        justifyContent="center"
        sx={{ paddingY: { xs: "10px", md: "0px" } }}
      >
        <Grid
          item
          xs={10}
          width="100%"
          sx={{ paddingBottom: { xs: "30px", md: "80px" } }}
        >
          <TextField
            fullWidth
            id="outlined-basic"
            label="Enter Your Phone Number"
            variant="outlined"
            type="number"
            sx={{ backgroundColor: "white", borderRadius: "4px" }}
          />
        </Grid>
        <Grid item xs={10} width="100%" display="relative">
          <Button
            startIcon={<DownloadIcon />}
            sx={{
              background: "#FBB70F",
              color: "white",
              width: "100%",
              ":hover": {
                background: "#FF9900",
              },
            }}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
