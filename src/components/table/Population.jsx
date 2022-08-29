import "./population.scss";
import * as React from 'react';
import PropTypes from 'prop-types';
import {Collapse, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from '@mui/material';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';

const rows = [
    {
      "name": "Demographics",
      "variables": [
        {
          "variable_id": "FML_NBR",
          "control_mean": 200,
          "study_mean": 100,
          "smd": 0.05,
          "adj_control_mean": 300,
          "adj_study_mean": 100,
          "adj_smd": 0.04,
          "control_sd": 50,
          "study_sd": 50,
          "control_median": 20,
          "study_median": 10,
          "display_name": "Famale %",
          "measure_type": "PCT"
        }
      ],
      "children": []
    },
    {
      "name": "Geography",
      "variables": [  {
        "variable_id": "FML_NBR",
        "control_mean": 200,
        "study_mean": 100,
        "smd": 0.05,
        "adj_control_mean": 300,
        "adj_study_mean": 100,
        "adj_smd": 0.04,
        "control_sd": 50,
        "study_sd": 50,
        "control_median": 20,
        "study_median": 10,
        "display_name": "Famale %",
        "measure_type": "PCT"
      }],
      "children": []
    },
    {
      "name": "Inpatient Metrics",
      "order": 1,
      "variables": [],
      "children": [
        {
          "name": "IP",
          "order": 1,
          "variables": [ {
            "variable_id": "INPT_ACT_BH_PMPM",
            "control_mean": 200,
            "study_mean": 100,
            "smd": 0.05,
            "adj_control_mean": 300,
            "adj_study_mean": 100,
            "adj_smd": 0.04,
            "control_sd": 50,
            "study_sd": 50,
            "control_median": 20,
            "study_median": 10,
            "display_name": "Inpatient Behavioral Health PMPM",
            "measure_type": "PMPM"
          }],
          "children": [
            {
              "name": "Inpatient Acute",
              "order": 1,
              "variables": [],
              "children": [
                {
                  "name": "Inpatient Behavioral Health",
                  "order": 1,
                  "variables": [
                    {
                      "variable_id": "INPT_ACT_BH_PMPM",
                      "control_mean": 200,
                      "study_mean": 100,
                      "smd": 0.05,
                      "adj_control_mean": 300,
                      "adj_study_mean": 100,    
                      "adj_smd": 0.04,
                      "control_sd": 50,
                      "study_sd": 50,
                      "control_median": 20,
                      "study_median": 10,
                      "display_name": "Inpatient Behavioral Health PMPM",
                      "measure_type": "PMPM"
                    }
                  ],
                  "children": []
                }
              ]
            }
          ]
        }
      ]
    }
  ]
  
  
  function ChildrenRowIII(props) {
    const { childrenRowIII } = props;
    const [open, setOpen] = React.useState(false);
  
    function xyz(){
      // const status12 =  row.map((each) => (console.log("each", each)))
       
      console.log("childrenrowIII", childrenRowIII);
  
    }
  
    xyz();
  
    return (
      <React.Fragment>
        <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
          <TableCell>
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <RemoveOutlinedIcon /> : <AddOutlinedIcon />}
            </IconButton>
            {childrenRowIII.name}
          </TableCell>
          <TableCell align="left" component="th" scope="row"></TableCell> 
          <TableCell align="center"></TableCell>
          <TableCell align="center"></TableCell>
          <TableCell align="center"></TableCell>
          <TableCell align="center"></TableCell>
          <TableCell align="center"></TableCell>
          <TableCell align="center"></TableCell>
          <TableCell align="center"></TableCell>
          <TableCell align="center"></TableCell>
          <TableCell align="center"></TableCell>
          <TableCell align="center"></TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={12} className="tableclass1">
            <Collapse in={open} timeout="auto" unmountOnExit>
                <Table aria-label="collapsible table">
                    {childrenRowIII.variables.map((variablesRow, index) => (
                      <TableRow key={index} className="tableclass" >
                        <TableCell align="left" component="th" scope="row" width="10px">{variablesRow.display_name}</TableCell>
                        <TableCell align="right">{variablesRow.measure_type}</TableCell>
                        <TableCell align="right">{variablesRow.control_mean}</TableCell>
                        <TableCell align="right">{variablesRow.study_mean}</TableCell>
                        <TableCell align="right" sx={{backgroundColor: "rgb(242, 246, 247)",border: "2px solid white" }}>{variablesRow.smd}</TableCell>
                        <TableCell align="right">{variablesRow.adj_control_mean}</TableCell>
                        <TableCell align="right">{variablesRow.adj_study_mean}</TableCell>
                        <TableCell align="right" sx={{backgroundColor: "rgb(242, 246, 247)",border: "2px solid white" }}>{variablesRow.adj_smd}</TableCell>
                        <TableCell align="right">{variablesRow.control_median}</TableCell>
                        <TableCell align="right">{variablesRow.study_median}</TableCell>
                        <TableCell align="right">{variablesRow.control_sd}</TableCell>
                        <TableCell align="right">{variablesRow.study_sd}</TableCell>
                      </TableRow>
                    ))}
                       {childrenRowIII.children.map((childrenRowIV, index) => (
                      <TableRow key={index} className="tableclass" >
                        <TableCell align="left" component="th" scope="row" width="10px">{childrenRowIV.name}</TableCell>
                        <TableCell align="right"></TableCell>
                        <TableCell align="right"></TableCell>
                        <TableCell align="right"></TableCell>
                        <TableCell align="right"></TableCell>
                        <TableCell align="right"></TableCell>
                        <TableCell align="right"></TableCell>
                        <TableCell align="right"></TableCell>
                        <TableCell align="right"></TableCell>
                        <TableCell align="right"></TableCell>
                        <TableCell align="right"></TableCell>
                        <TableCell align="right"></TableCell>
                      </TableRow>
                    //   <ChildrenRowIV key={childrenRowIII.name} childrenRowIV={childrenRowIV} />
                       ))}
                </Table>
            </Collapse>
          </TableCell>
        </TableRow>
      </React.Fragment>
    );
  }
  

  function ChildrenRowII(props) {
    const { childrenRowII } = props;
    const [open, setOpen] = React.useState(false);
  
    function xyz(){
      // const status12 =  row.map((each) => (console.log("each", each)))
       
      console.log("childrenrowII", childrenRowII);
  
    }
  
    xyz();
  
    return (
      <React.Fragment>
        <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
          <TableCell>
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <RemoveOutlinedIcon /> : <AddOutlinedIcon />}
            </IconButton>
            {childrenRowII.name}
          </TableCell>
          <TableCell align="left" component="th" scope="row"></TableCell> 
          <TableCell align="center"></TableCell>
          <TableCell align="center"></TableCell>
          <TableCell align="center"></TableCell>
          <TableCell align="center"></TableCell>
          <TableCell align="center"></TableCell>
          <TableCell align="center"></TableCell>
          <TableCell align="center"></TableCell>
          <TableCell align="center"></TableCell>
          <TableCell align="center"></TableCell>
          <TableCell align="center"></TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={12} className="tableclass1">
            <Collapse in={open} timeout="auto" unmountOnExit>
                <Table aria-label="collapsible table">
                    {childrenRowII.variables.map((variablesRow, index) => (
                      <TableRow key={index} className="tableclass" >
                        <TableCell align="left" component="th" scope="row" width="10px">{variablesRow.display_name}</TableCell>
                        <TableCell align="right">{variablesRow.measure_type}</TableCell>
                        <TableCell align="right">{variablesRow.control_mean}</TableCell>
                        <TableCell align="right">{variablesRow.study_mean}</TableCell>
                        <TableCell align="right" sx={{backgroundColor: "rgb(242, 246, 247)",border: "2px solid white" }}>{variablesRow.smd}</TableCell>
                        <TableCell align="right">{variablesRow.adj_control_mean}</TableCell>
                        <TableCell align="right">{variablesRow.adj_study_mean}</TableCell>
                        <TableCell align="right" sx={{backgroundColor: "rgb(242, 246, 247)",border: "2px solid white" }}>{variablesRow.adj_smd}</TableCell>
                        <TableCell align="right">{variablesRow.control_median}</TableCell>
                        <TableCell align="right">{variablesRow.study_median}</TableCell>
                        <TableCell align="right">{variablesRow.control_sd}</TableCell>
                        <TableCell align="right">{variablesRow.study_sd}</TableCell>
                      </TableRow>
                    ))}
                       {childrenRowII.children.map((childrenRowIII, index) => (
                      <TableRow key={index} className="tableclass" >
                        <TableCell align="left" component="th" scope="row" width="10px">{childrenRowIII.name}</TableCell>
                        <TableCell align="right"></TableCell>
                        <TableCell align="right"></TableCell>
                        <TableCell align="right"></TableCell>
                        <TableCell align="right"></TableCell>
                        <TableCell align="right"></TableCell>
                        <TableCell align="right"></TableCell>
                        <TableCell align="right"></TableCell>
                        <TableCell align="right"></TableCell>
                        <TableCell align="right"></TableCell>
                        <TableCell align="right"></TableCell>
                        <TableCell align="right"></TableCell>
                      </TableRow>,
                      <ChildrenRowIII key={childrenRowIII.name} childrenRowIII={childrenRowIII} />
                       ))}
                </Table>
            </Collapse>
          </TableCell>
        </TableRow>
      </React.Fragment>
    );
  }
  


  function ChildrenRow(props) {
    const { childrenRow } = props;
    const [open, setOpen] = React.useState(false);
  
    function xyz(){
      // const status12 =  row.map((each) => (console.log("each", each)))
       
      console.log("childrenrow", childrenRow);
  
    }
  
    xyz();
  
    return (
      <React.Fragment>
        <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
          <TableCell>
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <RemoveOutlinedIcon /> : <AddOutlinedIcon />}
            </IconButton>
            {childrenRow.name}
          </TableCell>
          <TableCell align="left" component="th" scope="row"></TableCell> 
          <TableCell align="center"></TableCell>
          <TableCell align="center"></TableCell>
          <TableCell align="center"></TableCell>
          <TableCell align="center"></TableCell>
          <TableCell align="center"></TableCell>
          <TableCell align="center"></TableCell>
          <TableCell align="center"></TableCell>
          <TableCell align="center"></TableCell>
          <TableCell align="center"></TableCell>
          <TableCell align="center"></TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={12} className="tableclass1">
            <Collapse in={open} timeout="auto" unmountOnExit>
                <Table aria-label="collapsible table">
                    {childrenRow.variables.map((variablesRow, index) => (
                      <TableRow key={index} className="tableclass" >
                        <TableCell align="left" component="th" scope="row" width="10px">{variablesRow.display_name}</TableCell>
                        <TableCell align="right">{variablesRow.measure_type}</TableCell>
                        <TableCell align="right">{variablesRow.control_mean}</TableCell>
                        <TableCell align="right">{variablesRow.study_mean}</TableCell>
                        <TableCell align="right" sx={{backgroundColor: "rgb(242, 246, 247)",border: "2px solid white" }}>{variablesRow.smd}</TableCell>
                        <TableCell align="right">{variablesRow.adj_control_mean}</TableCell>
                        <TableCell align="right">{variablesRow.adj_study_mean}</TableCell>
                        <TableCell align="right" sx={{backgroundColor: "rgb(242, 246, 247)",border: "2px solid white" }}>{variablesRow.adj_smd}</TableCell>
                        <TableCell align="right">{variablesRow.control_median}</TableCell>
                        <TableCell align="right">{variablesRow.study_median}</TableCell>
                        <TableCell align="right">{variablesRow.control_sd}</TableCell>
                        <TableCell align="right">{variablesRow.study_sd}</TableCell>
                      </TableRow>
                    ))}
                       {childrenRow.children.map((childrenRowII, index) => (
                      <TableRow key={index} className="tableclass" >
                        <TableCell align="left" component="th" scope="row" width="10px">{childrenRowII.name}</TableCell>
                        <TableCell align="right"></TableCell>
                        <TableCell align="right"></TableCell>
                        <TableCell align="right"></TableCell>
                        <TableCell align="right"></TableCell>
                        <TableCell align="right"></TableCell>
                        <TableCell align="right"></TableCell>
                        <TableCell align="right"></TableCell>
                        <TableCell align="right"></TableCell>
                        <TableCell align="right"></TableCell>
                        <TableCell align="right"></TableCell>
                        <TableCell align="right"></TableCell>
                      </TableRow>,
                      <ChildrenRowII key={childrenRowII.name} childrenRowII={childrenRowII} />
                       ))}
                </Table>
            </Collapse>
          </TableCell>
        </TableRow>
      </React.Fragment>
    );
  }
  

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  function xyz(){
    // const status12 =  row.map((each) => (console.log("each", each)))
     
    console.log("each", row.variables);

  }

  xyz();

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <RemoveOutlinedIcon /> : <AddOutlinedIcon />}
          </IconButton>
          {row.name}
        </TableCell>
        <TableCell align="left" component="th" scope="row"></TableCell> 
        <TableCell align="center"></TableCell>
        <TableCell align="center"></TableCell>
        <TableCell align="center"></TableCell>
        <TableCell align="center"></TableCell>
        <TableCell align="center"></TableCell>
        <TableCell align="center"></TableCell>
        <TableCell align="center"></TableCell>
        <TableCell align="center"></TableCell>
        <TableCell align="center"></TableCell>
        <TableCell align="center"></TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={12} className="tableclass1">
          <Collapse in={open} timeout="auto" unmountOnExit>
              <Table aria-label="collapsible table">
                  {row.variables.map((variablesRow, index) => (
                    <TableRow key={index} className="tableclass" >
                      <TableCell align="left" component="th" scope="row">{variablesRow.display_name}</TableCell>
                      <TableCell align="right">{variablesRow.measure_type}</TableCell>
                      <TableCell align="right">{variablesRow.control_mean}</TableCell>
                      <TableCell align="right">{variablesRow.study_mean}</TableCell>
                      <TableCell align="right" sx={{backgroundColor: "rgb(242, 246, 247)",border: "2px solid white" }}>{variablesRow.smd}</TableCell>
                      <TableCell align="right">{variablesRow.adj_control_mean}</TableCell>
                      <TableCell align="right">{variablesRow.adj_study_mean}</TableCell>
                      <TableCell align="right" sx={{backgroundColor: "rgb(242, 246, 247)",border: "2px solid white" }}>{variablesRow.adj_smd}</TableCell>
                      <TableCell align="right">{variablesRow.control_median}</TableCell>
                      <TableCell align="right">{variablesRow.study_median}</TableCell>
                      <TableCell align="right">{variablesRow.control_sd}</TableCell>
                      <TableCell align="right">{variablesRow.study_sd}</TableCell>
                    </TableRow>
                  ))}
                     {row.children.map((childrenRow, index) => (
                    <TableRow key={index} className="tableclass" >
                      <TableCell align="left" component="th" scope="row" width="10px">{childrenRow.name}</TableCell>
                      <TableCell align="right"></TableCell>
                      <TableCell align="right"></TableCell>
                      <TableCell align="right"></TableCell>
                      <TableCell align="right"></TableCell>
                      <TableCell align="right"></TableCell>
                      <TableCell align="right"></TableCell>
                      <TableCell align="right"></TableCell>
                      <TableCell align="right"></TableCell>
                      <TableCell align="right"></TableCell>
                      <TableCell align="right"></TableCell>
                      <TableCell align="right"></TableCell>
                    </TableRow>,
                    <ChildrenRow key={childrenRow.name} childrenRow={childrenRow} />
                     ))}
              </Table>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      }),
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};


export default function CollapsibleTable() {

    function xyz(){
      const status =  rows.map((row) => (console.log("row", row)))
       
      
    }

    xyz();
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
        <TableRow >
            <TableCell align="right" sx={{backgroundColor: "rgb(242, 246, 247)",border: "2px solid white" }}></TableCell>
            <TableCell align="right" sx={{backgroundColor: "rgb(242, 246, 247)",border: "2px solid white" }}></TableCell>
            <TableCell align="center" sx={{backgroundColor: "rgb(242, 246, 247)",border: "2px solid white" }} colSpan="3">Baseline Unadjusted</TableCell>
            <TableCell align="center" sx={{backgroundColor: "rgb(242, 246, 247)",border: "2px solid white" }} colSpan="3">Baseline Adjusted (Matched)</TableCell>
            <TableCell align="center" sx={{backgroundColor: "rgb(242, 246, 247)",border: "2px solid white" }} colSpan="2">Median</TableCell>
            <TableCell align="center" sx={{backgroundColor: "rgb(242, 246, 247)",border: "2px solid white" }} colSpan="2">Std Dev</TableCell>
          </TableRow>
          <TableRow >
            <TableCell align="right" sx={{backgroundColor: "rgb(242, 246, 247)",border: "2px solid white" }}>Category</TableCell>
            <TableCell align="right" sx={{backgroundColor: "rgb(242, 246, 247)",border: "2px solid white" }}>Type</TableCell>
            <TableCell align="right" sx={{backgroundColor: "rgb(242, 246, 247)",border: "2px solid white" }}>Control</TableCell>
            <TableCell align="right" sx={{backgroundColor: "rgb(242, 246, 247)",border: "2px solid white" }}>Study</TableCell>
            <TableCell align="right" sx={{backgroundColor: "rgb(242, 246, 247)",border: "2px solid white" }}>Std Diff</TableCell>
            <TableCell align="right" sx={{backgroundColor: "rgb(242, 246, 247)",border: "2px solid white" }}>Control</TableCell>
            <TableCell align="right" sx={{backgroundColor: "rgb(242, 246, 247)",border: "2px solid white" }}>Study</TableCell>
            <TableCell align="right" sx={{backgroundColor: "rgb(242, 246, 247)",border: "2px solid white" }}>Std Diff</TableCell>
            <TableCell align="right" sx={{backgroundColor: "rgb(242, 246, 247)",border: "2px solid white" }}>Control</TableCell>
            <TableCell align="right" sx={{backgroundColor: "rgb(242, 246, 247)",border: "2px solid white" }}>Study</TableCell>
            <TableCell align="right" sx={{backgroundColor: "rgb(242, 246, 247)",border: "2px solid white" }}>Control</TableCell>
            <TableCell align="right" sx={{backgroundColor: "rgb(242, 246, 247)",border: "2px solid white" }}>Study</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
