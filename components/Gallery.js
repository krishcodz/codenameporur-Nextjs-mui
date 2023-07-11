import React, { useState, useRef, useEffect } from "react";
import { Grid, Typography, Button } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import galImg1 from "../public/images/gal_1.jpg";
import galImg2 from "../public/images/gal_2.jpg";
import galImg3 from "../public/images/gal_3.jpg";
import galImg4 from "../public/images/gal_4.jpg";
import galImg5 from "../public/images/gal_5.jpg";
import galImg6 from "../public/images/gal_6.jpg";
import galImg7 from "../public/images/gal_7.jpg";
import galImg8 from "../public/images/gal_8.jpg";
import galImg9 from "../public/images/gal_9.jpg";

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

export default function Gallery() {
  const sliderRef = useRef();
  const [currentExpIdx, setCurrentExpIdx] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(3);

  useEffect(() => {
    if (sliderRef.current.width <= 425) {
      setSlidesPerView(1);
    }
  }, [sliderRef?.current?.width]);
  return (
    <Grid
      container
      item
      xs={12}
      display="flex"
      justifyContent="center"
      sx={{ background: "white" }}
    >
      <Grid
        item
        xs={12}
        sm={9}
        display="flex"
        justifyContent="center"
        style={{ padding: "20px 0" }}
      >
        <Typography
          component="h1"
          style={{
            width: "32%",
            textAlign: "center",
            padding: "10px 0",
            fontSize: "40px",
            fontWeight: 400,
            color: "#3a3a3c",
            borderBottom: "2px solid #3a3a3c",
            marginBottom: "25px",
          }}
        >
          Gallery
        </Typography>
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
          slidesPerView={slidesPerView}
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
            <SwiperSlide
              key={index}
              style={{ height: "300px", width: "300px" }}
            >
              <Grid
                item
                xs={12}
                style={{
                  width: "100%",
                  height: "100%",
                  border: "2px solid #000000",
                  position: "relative",
                }}
              >
                <Image
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
      <Grid item xs={8} display="flex" justifyContent="center">
        <Button
          onClick={() => sliderRef?.current?.slidePrev()}
          style={{
            width: "50px",
            height: "50px",
            background: "#fff",
            textTransform: "capitalize",
            color: currentExpIdx === 0 ? "grey" : "#000000",
            fontWeight: "bold",
            fontSize: "60px",
            boxShadow: "none",
          }}
          variant="contained"
        >
          ‹
        </Button>
        <Button
          onClick={() => sliderRef?.current?.slideNext()}
          disabled={currentExpIdx === 6}
          style={{
            width: "50px",
            height: "50px",
            background: "#fff",
            textTransform: "capitalize",
            color: currentExpIdx === 6 ? "grey" : "#000000",
            fontWeight: "bold",
            fontSize: "60px",
            boxShadow: "none",
          }}
          variant="contained"
        >
          ›
        </Button>
      </Grid>
    </Grid>
  );
}
