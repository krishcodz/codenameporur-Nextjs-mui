import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Grid, TextField, Typography, Dialog } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import PersonIcon from "@mui/icons-material/Person";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import EmailIcon from "@mui/icons-material/Email";
import { LoadingButton } from "@mui/lab";
import { useSnackbar } from "notistack";
import { useRouter } from "next/router";
import { useAddFormDataMutation } from "../reduxSlice/apiSlice";

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

export default function Popupenquire({ openEnquiry, setOpenEnquiry }) {
  //   const [addFormData, { isLoading }] = useAddFormDataMutation();
  const { enqueueSnackbar } = useSnackbar();

  const closeTab = () => {
    setOpenEnquiry(false);
  };

  const [userData, setUserData] = useState(EMPTY_USERDATA);
  const [isDirty, setIsDirty] = useState({
    userName: false,
    email: false,
    phoneNo: false,
  });
  const [errorMsgs, setErrorMsgs] = useState({
    userName: "",
    email: "",
    phoneNo: "",
  });

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
    <Dialog
      open={openEnquiry}
      onClose={closeTab}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      sx={{
        background: "rgba(0, 0, 0, 0.88)",
        height: "100vh",
        ".MuiDialog-paper": {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "5px",
          background: "black",
          maxWidth: { xs: "md", sm: "sm" },
          height: { xs: "50%", sm: "60%" },
          width: "100%",
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
        justifyContent="center"
      >
        <Grid
          item
          xs={12}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          sx={{ height: "15%", background: "#272727", padding: "0 20px" }}
        >
          <Typography
            component="h1"
            style={{
              textAlign: "center",
              fontSize: "18px",
              color: "#fff",
            }}
          >
            {" "}
            I&apos;m interested
          </Typography>
          <CloseIcon
            onClick={closeTab}
            sx={{ fontSize: 35, color: "#fff", cursor: "pointer" }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          sx={{ height: "85%", background: "#fff", padding: "20px" }}
        >
          <Grid item xs={12} display="flex" alignItems="center">
            <Typography
              component="p"
              style={{
                fontSize: "14px",
                color: "#000",
              }}
            >
              Please enter the details below to get the detailed pricing
              information.
            </Typography>
          </Grid>
          <Grid
            container
            item
            xs={11}
            display="flex"
            justifyContent="center"
            style={{
              borderRadius: "5px",
            }}
          >
            <Grid container item xs={12} style={{ margin: "5px 0" }}>
              <Grid
                item
                xs={2}
                display="flex"
                justifyContent="center"
                alignItems="center"
                style={{
                  margin: "10px 0 0 0",
                  height: "40px",
                  width: "50px",
                  borderTopLeftRadius: "5px",
                  borderBottomLeftRadius: "5px",
                  background: "#000",
                }}
              >
                <PersonIcon sx={{ fontSize: 25, color: "#fff" }} />
              </Grid>
              <Grid
                item
                xs={10}
                style={{
                  margin: "10px 0 0 0",
                }}
              >
                <TextField
                  type="text"
                  id="outlined-basic1"
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
                  placeholder="Full Name"
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
            <Grid container item xs={12} style={{ margin: "5px 0" }}>
              <Grid
                item
                xs={2}
                display="flex"
                justifyContent="center"
                alignItems="center"
                style={{
                  margin: "10px 0 0 0",
                  height: "40px",
                  width: "50px",
                  borderTopLeftRadius: "5px",
                  borderBottomLeftRadius: "5px",
                  background: "#000",
                }}
              >
                <PhoneIphoneIcon sx={{ fontSize: 25, color: "#fff" }} />
              </Grid>
              <Grid
                item
                xs={10}
                style={{
                  margin: "10px 0 0 0",
                  borderRadius: "5px",
                }}
              >
                <TextField
                  type="text"
                  id="outlined-basic2"
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
                  placeholder="Phone*"
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
            <Grid container item xs={12} style={{ margin: "5px 0" }}>
              <Grid
                item
                xs={2}
                display="flex"
                justifyContent="center"
                alignItems="center"
                style={{
                  margin: "10px 0",
                  height: "40px",
                  width: "50px",
                  background: "#000",
                  borderTopLeftRadius: "5px",
                  borderBottomLeftRadius: "5px",
                }}
              >
                <EmailIcon sx={{ fontSize: 25, color: "#fff" }} />
              </Grid>
              <Grid
                item
                xs={10}
                style={{
                  margin: "10px 0",

                  borderRadius: "5px",
                }}
              >
                <TextField
                  type="email"
                  id="outlined-basic3"
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
                  placeholder="Email"
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
            <Grid item xs={6} sx={{ marginBottom: "10px" }}>
              <LoadingButton
                onClick={() => submitForm()}
                style={{
                  width: "100%",
                  height: "40px",
                  background: "#db9f26",
                  textTransform: "capitalize",
                  color: "#3a3a3c",
                  fontWeight: "bold",
                  fontSize: "18px",
                  border: "2px solid #ffc652",
                }}
                variant="contained"
                // loading={isLoading}
              >
                Submit
              </LoadingButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Dialog>
  );
}

Popupenquire.propTypes = {
  openEnquiry: PropTypes.bool.isRequired,
  setOpenEnquiry: PropTypes.func.isRequired,
};
