import { Button, Grid, Typography, Divider } from "@mui/material";
import PropTypes from "prop-types";
import Image from "next/image";
import DownloadIcon from "@mui/icons-material/Download";
import lifestyle1 from "../../public/images/life-style-1.webp";
import lifestyle2 from "../../public/images/life-style-2.webp";
import lifestyle3 from "../../public/images/life-style-3.webp";
import lifestyle4 from "../../public/images/life-style-4.webp";

export default function Amenities({ setOpenEnquiry }) {
  return (
    <Grid
      id="amenities"
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
            textAlign: "center",
            fontSize: "20px",
            fontWeight: 400,
            color: "black",
          }}
        >
          SEMMA LIFESTYLE
        </Typography>
        <Divider sx={{ mt: 1, mb: 2, width: "10%" }} />
        <Typography
          sx={{
            paddingTop: "20px",
            textAlign: "center",
            fontSize: "16px",
            color: "#666666",
            lineHeight: "30px",
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
              <Typography
                textAlign="center"
                sx={{ fontSize: "18px", lineHeight: "20px" }}
              >
                RETAIL ARCADE
              </Typography>
            </Grid>
          </Grid>
          <Grid xs={12} item>
            <Typography
              textAlign="center"
              sx={{ fontSize: "16px", color: "#666666", lineHeight: "30px" }}
            >
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
                <Typography
                  textAlign="center"
                  sx={{ fontSize: "18px", lineHeight: "20px" }}
                >
                  CENTRAL PARK
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid xs={12} item>
            <Typography
              textAlign="center"
              sx={{ fontSize: "16px", color: "#666666", lineHeight: "30px" }}
            >
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
              <Typography
                textAlign="center"
                sx={{ fontSize: "18px", lineHeight: "20px" }}
              >
                URBANRISE GENIUS
              </Typography>
            </Grid>
          </Grid>
          <Grid xs={12} item>
            <Typography
              textAlign="center"
              sx={{ fontSize: "16px", color: "#666666", lineHeight: "30px" }}
            >
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
              <Typography
                textAlign="center"
                sx={{ fontSize: "18px", lineHeight: "20px" }}
              >
                CBSE SCHOOL
              </Typography>
            </Grid>
          </Grid>
          <Grid xs={12} item>
            <Typography
              textAlign="center"
              sx={{ fontSize: "16px", color: "#666666", lineHeight: "30px" }}
            >
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
            onClick={() => setOpenEnquiry(true)}
            sx={{
              color: "white",
              paddingX: "70px",
              background: "#FABA00",
              ":hover": {
                background: "#1f3347",
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

Amenities.propTypes = {
  setOpenEnquiry: PropTypes.func.isRequired,
};
