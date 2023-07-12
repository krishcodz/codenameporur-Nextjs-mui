import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Grid } from "@mui/material";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import About from "../components/About";
import Location from "../components/Location";
import Amenities from "../components/Amenities";
import Experience from "../components/Experience";
import Map from "../components/Map";
import Price from "../components/Price";
import AboutEnd from "../components/AboutEnd";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Popupenquire from "../components/Popupenquire";
import path from "path";
import read from "fs-readdir-recursive";
import fs from "fs";
import sizeOf from "image-size";

export default function Home({ lpImg, lpImgXs, lpImgSize, lpImgXsSize }) {
  const [openEnquiry, setOpenEnquiry] = useState(false);
  return (
    <>
      <Head>
        <title>Revolution One</title>
        <meta name="revolution one website" content="Reveolution One" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="favicon.ico" />
      </Head>
      <Grid container>
        <Popupenquire
          openEnquiry={openEnquiry}
          setOpenEnquiry={setOpenEnquiry}
        />
        <Navbar setOpenEnquiry={setOpenEnquiry} />
        <Header
          lpImg={lpImg}
          lpImgXs={lpImgXs}
          lpImgSize={lpImgSize}
          lpImgXsSize={lpImgXsSize}
        />
        <About />
        <Location />
        <Amenities setOpenEnquiry={setOpenEnquiry} />
        <Map />
        <Experience />
        <Gallery />
        <Price />
        <AboutEnd />
        <Footer />
      </Grid>
    </>
  );
}

export async function getStaticPaths() {
  const postsDirectory = path.join(process.cwd(), "public", "lp-images");
  const filenames = read(postsDirectory);

  const lpDirs = [
    ...new Set(
      filenames.map((f) => f.split(path.sep).slice(0, -1).join(path.sep))
    ),
  ].filter((d) => d);

  const slugs = lpDirs.map((f) => f.split(path.sep)) || [];
  const paths = [
    { params: { slug: [] } },
    ...slugs.map((slug) => ({
      params: { slug },
    })),
  ];
  // console.log("Paths: ", JSON.stringify(paths, null, 2));

  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps = async ({ params }) => {
  let lpImg = [];
  let lpImgXs = [];
  let pageProps = [];

  if (Array.isArray(params.slug) && params.slug.length) {
    lpImg = ["lp-images", ...params.slug, "bannerImg.jpg"];
    lpImgXs = ["lp-images", ...params.slug, "bannerImg_xs.jpg"];
    pageProps = ["lp-images", ...params.slug, "pageProps.json"];
  } else {
    lpImg = ["images", "db.jpg"];
    lpImgXs = ["images", "mb.jpg"];
    pageProps = ["pageProps.json"];
  }
  lpImg = `/${lpImg.join("/")}`;
  lpImgXs = `/${lpImgXs.join("/")}`;
  pageProps = `/${pageProps.join("/")}`;

  const lpImgAbsPath = path.join(process.cwd(), "public", lpImg);
  if (fs.existsSync(lpImgAbsPath)) {
    const imgDimensions = sizeOf(lpImgAbsPath);
    params.lpImgSize = imgDimensions;
    params.lpImg = lpImg;
  }

  const lpImgXsAbsPath = path.join(process.cwd(), "public", lpImgXs);
  if (fs.existsSync(lpImgXsAbsPath)) {
    const imgXsDimensions = sizeOf(lpImgXsAbsPath);
    params.lpImgXsSize = imgXsDimensions;
    params.lpImgXs = lpImgXs;
  }

  const pagePropsAbsPath = path.join(process.cwd(), "public", pageProps);
  if (fs.existsSync(pagePropsAbsPath)) {
    const pagePropsStr = fs.readFileSync(pagePropsAbsPath);
    params.pageProps = JSON.parse(pagePropsStr);
  }

  // console.log("Params: ", JSON.stringify(params, null, 2));

  return {
    props: params,
  };
};
