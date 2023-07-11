import React, { useState, useRef, useEffect } from "react";
import { Button, Grid, TextField, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useSnackbar } from "notistack";
import { useRouter } from "next/router";

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

export default function Experience() {
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
      container
      item
      sx={{
        backgroundColor: "#022546",
        color: "white",
        padding: { xs: "40px 20px", md: "20px 150px" },
      }}
    >
      <Grid
        container
        item
        md={4}
        xs={12}
        flexDirection="column"
        sx={{
          alignItems: {
            xs: "center",
            md: "flex-start",
          },
          paddingX: { xs: "0px", md: "20px" },
          paddingY: { xs: "40px", md: "0px" },
        }}
      >
        <Typography sx={{ fontSize: "40px" }}>Experience</Typography>
        <Typography sx={{ color: "#FBB70F", fontSize: "30px" }}>
          Revolution One
        </Typography>
        <Typography
          sx={{ fontSize: "15px", textAlign: { xs: "center", md: "left" } }}
        >
          Schedule an appointment for a free site visit to Code Name Newporur
        </Typography>
      </Grid>

      <Grid
        container
        item
        xs={12}
        md={4}
        justifyContent="center"
        sx={{
          paddingY: { xs: "10px", md: "0px" },
          paddingRight: { xs: "0px", md: "20px" },
        }}
      >
        <Grid
          item
          width="100%"
          xs={12}
          sx={{ paddingBottom: { xs: "20px", md: "20px" } }}
        >
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
            placeholder="Full Name*"
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
        <Grid item xs={12} width="100%">
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
            placeholder="Email ID*"
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
      </Grid>
      <Grid
        container
        item
        xs={12}
        md={4}
        justifyContent="center"
        sx={{
          paddingY: { xs: "10px", md: "0px" },
          paddingRight: { xs: "0px", md: "20px" },
        }}
      >
        <Grid
          item
          xs={12}
          width="100%"
          sx={{ paddingBottom: { xs: "30px", md: "20px" } }}
        >
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
            placeholder="Phone Number*"
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
        <Grid item xs={12} width="100%" display="relative">
          <Button
            endIcon={<ArrowForwardIosIcon />}
            sx={{
              background: "#FBB70F",
              color: "white",
              width: "100%",
              ":hover": {
                background: "#FF9900",
              },
            }}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
