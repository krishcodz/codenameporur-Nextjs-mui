import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Button, Divider, Grid, TextField, Typography } from "@mui/material";
import { useSnackbar } from "notistack";
import { useRouter } from "next/router";
import Image from "next/image";
import bannermd from "../../public/images/db.jpg";
import bannerxs from "../../public/images/mb.jpg";
// import { useAddFormDataMutation } from "../reduxSlice/apiSlice";

const EMPTY_USERDATA = {
  userName: "",
  phoneNo: "",
  email: "",
};

const EMPTY_ISDIRTY = {
  userName: false,
  email: false,
  phoneNo: false,
};

const EMPTY_ERRORMSGS = {
  userName: "",
  email: "",
  phoneNo: "",
};

export const ERROR_TEXT = {
  EMPTY_FIELD: "Cannot be empty",
  GENERIC_SOMETHINGWRONG: "Please check this field",
  EMAIL_WRONGFORMAT: "Email should be in example@email.com format",
  EMAIL_ALREADYTAKEN: "This email is already taken !",
  PHNO_10NUMS: "Should have 10 numbers",
  USERNAME_WRONGFORMAT: "Only letters with spaces in middle here",
  USERNAME_NUMCHARS: "Should be between 3 and 20 characters",
  TOAST_SOMETHINGWENTWRONG: "Something went wrong. Please try again",
};

export function checkEmailErrors(email) {
  if (!email) {
    return ERROR_TEXT.EMPTY_FIELD;
  }
  if (typeof email !== "string") {
    return ERROR_TEXT.GENERIC_SOMETHINGWRONG;
  }
  if (
    !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    )
  ) {
    return ERROR_TEXT.EMAIL_WRONGFORMAT;
  }

  return "";
}

export function checkPhNoErrors(phoneNo) {
  if (!phoneNo) {
    return ERROR_TEXT.EMPTY_FIELD;
  }
  if (typeof phoneNo !== "string") {
    return ERROR_TEXT.GENERIC_SOMETHINGWRONG;
  }
  if (!/^\d{10}$/.test(phoneNo)) {
    return ERROR_TEXT.PHNO_10NUMS;
  }

  return "";
}

export function checkUserNameErrors(userName) {
  if (!userName) {
    return ERROR_TEXT.EMPTY_FIELD;
  }
  if (typeof userName !== "string") {
    return ERROR_TEXT.GENERIC_SOMETHINGWRONG;
  }
  if (!/^.{3,20}$/.test(userName)) {
    return ERROR_TEXT.USERNAME_NUMCHARS;
  }
  if (!/^[a-zA-Z]+[a-zA-Z\s]{1,20}[a-zA-Z]+$/.test(userName)) {
    return ERROR_TEXT.USERNAME_WRONGFORMAT;
  }

  return "";
}

const getUtmParams = (pageQueryParams) => {
  const source = pageQueryParams?.utm_source || "Direct Traffic";
  const medium = pageQueryParams?.utm_medium;
  const campaign = pageQueryParams?.utm_campaign;
  const content = pageQueryParams?.utm_content;

  return {
    source,
    medium,
    campaign,
    content,
  };
};

export default function Header({ lpImg, lpImgXs, lpImgSize, lpImgXsSize }) {
  // const [addFormData, { isLoading }] = useAddFormDataMutation();
  const { enqueueSnackbar } = useSnackbar();

  const [userData, setUserData] = useState(EMPTY_USERDATA);
  const [isDirty, setIsDirty] = useState(EMPTY_ISDIRTY);
  const [errorMsgs, setErrorMsgs] = useState(EMPTY_ERRORMSGS);

  useEffect(() => {
    if (isDirty.email) {
      setErrorMsgs((m) => ({
        ...m,
        email: checkEmailErrors(userData.email),
      }));
    }
    if (isDirty.phoneNo) {
      setErrorMsgs((m) => ({
        ...m,
        phoneNo: checkPhNoErrors(userData.phoneNo),
      }));
    }
    if (isDirty.userName) {
      setErrorMsgs((m) => ({
        ...m,
        userName: checkUserNameErrors(userData.userName),
      }));
    }
  }, [isDirty, userData]);

  const resetData = () => {
    setUserData(EMPTY_USERDATA);
    setIsDirty(EMPTY_ISDIRTY);
    setErrorMsgs(EMPTY_ERRORMSGS);
  };

  const router = useRouter();

  const submitForm = () => {
    if (errorMsgs?.userName || errorMsgs?.email || errorMsgs?.phoneNo) {
      return;
    }

    const pageQueryParams = router?.query;
    const utmParams = getUtmParams(pageQueryParams);

    addFormData({ ...(userData || {}), utmParams })
      .unwrap()
      .then(() => {
        resetData();
        window.location.href = "/thanku";
      })
      .catch(() => {
        enqueueSnackbar({
          variant: "error",
          message: ERROR_TEXT.TOAST_SOMETHINGWENTWRONG,
        });
      });
  };

  return (
    <Grid
      id="home"
      item
      container
      sx={{ marginTop: { xs: "50px", md: "75px" }, position: "relative" }}
    >
      <Grid
        item
        xs={12}
        sx={{
          position: "relative",
          zIndex: "1",
          display: { md: "flex", xs: "none" },
          aspectRatio: lpImgSize.width / lpImgSize.height,
        }}
      >
        <Image
          fill
          src={lpImg || bannermd}
          alt="banner"
          style={{
            objectFit: "contain",
          }}
          sizes="100vw"
        />
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          position: "relative",
          zIndex: "1",
          display: { md: "none", xs: "flex" },
          aspectRatio: lpImgXsSize.width / lpImgXsSize.height,
        }}
      >
        <Image
          fill
          src={lpImgXs || bannerxs}
          alt="banner"
          style={{
            objectFit: "contain",
          }}
          sizes="100vw"
        />
      </Grid>
      <Grid
        container
        item
        xs={4}
        sx={{
          display: { xs: "none", md: "flex" },
          position: "absolute",
          top: "5%",
          right: "0%",
          zIndex: "2",
          paddingLeft: "150px",
          paddingRight: "20px",
        }}
      >
        <Grid
          container
          item
          xs={12}
          sx={{
            background: "white",
            paddingX: "20px",
            paddingY: "10px",
            borderRadius: "20px",
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
              xs={12}
              sx={{
                fontSize: "21px",
                lineHeight: "23px",
                fontWeight: "600",
                color: "#000000",
              }}
            >
              Free Site Visit
            </Typography>
            <Divider xs={12} sx={{ mt: 1, mb: 2, width: "40%" }} />
          </Grid>
          <Grid item xs={12} sx={{ marginBottom: "20px" }}>
            <TextField
              type="text"
              id="outlined-basi01"
              value={userData.userName}
              error={!!errorMsgs.userName}
              helperText={errorMsgs?.userName || ""}
              onBlur={() => {
                setIsDirty((d) => ({
                  ...d,
                  userName: true,
                }));
              }}
              onChange={(e) => {
                setUserData({
                  ...userData,
                  userName: e.target.value || "",
                });
              }}
              placeholder="Enter Your Full Name*"
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
          </Grid>
          <Grid item xs={12} sx={{ marginBottom: "20px" }}>
            <TextField
              type="text"
              id="outlined-basic02"
              value={userData.phoneNo}
              error={!!errorMsgs.phoneNo}
              helperText={errorMsgs?.phoneNo || ""}
              onBlur={() => {
                setIsDirty((d) => ({
                  ...d,
                  phoneNo: true,
                }));
              }}
              onChange={(e) => {
                setUserData({
                  ...userData,
                  phoneNo: e.target.value || "",
                });
              }}
              placeholder="Enter Your Phone Number*"
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
          </Grid>
          <Grid item xs={12} sx={{ marginBottom: "20px" }}>
            <TextField
              type="email"
              id="outlined-basic03"
              value={userData.email}
              error={!!errorMsgs.email}
              helperText={errorMsgs?.email || ""}
              onBlur={() => {
                setIsDirty((d) => ({
                  ...d,
                  email: true,
                }));
              }}
              onChange={(e) => {
                setUserData({
                  ...userData,
                  email: e.target.value || "",
                });
              }}
              placeholder="Enter Your Email ID*"
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
          </Grid>
          <Grid item xs={12} sx={{ marginBottom: "20px" }}>
            <Button
              onClick={submitForm}
              variant="contained"
              fullWidth
              sx={{
                background: "#FBB70F",
                ":hover": {
                  background: "#FF9900",
                },
              }}
            >
              Submit
            </Button>
          </Grid>
          <Grid
            item
            xs={12}
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Typography
              xs={12}
              sx={{
                fontSize: "17px",
                lineHeight: "20px",
                color: "#666666",
              }}
            >
              For More Details
            </Typography>
            <Divider xs={12} sx={{ my: 1, width: "70%" }} />
            <Typography
              xs={12}
              sx={{
                fontSize: "24px",
                lineHeight: "45px",
                fontWeight: 400,
                color: "#3c3c3c",
                ":hover": { fontWeight: 600 },
              }}
            >
              +918588073636
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

Header.propTypes = {
  lpImg: PropTypes.string.isRequired,
  lpImgXs: PropTypes.string.isRequired,
  lpImgSize: PropTypes.object.isRequired,
  lpImgXsSize: PropTypes.object.isRequired,
};
