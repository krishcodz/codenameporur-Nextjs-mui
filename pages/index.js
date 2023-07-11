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

export default function Home() {
  return (
    <>
      <Head>
        <title>Revolution One</title>
        <meta name="revolution one website" content="Reveolution One" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="favicon.ico" />
      </Head>
      <Grid container>
        <Navbar />
        <Header />
        <About />
        <Location />
        <Amenities />
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
