import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { Button } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import CloseIcon from "@mui/icons-material/Close";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { Swiper, SwiperSlide } from "swiper/react";
import galleryImg1 from "../public/images/gal_1.jpg";
import galleryImg2 from "../public/images/gal_2.jpg";
import galleryImg3 from "../public/images/gal_3.jpg";
import galleryImg4 from "../public/images/gal_4.jpg";
import galleryImg5 from "../public/images/gal_5.jpg";
import galleryImg6 from "../public/images/gal_6.jpg";
import galleryImg7 from "../public/images/gal_7.jpg";
import galleryImg8 from "../public/images/gal_8.jpg";
import galleryImg9 from "../public/images/gal_9.jpg";
import React, { useState} from "react";


const Gallery = () => {
    const galleryImgList = [
    galleryImg1,
    galleryImg2,
    galleryImg3,
    galleryImg4,
    galleryImg5,
    galleryImg6,
    galleryImg7,
    galleryImg8,
    galleryImg9,
    ];
    const [openImgSlider, setOpenImgSlider] = useState(false);
    function ImageSlider({ openImgSlider, setOpenImgSlider }) {
    const closeTab = () => {
        setOpenImgSlider(false);
    };
    const sliderRef = useRef();

    const [currentExpIdx, setCurrentExpIdx] = useState(0);

    return (
        <Dialog
        open={openImgSlider}
        onClose={closeTab}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{
            height: "100vh",
            ".MuiDialog-paper": {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "5px",
            background: "none",
            maxWidth: "xl",
            height: { xs: "30%", sm: "40%", md: "70%" },
            width: { xs: "100%", sm: "100%", md: "100%" },
            "::-webkit-scrollbar": {
                display: "none",
            },
            },
        }}
        >
        <Grid
            container
            item
            xs={12}
            width="100%"
            display="flex"
            justifyContent="flex-start"
            alignItems="center"
            sx={{ background: "#ffffff" }}
        >
            <Grid
            item
            xs={1}
            md={2}
            justifyContent="flex-start"
            alignItems="center"
            sx={{
                background: "#545454",
                height: "100%",
                display: { xs: "none", sm: "flex" },
            }}
            >
            <Button
                onClick={() => sliderRef?.current?.slidePrev()}
                disabled={currentExpIdx === 0}
                sx={{
                background: "none !important",
                color: currentExpIdx === 0 ? "grey" : "#ffffff",
                boxShadow: "none !important",
                }}
                variant="contained"
            >
                <ArrowLeftIcon sx={{ fontSize: "100px" }} />
            </Button>
            </Grid>
            <Grid
            container
            item
            xs={12}
            sm={10}
            md={8}
            sx={{
                padding: { xs: "0", sm: "0 20px" },
                height: { xs: "100%", sm: "90%" },
            }}
            >
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                onSlideChange={(swiper) => {
                const currIdx = swiper.activeIndex;
                setCurrentExpIdx(currIdx);
                }}
                onSwiper={(sw) => {
                sliderRef.current = sw;
                }}
                className="mySwiper"
            >
                {(galleryImgList || []).map((item, index) => (
                <SwiperSlide key={index}>
                    <Grid
                    item
                    xs={12}
                    style={{
                        width: "100%",
                        height: "100%",
                        border: "0.5px solid #000000",
                        position: "relative",
                    }}
                    >
                    <Image fill src={item} alt="location" />
                    <Grid
                        item
                        xs={12}
                        sx={{
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        display: { xs: "flex", sm: "none" },
                        justifyContent: "space-between",
                        }}
                    >
                        <Button
                        onClick={() => sliderRef?.current?.slidePrev()}
                        disabled={currentExpIdx === 0}
                        sx={{
                            background: "none !important",
                            color: currentExpIdx === 0 ? "grey" : "#ffffff",
                            boxShadow: "none !important",
                        }}
                        variant="contained"
                        >
                        <ArrowLeftIcon sx={{ fontSize: "70px" }} />
                        </Button>
                        <Button
                        onClick={() => sliderRef?.current?.slideNext()}
                        disabled={currentExpIdx === 8}
                        style={{
                            background: "none",
                            color: currentExpIdx === 8 ? "grey" : "#ffffff",
                            boxShadow: "none",
                        }}
                        variant="contained"
                        >
                        <ArrowRightIcon sx={{ fontSize: "70px" }} />
                        </Button>
                    </Grid>
                    </Grid>
                </SwiperSlide>
                ))}
            </Swiper>
            </Grid>
            <Grid
            item
            xs={1}
            md={2}
            justifyContent="flex-end"
            alignItems="center"
            sx={{
                background: "#545454",
                height: "100%",
                display: { xs: "none", sm: "flex" },
            }}
            >
            <Button
                onClick={() => sliderRef?.current?.slideNext()}
                disabled={currentExpIdx === 8}
                style={{
                background: "none",
                color: currentExpIdx === 8 ? "grey" : "#ffffff",
                boxShadow: "none",
                }}
                variant="contained"
            >
                <ArrowRightIcon sx={{ fontSize: "100px" }} />
            </Button>
            </Grid>
        </Grid>
        </Dialog>
    );
    }
  return (
    <Grid
      container
      item
      xs={12}
      style={{
        display: "flex",
        justifyContent: "center",
        backgroundColor:'white',
        paddingTop:'40px',
      }}
    >
      <Grid item xs={10} style={{ display: "flex", justifyContent: "center" }}>
        <Typography
          component="h1"
          style={{
            textAlign: "center",
            padding: "10px 0",
            fontSize: "32px",
            width: { xs: "100%", sm: "60%", md: "32%" },
            borderBottom: "2px solid #3c3c3c",
            fontWeight: "bolder",
            letterSpacing: "6px",
            color: "#3c3c3c",
          }}
        >
          Gallery
        </Typography>
      </Grid>
      <Grid item xs={11} sm={10}>
        <Typography
          component="h2"
          style={{
            textAlign: "center",
            padding: "10px 0",
            fontSize: "18px",
            color: "#595959",
          }}
        >
          Live in the heart of Padur - the gateway to Chennai
        </Typography>
      </Grid>

      <Grid container item xs={12} sx={{paddingX:{md:'100px', xs:"0px"}}}>
        {galleryImgList.map((item, index) => (
          <Grid
            item
            key={index}
            xs={12}
            md={4}
            sx={{
              padding: "0 15px",
              margin: "40px 0 0",
            }}
          >
            <Image
              onClick={() => setOpenImgSlider(true)}
              style={{
                height: "auto",
                width: "100%",
                cursor: "pointer",
                padding: "5px",
                borderRadius: "15px",
              }}
              src={item}
              alt={`gallery_img${index}`}
              sizes="100vw"
            />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}

export default Gallery;