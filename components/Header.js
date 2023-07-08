import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import { LoadingButton } from "@mui/lab";
import React, { useState, useEffect } from "react";
import banner from "../public/images/db.jpg";
import Image from "next/image";

const Header = () => {
  const EMPTY_USERDATA = {
    userName: "",
    phoneNo: "",
    email: "",
  };
  const [userData, setUserData] = useState(EMPTY_USERDATA);

  return (
    <Grid
      container
      item
      xs={12}
      sx={{
        display: "flex",
        alignContent: "flex-start",
        marginTop: "4%",
      }}
    >
      <Grid
        item
        md={8}
        xs={12}
        sx={{ position: "relative", height: { xs: "800px", md: "600px" } }}
      >
        <Image fill src={banner} alt="banner image" />
      </Grid>

      <Grid
        id="checkme"
        container
        item
        md={4}
        xs={12}
        sx={{
          backgroundColor: "#460405",
          backgroundImage: "none",
          display: "flex",
          alignContent: "flex-start",
          justifyContent: "center",
          paddingBottom: "30px",
        }}
      >
        <Grid item xs={12}>
          <Typography
            component="h1"
            sx={{
              textAlign: "center",
              padding: "10px 0",
              fontSize: { xs: "28px", md: "32px" },
              fontWeight: "bold",
              color: "#ffffff",
            }}
          >
            Enquire Now
          </Typography>
        </Grid>
        <Grid
          container
          item
          xs={11}
          md={9}
          style={{
            backgroundColor: "#ffffff",
            backgroundImage: "none",
            borderRadius: "5px",
            padding: "20px",
            marginTop: "20px",
          }}
        >
          <Grid item xs={12}>
            <InputLabel
              style={{
                padding: "10px 0",
                fontSize: "12px",
                fontWeight: "bold",
                color: "#000000",
              }}
              htmlFor="outlined-basic1"
            >
              Name*
            </InputLabel>
          </Grid>
          <TextField
            type="text"
            id="outlined-basic1"
            value={userData.userName}
            onChange={(e) => {
              setUserData({
                ...userData,
                userName: e.target.value || "",
              });
            }}
            sx={{
              width: "100%",
              borderRadius: "5px",
              "& .MuiOutlinedInput-root .MuiInputBase-input": {
                background: "#ffffff",
                padding: "8px",
                borderRadius: "5px",
              },
              "& .MuiFormHelperText-root": {
                fontSize: "12px",
              },
            }}
            InputProps={{
              sx: {
                height: "40px",
              },
            }}
            variant="outlined"
          />
          <Grid item xs={12}>
            <InputLabel
              style={{
                padding: "10px 0",
                fontSize: "12px",
                fontWeight: "bold",
                color: "#000000",
              }}
              htmlFor="outlined-basic2"
            >
              Phone Number*
            </InputLabel>
          </Grid>
          <TextField
            type="number"
            id="outlined-basic2"
            value={userData.phoneNo}
            onChange={(e) => {
              setUserData({
                ...userData,
                phoneNo: e.target.value || "",
              });
            }}
            sx={{
              width: "100%",
              borderRadius: "5px",
              "& .MuiOutlinedInput-root .MuiInputBase-input": {
                background: "#ffffff",
                padding: "8px",
                borderRadius: "5px",
              },
              "& .MuiFormHelperText-root": {
                fontSize: "12px",
              },
            }}
            InputProps={{
              sx: {
                height: "40px",
              },
            }}
            variant="outlined"
          />
          <Grid item xs={12}>
            <InputLabel
              style={{
                padding: "10px 0",
                fontSize: "12px",
                fontWeight: "bold",
                color: "#000000",
              }}
              htmlFor="outlined-basic3"
            >
              Email*
            </InputLabel>
          </Grid>
          <TextField
            type="email"
            id="outlined-basic3"
            value={userData.email}
            onChange={(e) => {
              setUserData({
                ...userData,
                email: e.target.value || "",
              });
            }}
            sx={{
              width: "100%",
              borderRadius: "5px",
              "& .MuiOutlinedInput-root .MuiInputBase-input": {
                background: "#ffffff",
                padding: "8px",
                borderRadius: "5px",
              },
              "& .MuiFormHelperText-root": {
                fontSize: "12px",
              },
            }}
            InputProps={{
              sx: {
                height: "40px",
              },
            }}
            variant="outlined"
          />
          <Grid item xs={12} style={{ paddingTop: "30px" }}>
            <LoadingButton
              sx={{
                width: "100%",
                height: "50px",
                background: "#FBB70F",
                textTransform: "capitalize",
                color: "#000000",
                fontWeight: "bold",
                fontSize: "14px",
                ":hover": {
                  background: "#F79E19",
                },
              }}
              variant="contained"
            >
              Submit
            </LoadingButton>
          </Grid>
          <Grid
            item
            sx={{ paddingY: "20px", paddingX: "25%" }}
            href="tel:+918588073636"
          >
            <Typography
              sx={{
                color: "#000000",
                textAlign: "center",
                borderBottom: "2px solid #ccc",
                fontWeight: "lighter",
              }}
            >
              For More Details
            </Typography>
            <Typography
              sx={{
                color: "#000000",
                textAlign: "center",
                paddingTop: "10px",
                fontSize: "25px",
              }}
            >
              +918588073636
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Header;
