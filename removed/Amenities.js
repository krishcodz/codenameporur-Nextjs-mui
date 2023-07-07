import amenitiesImg from "../public/images/aminities.jpg";
import amenitiesImgXs from "../public/images/aminities_xs.jpg";
import offerImg from "../public/images/tag.webp";
import { Box, Grid, Typography } from "@mui/material";
import { Button } from "@mui/material";
import Image from "next/image";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

export default function Amenities() {

    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        "&:nth-of-type(odd)": {
          backgroundColor: "#DFF0D8",
        },
      }));
    
      function createData(config, price, emi) {
        return { config, price, emi };
      }
      
      const emiData = [
        createData("2 BHK - R", 43.17, "28,000"),
        createData("2 BHK - L", 49.27, "32,000"),
        createData("3 BHK", 50.93, "33,000"),
      ];
    
    return (
        <>
      <Grid
        container
        item
        xs={12}
        style={{ display: "flex", justifyContent: "center", padding: "0 15px", backgroundColor:"white" }}
      >
        <Grid
          item
          xs={10}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Typography
            component="h1"
            sx={{
              textAlign: "center",
              fontSize: "32px",
              borderBottom: "2px solid #3c3c3c",
              fontWeight: "bolder",
              letterSpacing: "6px",
              color: "#3c3c3c",
            }}
          >
          Amenities
          </Typography>
        </Grid>
        <Grid item xs={11} sm={10}>
          <Typography
            component="h2"
            style={{
              textAlign: "center",
              margin: "20px 0 0 0",
              fontSize: "20px",
              fontWeight: "bold",
              color: "#3c3c3c",
            }}
          >
          120+ Next-Gen Amenities
          </Typography>
        </Grid>
        <Grid item xs={11} sm={10}>
          <Typography
            component="h2"
            style={{
              textAlign: "center",
              margin: "20px 0 10px",
              fontSize: "18px",
              color: "#595959",
            }}
          >
          The best in class amenities for a balanced life
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            padding: "10px 10px",
            display: { xs: "none", md: "flex", justifyContent:"center" },
          }}
        >
          <Image
            style={{
              width: "60%",
              height: "auto",
            }}
            src={amenitiesImg}
            alt="amenities_img"
            sizes="100vw"
          />
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            padding: "10px 0",
            display: { xs: "flex", md: "none", justifyContent:"center" },
          }}
        >
          <Image
            style={{
              width: "60%",
              height: "auto",
            }}
            src={amenitiesImgXs}
            alt="amenities_img"
            sizes="100vw"
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={10}
          md={8}
          sx={{
            padding: "0 10px",
            paddingTop:"50px",
            display:"flex",
            justifyContent:"center"
          }}
        >
          <Image
            style={{
              width: "60%",
              height: "auto",
            }}
            src={offerImg}
            alt="amenities_img"
            sizes="100vw"
          />
        </Grid>
        <Grid item xs={12} sm={10} md={8} sx={{paddingBottom:"30px"}}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 300 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <TableCell
                    style={{
                      background: "#333333",
                      color: "#ffffff",
                      border: "1px solid #ddd",
                      fontWeight: "bold",
                    }}
                  >
                    Configuration
                  </TableCell>
                  <TableCell
                    style={{
                      background: "#333333",
                      color: "#ffffff",
                      border: "1px solid #ddd",
                      fontWeight: "bold",
                    }}
                    align="center"
                  >
                    Price
                  </TableCell>
                  <TableCell
                    style={{
                      background: "#333333",
                      color: "#ffffff",
                      border: "1px solid #ddd",
                      fontWeight: "bold",
                    }}
                    align="center"
                  >
                    EMI
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {(emiData || []).map((item) => (
                  <StyledTableRow key={item.config}>
                    <TableCell
                      style={{ border: "1px solid #ddd" }}
                      component="th"
                      scope="row"
                    >
                      {item.config}
                    </TableCell>
                    <TableCell
                      style={{ border: "1px solid #ddd" }}
                      align="center"
                    >
                      {`₹ ${item.price} Lacs`}
                    </TableCell>
                    <TableCell
                      style={{ border: "1px solid #ddd" }}
                      align="center"
                    >
                      {`₹ ${item.emi}`}
                    </TableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>

      <Grid container item xs={12}>
        <Grid
          item
          xs={12}
          sx={{
            position: "relative",
            height: { xs: "300px", md: "350px" },
            width: "100%",
            overflow: "hidden",
          }}
        >
          <Image
            fill
            alt="animated_gif"
            src="https://www.jubileeresidences.com/promos/google/aug-dsp-2020/images/book_site_visit.gif"
            sizes="100vw"
          />
          <Grid
            container
            item
            xs={12}
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              top: 0,
              right: 0,
              background: "rgba(255, 193, 7, 0.32941176470588235)",
              alignContent: "flex-start",
            }}
          >
            <Grid item xs={12}>
              <Typography
                component="h1"
                style={{
                  textAlign: "center",
                  padding: "20px 0 10px 0",
                  fontSize: "25px",
                  fontWeight: "bold",
                }}
              >
              Book a FREE Site visit
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                component="h2"
                style={{
                  textAlign: "center",
                  marginBottom: "10px",
                  fontSize: "14px",
                  color: "#595959",
                }}
              >
              Hurry up Few units only available...
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              style={{ display: "flex", justifyContent: "center" }}
            >
            <Button
                variant="contained"
                sx={{
                  background: "#9BA11E",
                  borderRadius: "20px",
                  fontSize: "14px",
                  color: "#000000",
                  textTransform: "capitalize",
                  fontWeight: "bold",
                  height: "40px",
                  display: { xs: "none", sm: "flex" },
                  ':hover' : {background: '#06c910',}
                }}
              >
                Book Now
              </Button>
              <Button
                variant="contained"
                sx={{
                  background: "#9BA11E",
                  borderRadius: "20px",
                  fontSize: "14px",
                  color: "#000000",
                  textTransform: "capitalize",
                  fontWeight: "bold",
                  height: "40px",
                  display: { xs: "flex", sm: "none" },
                }}
              >
                Book Now
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
    );
}
