import { Button, Divider, Grid, Link, Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import DownloadIcon from "@mui/icons-material/Download";
import Paper from "@mui/material/Paper";

export default function Price() {
  return (
    <Grid
      container
      item
      xs={12}
      justifyContent="center"
      sx={{ background: "#f5f4f4", paddingY: "40px" }}
    >
      <Grid
        item
        xs={12}
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Typography
          sx={{
            fontSize: "20px",
            letterSpacing: "3px",
            fontWeight: "bolder",
            color: "#3c3c3c",
          }}
        >
          SEMMA PRICE
        </Typography>
        <Divider sx={{ mt: 2, mb: 5, width: "7%" }}></Divider>
      </Grid>
      <Grid item xs={12} sm={10} md={8}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 300 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <TableCell
                  style={{
                    color: "#636363",
                    borderTop: "1px solid #ddd",
                    borderBottom: "1px solid #ddd",
                    fontWeight: "bold",
                  }}
                  align="center"
                >
                  Plans
                </TableCell>
                <TableCell
                  style={{
                    color: "#636363",
                    borderTop: "1px solid #ddd",
                    borderBottom: "1px solid #ddd",
                    fontWeight: "bold",
                  }}
                  align="center"
                >
                  Price
                </TableCell>
                <TableCell
                  style={{
                    color: "#636363",
                    borderTop: "1px solid #ddd",
                    borderBottom: "1px solid #ddd",
                    fontWeight: "bold",
                  }}
                  align="center"
                >
                  EMI Approx
                </TableCell>
                <TableCell
                  style={{
                    color: "#636363",
                    borderTop: "1px solid #ddd",
                    borderBottom: "1px solid #ddd",
                    fontWeight: "bold",
                  }}
                  align="center"
                >
                  Floor Plan
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow key="1">
                <TableCell
                  style={{
                    color: "#7F7F7F",
                    borderTop: "1px solid #ddd",
                    borderBottom: "1px solid #ddd",
                  }}
                  component="th"
                  scope="row"
                  align="center"
                >
                  2BHK
                </TableCell>
                <TableCell
                  style={{
                    color: "#7F7F7F",
                    borderTop: "1px solid #ddd",
                    borderBottom: "1px solid #ddd",
                  }}
                  align="center"
                >
                  41 Lacs
                </TableCell>
                <TableCell
                  style={{
                    color: "#7F7F7F",
                    borderTop: "1px solid #ddd",
                    borderBottom: "1px solid #ddd",
                  }}
                  align="center"
                >
                  26,500 /-
                </TableCell>
                <TableCell
                  style={{
                    color: "#7F7F7F",
                    borderTop: "1px solid #ddd",
                    borderBottom: "1px solid #ddd",
                  }}
                  align="center"
                >
                  <Button
                    startIcon={<DownloadIcon sx={{ color: "red" }} />}
                    sx={{ color: "#7F7F7F" }}
                  >
                    Download
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
            <TableBody>
              <TableRow key="1">
                <TableCell
                  style={{
                    color: "#7F7F7F",
                    borderTop: "1px solid #ddd",
                    borderBottom: "1px solid #ddd",
                  }}
                  component="th"
                  scope="row"
                  align="center"
                >
                  3BHK
                </TableCell>
                <TableCell
                  style={{
                    color: "#7F7F7F",
                    borderTop: "1px solid #ddd",
                    borderBottom: "1px solid #ddd",
                  }}
                  align="center"
                >
                  54 Lacs
                </TableCell>
                <TableCell
                  style={{
                    color: "#7F7F7F",
                    borderTop: "1px solid #ddd",
                    borderBottom: "1px solid #ddd",
                  }}
                  align="center"
                >
                  35,000 /-
                </TableCell>
                <TableCell
                  style={{
                    color: "#7F7F7F",
                    borderTop: "1px solid #ddd",
                    borderBottom: "1px solid #ddd",
                  }}
                  align="center"
                >
                  <Button
                    startIcon={<DownloadIcon sx={{ color: "red" }} />}
                    sx={{ color: "#7F7F7F" }}
                  >
                    Download
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
}
