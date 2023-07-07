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
        paddingY: "40px",
        paddingX: "180px",
      }}
    >
      <Grid
        container
        item
        xs={4}
        flexDirection="column"
        alignItems="flex-start"
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
        xs={4}
        flexDirection="column"
        alignItems="center"
        sx={{ paddingRight: "60px", paddingLeft: "30px" }}
      >
        <Grid item width="100%" sx={{ paddingBottom: "60px" }}>
          <TextField
            fullWidth
            id="outlined-basic"
            label="Enter Your Full Name"
            variant="outlined"
            type="text"
            sx={{ backgroundColor: "white", borderRadius: "4px" }}
          />
        </Grid>
        <Grid item width="100%">
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
        xs={4}
        flexDirection="column"
        alignItems="center"
        sx={{ paddingRight: "60px" }}
      >
        <Grid item width="100%" sx={{ paddingBottom: "80px" }}>
          <TextField
            fullWidth
            id="outlined-basic"
            label="Enter Your Phone Number"
            variant="outlined"
            type="number"
            sx={{ backgroundColor: "white", borderRadius: "4px" }}
          />
        </Grid>
        <Grid item>
          <Button
            startIcon={<DownloadIcon />}
            sx={{
              background: "#FBB70F",
              paddingX: "120px",
              color: "white",
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
