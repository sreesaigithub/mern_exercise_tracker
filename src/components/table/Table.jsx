import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";

const List = () => {
  const rows1 = [
    {
      id: 1,
      program: "Complex Case Management",
      lob: "medicare",
      sublob: "All",
      region: "East",
      fundingtype: "All",
      caseidperiod: 7857,
      followupperiod: "3 months"
    },
  ];

  const rows2 = [
    {
      id: 1,
      program: "Disease Management",
      lob: "medicaid",
      sublob: "All",
      region: "East",
      fundingtype: "All",
      caseidperiod: 785,
      followupperiod: "6 months"
    },
  ];

  const rows3 = [
    {
      id: 1,
      status: "COMPLETED",
      stageOne: "STAGE 1",
      percentageOne: "100 %",
      stageTwo: "STAGE 2",
      percentageTwo: "100 %",
      date: "12/11/2020",
      viewResults: "view results"
    },
  ];

  return (
    <div className="tableContent"> 
      
    <TableContainer component={Paper} className="table">
    <div className="tableContentInner"> 
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableHeader">Program Name</TableCell>
            <TableCell className="tableHeader">LOB</TableCell>
            <TableCell className="tableHeader">Sub LOB</TableCell>
            <TableCell className="tableHeader">Region</TableCell>
            <TableCell className="tableHeader">Funding Type</TableCell>
            <TableCell className="tableHeader">Case Id Period</TableCell>
            <TableCell className="tableHeader">Follow Up Period</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows1.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.program}</TableCell>
              <TableCell className="tableCell">{row.lob}</TableCell>
              <TableCell className="tableCell">{row.sublob}</TableCell>
              <TableCell className="tableCell">{row.region}</TableCell>
              <TableCell className="tableCell">{row.fundingtype}</TableCell>
              <TableCell className="tableCell">{row.caseidperiod}</TableCell>
              <TableCell className="tableCell">{row.followupperiod}</TableCell>
            </TableRow>
          ))}
           {rows3.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableStatus">{row.status}</TableCell>
              <TableCell className="tableStatus">
                {/* <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.product}
                </div> */}
                {row.stageOne}
              </TableCell>
              <TableCell className="tableStatus">{row.percentageOne}</TableCell>
              <TableCell className="tableStatus">{row.stageTwo}</TableCell>
              <TableCell className="tableStatus">{row.percentageTwo}</TableCell>
              <TableCell className="tableStatus">{row.date}</TableCell>
              <TableCell className="tableStatus">
                <Link to="/users/test" style={{ textDecoration: "none" }}>
                  <div className="tableViewResults">View Results</div>
                </Link>
                {/* <span className={`status ${row.status}`}>{row.status}</span> */}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </div>
      <div className="tableContentInner"> 
            
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableHeader">Program Name</TableCell>
            <TableCell className="tableHeader">LOB</TableCell>
            <TableCell className="tableHeader">Sub LOB</TableCell>
            <TableCell className="tableHeader">Region</TableCell>
            <TableCell className="tableHeader">Funding Type</TableCell>
            <TableCell className="tableHeader">Case Id Period</TableCell>
            <TableCell className="tableHeader">Follow Up Period</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows2.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.program}</TableCell>
              <TableCell className="tableCell">{row.lob}</TableCell>
              <TableCell className="tableCell">{row.sublob}</TableCell>
              <TableCell className="tableCell">{row.region}</TableCell>
              <TableCell className="tableCell">{row.fundingtype}</TableCell>
              <TableCell className="tableCell">{row.caseidperiod}</TableCell>
              <TableCell className="tableCell">{row.followupperiod}
              </TableCell>
            </TableRow>
          ))}
           {rows3.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableStatus">{row.status}</TableCell>
              <TableCell className="tableStatus">
                {/* <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.product}
                </div> */}
                {row.stageOne}
              </TableCell>
              <TableCell className="tableStatus">{row.percentageOne}</TableCell>
              <TableCell className="tableStatus">{row.stageTwo}</TableCell>
              <TableCell className="tableStatus">{row.percentageTwo}</TableCell>
              <TableCell className="tableStatus">{row.date}</TableCell>
              <TableCell className="tableStatus">
                <Link to="/users/test" style={{ textDecoration: "none" }}>
                  <div className="tableViewResults">View Results</div>
                </Link>
                {/* <span className={`status ${row.status}`}>{row.status}</span> */}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
    </TableContainer>
    </div>
  );
};

export default List;
