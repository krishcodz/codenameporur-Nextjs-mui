import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { Grid, Typography, Button, Divider, Dialog } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { EffectCoverflow, Pagination } from "swiper/modules";
import Image from "next/image";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import galImg1 from "../../public/images/gal_1.jpg";
import galImg2 from "../../public/images/gal_2.jpg";
import galImg3 from "../../public/images/gal_3.jpg";
import galImg4 from "../../public/images/gal_4.jpg";
import galImg5 from "../../public/images/gal_5.jpg";
import galImg6 from "../../public/images/gal_6.jpg";
import galImg7 from "../../public/images/gal_7.jpg";
import galImg8 from "../../public/images/gal_8.jpg";
import galImg9 from "../../public/images/gal_9.jpg";

const galleryImgList = [
  galImg1,
  galImg2,
  galImg3,
  galImg4,
  galImg5,
  galImg6,
  galImg7,
  galImg8,
  galImg9,
];

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

export default function Gallery() {
  const sliderRef = useRef();
  const [openImgSlider, setOpenImgSlider] = useState(false);
  const [currentExpIdx, setCurrentExpIdx] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(3);

  useEffect(() => {
    if (sliderRef.current.width <= 600) {
      setSlidesPerView(1);
    }
  }, [sliderRef?.current?.width]);
  return (
    <Grid
      id="gallery"
      container
      item
      xs={12}
      display="flex"
      justifyContent="center"
      sx={{ background: "white", padding: "40px" }}
    >
      <ImageSlider
        openImgSlider={openImgSlider}
        setOpenImgSlider={setOpenImgSlider}
      />
      <Grid
        item
        xs={12}
        sm={9}
        display="flex"
        flexDirection="column"
        alignItems="center"
        style={{ padding: "20px 0" }}
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
          SEMMA PROJECT
        </Typography>
        <Divider sx={{ mt: 2, mb: 2, width: "10%" }} />
      </Grid>
      <Grid
        item
        xs={11}
        sm={10}
        md={11}
        lg={9}
        display="flex"
        justifyContent="center"
        sx={{ paddingTop: "50px" }}
      >
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={slidesPerView}
          onSlideChange={(swiper) => {
            const currIdx = swiper.activeIndex;
            setCurrentExpIdx(currIdx);
          }}
          onSwiper={(sw) => {
            sliderRef.current = sw;
          }}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination]}
          loop={true}
          className="mySwiper"
        >
          {(galleryImgList || []).map((item, index) => (
            <SwiperSlide key={index} style={{ height: "auto", width: "300px" }}>
              <Grid
                item
                xs={12}
                style={{
                  width: "100%",
                  height: "auto",
                  position: "relative",
                }}
              >
                <Image
                  onClick={() => setOpenImgSlider(true)}
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                  src={item}
                  alt={`gallery_img${index}`}
                  sizes="100vw"
                />
              </Grid>
            </SwiperSlide>
          ))}
        </Swiper>
      </Grid>
    </Grid>
  );
}

ImageSlider.propTypes = {
  openImgSlider: PropTypes.bool.isRequired,
  setOpenImgSlider: PropTypes.func.isRequired,
};
