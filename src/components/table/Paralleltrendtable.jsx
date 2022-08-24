import "./paralleltrendtable.scss";
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from "@mui/material";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData(122, 159, 6.0, 24, 4.0),
  createData(123, 237, 9.0, 37, 4.3),
  createData(124, 262, 16.0, 24, 6.0),
  createData(125, 305, 3.7, 67, 4.3),
  createData(126, 356, 16.0, 49, 3.9),
];

export default function Paralleltrendtable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Months</TableCell>
            <TableCell align="right">Control</TableCell>
            <TableCell align="right">Study</TableCell>
            <TableCell align="right">detail1</TableCell>
            <TableCell align="right">detail2</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}