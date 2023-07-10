import { Button, Grid, Typography, Divider } from "@mui/material";
import Image from "next/image";
import lifestyle1 from "../public/images/life-style-1.webp";
import lifestyle2 from "../public/images/life-style-2.webp";
import lifestyle3 from "../public/images/life-style-3.webp";
import lifestyle4 from "../public/images/life-style-4.webp";
import DownloadIcon from "@mui/icons-material/Download";

export default function Amenities() {
  return (
    <Grid
      container
      item
      sx={{
        paddingY: { xs: "20px", md: "70px" },
        paddingX: { xs: "10px", md: "40px" },
        backgroundColor: "white",
        color: "black",
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
          sx={{
            fontSize: "22px",
            width: "fit-content",
            letterSpacing: "3px",
            fontWeight: "bolder",
            color: "#3c3c3c",
          }}
        >
          SEMMA LIFESTYLE
        </Typography>
        <Divider sx={{ mt: 2, mb: 2, width: "10%" }}></Divider>
        <Typography
          sx={{
            paddingTop: "20px",
            textAlign: "center",
            fontSize: "14px",
            color: "#6B6B6B",
          }}
        >
          Urbanrise CodeName New Porur offers the proud Homeowners a dream
          living with an array of amazing amenities
        </Typography>
      </Grid>
      <Grid
        item
        container
        xs={12}
        sx={{
          paddingY: { xs: "20px", md: "40px" },
          paddingX: { xs: "20px", md: "80px" },
        }}
      >
        <Grid
          container
          item
          xs={12}
          md={3}
          sx={{
            paddingX: { xs: "0px", md: "40px" },
            paddingY: { xs: "30px", md: "40px" },
            border: "1px solid #f5f4f4",
          }}
        >
          <Grid
            xs={12}
            container
            item
            sx={{ borderBottom: "1px solid #f5f4f4" }}
          >
            <Grid
              xs={12}
              item
              sx={{
                display: "relative",
                width: "100%",
                height: "auto",
              }}
            >
              <Image
                style={{
                  width: "100%",
                  height: "auto",
                }}
                src={lifestyle1}
                alt="lifestyle"
                sizes="100wv"
              />
            </Grid>
            <Grid xs={12} item>
              <Typography textAlign="center">RETAIL ARCADE</Typography>
            </Grid>
          </Grid>
          <Grid xs={12} item>
            <Typography textAlign="center" sx={{ color: "#6B6B6B" }}>
              A retail arcade caters to the day to day needs of the residents of
              the community
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          item
          xs={12}
          md={3}
          sx={{
            paddingX: { xs: "0px", md: "40px" },
            paddingY: { xs: "30px", md: "40px" },
            border: "1px solid #f5f4f4",
          }}
        >
          <Grid
            xs={12}
            container
            item
            sx={{ borderBottom: "1px solid #f5f4f4" }}
          >
            <Grid item container>
              <Grid
                xs={12}
                item
                sx={{
                  display: "relative",
                  width: "100%",
                  height: "auto",
                }}
              >
                <Image
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                  src={lifestyle2}
                  alt="lifestyle"
                  sizes="100wv"
                />
              </Grid>
              <Grid xs={12} item>
                <Typography textAlign="center">CENTRAL PARK</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid xs={12} item>
            <Typography textAlign="center" sx={{ color: "#6B6B6B" }}>
              A lush green Central Park equipped with beautiful landscaped
              lawns.
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          item
          xs={12}
          md={3}
          sx={{
            paddingX: { xs: "0px", md: "40px" },
            paddingY: { xs: "30px", md: "40px" },
            border: "1px solid #f5f4f4",
          }}
        >
          <Grid
            xs={12}
            container
            item
            sx={{ borderBottom: "1px solid #f5f4f4" }}
          >
            <Grid
              xs={12}
              item
              sx={{
                display: "relative",
                width: "100%",
                height: "auto",
              }}
            >
              <Image
                style={{
                  width: "100%",
                  height: "auto",
                }}
                src={lifestyle3}
                alt="lifestyle"
                sizes="100wv"
              />
            </Grid>
            <Grid xs={12} item>
              <Typography textAlign="center">URBANRISE GENIUS</Typography>
            </Grid>
          </Grid>
          <Grid xs={12} item>
            <Typography textAlign="center" sx={{ color: "#6B6B6B" }}>
              Urbanrise Genius, offers coaching classes for academics and
              extracurricular activities.
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          item
          xs={12}
          md={3}
          sx={{
            paddingX: { xs: "0px", md: "40px" },
            paddingY: { xs: "30px", md: "40px" },
            border: "1px solid #f5f4f4",
          }}
        >
          <Grid
            xs={12}
            container
            item
            sx={{ borderBottom: "1px solid #f5f4f4" }}
          >
            <Grid
              xs={12}
              item
              sx={{
                display: "relative",
                width: "100%",
                height: "auto",
              }}
            >
              <Image
                style={{
                  width: "100%",
                  height: "auto",
                }}
                src={lifestyle4}
                alt="lifestyle"
                sizes="100wv"
              />
            </Grid>
            <Grid xs={12} item>
              <Typography textAlign="center">CBSE SCHOOL</Typography>
            </Grid>
          </Grid>
          <Grid xs={12} item>
            <Typography textAlign="center" sx={{ color: "#6B6B6B" }}>
              Reputed CBSE school within the campus brings quality education at
              doorstep.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid container item display="flex" justifyContent="center">
        <Grid item>
          <Button
            startIcon={<DownloadIcon />}
            sx={{
              color: "white",
              backgroundColor: "#FBB70F",
              paddingX: "70px",
              ":hover": {
                backgroundColor: "#FF9900",
              },
              borderRadius: "30px",
            }}
          >
            Enquire Now
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
