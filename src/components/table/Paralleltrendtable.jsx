import "./paralleltrendtable.scss";
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from "@mui/material";

function createData(monthsUnWeighted, studyUnWeighted, controlUnWeighted, monthsWeighted, studyWeighted, controlWeighted) {
  return { monthsUnWeighted, studyUnWeighted, controlUnWeighted, monthsWeighted, studyWeighted, controlWeighted };
}

const rows = [
  createData(122, 6.0, 6.0, 24, 4.0, 4.0),
  createData(123, 6.4, 9.0, 37, 4.3, 4.0),
  createData(124, 6.5, 16.0, 24, 6.0, 4.0),
  createData(125, 6.3, 3.7, 67, 4.3, 4.0),
  createData(126, 6.2, 16.0, 49, 3.9, 4.0),
];

export default function Paralleltrendtable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right"></TableCell>
            <TableCell align="center">Matched-UnWeighted</TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="center">Matched-Weighted</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
          </TableHead>
          <TableHead>
          <TableRow>
            <TableCell align="right">Months</TableCell>
            <TableCell align="right">Control</TableCell>
            <TableCell align="right">Study</TableCell>
            <TableCell align="right">Months</TableCell>
            <TableCell align="right">Control</TableCell>
            <TableCell align="right">Study</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              {/* <TableCell component="th" scope="row">
                {row.name}
              </TableCell> */}
              <TableCell align="right">{row.monthsUnWeighted}</TableCell>
              <TableCell align="right">{row.studyUnWeighted}</TableCell>
              <TableCell align="right">{row.controlUnWeighted}</TableCell>
              <TableCell align="right">{row.monthsWeighted}</TableCell>
              <TableCell align="right">{row.studyWeighted}</TableCell>
              <TableCell align="right">{row.controlWeighted}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}