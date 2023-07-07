import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Grid } from "@mui/material";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import About from "../components/About";
import Amenities from "../components/Amenities";

export default function Home() {
  return (
    <>
      <Head>
        <title>Revolution One</title>
        <meta name="revolution one website" content="Reveolution One" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/logo.png" />
      </Head>
      <Grid container>
        <Navbar />
        <Header/>
        <About/>
        <Amenities/>
      </Grid>
    </>
  );
}
