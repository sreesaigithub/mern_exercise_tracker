import "./sidebar.scss";
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import Select from "react-dropdown-select";
// import 'react-date-range/dist/styles.css'; // main style file
// import 'react-date-range/dist/theme/default.css'; // theme css file
// import { DateRangePicker } from 'react-date-range';

const Sidebar = () => {

  var options1 = [
    { value: 'complex', label: 'Complex Case Management' },
    { value: 'disease', label: 'Disease Management' }
  ];

  function logChange1(val) {
    console.log("Selected: " + JSON.stringify(val));
  }

  var options2 = [
    { value: 'medicare', label: 'Medicare' },
    { value: 'medicaid', label: 'Medicaid' }
  ];

  function logChange2(val) {
    console.log("Selected: " + JSON.stringify(val));
  }

  
  var options3 = [
    { value: 'medadvsnp', label: 'MedAdv_SNP' },
    { value: 'familycare', label: 'Family Care' }
  ];

  function logChange3(val) {
    console.log("Selected: " + JSON.stringify(val));
  }

  var options4 = [
    { value: 'central', label: 'Central' },
    { value: 'east', label: 'East' },
    { value: 'west', label: 'West' }
  ];

  function logChange4(val) {
    console.log("Selected: " + JSON.stringify(val));
  }
  
  var options5 = [
    { value: 'fully', label: 'Fully insured' },
    { value: 'aso', label: 'ASO' }
  ];

  function logChange5(val) {
    console.log("Selected: " + JSON.stringify(val));
  }

  
  var options6 = [
    { value: 'paidamount', label: 'Paid Amount' },
    { value: 'allowedamount', label: 'Allowed Amount' }
  ];

  function logChange6(val) {
    console.log("Selected: " + JSON.stringify(val));
  }

  
  var options7 = [
    { value: '3months', label: '3 Months' },
    { value: '6months', label: '6 Months' },
    { value: '9months', label: '9 Months' }
  ];

  function logChange7(val) {
    console.log("Selected: " + JSON.stringify(val));
  }
  // const handleSelect = (ranges) => {
  //   console.log(ranges);
  //   // {
  //   //   selection: {
  //   //     startDate: [native Date Object],
  //   //     endDate: [native Date Object],
  //   //   }
  //   // }
  // }

  // const selectionRange = {
  //   startDate: new Date(),
  //   endDate: new Date(),
  //   key: 'selection',
  // }
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "default" }}>
          <span className="logo">Elevance Health</span>
        </Link>
      </div>
      {/* <hr /> */}
      <div className="center">
        <div className="centerbluebar">

        </div>
        <div className="heading">
          <p >Model Diagnostics</p>
        </div>
        <ul>
          <p className="title">FILTER POPULATION</p>
            <li>
              <span>Program Name</span>
            </li>
            <Select
                className="form-field-name"
                value="one"
                options={options1}
                onChange={logChange1}
              />
            <li>
              <span>LOB</span>
            </li>
            <Select
                className="form-field-name"
                value="one"
                options={options2}
                onChange={logChange2}
              />
          <li>
            <span>Sub LOB</span>
          </li>
          <Select
                className="form-field-name"
                value="one"
                options={options3}
                onChange={logChange3}
              />
          <li>
            <span>Region</span>
          </li>
          <Select
                className="form-field-name"
                value="one"
                options={options4}
                onChange={logChange4}
              />          
          <li>
            <span>Funding Type</span>
          </li>
          <Select
                className="form-field-name"
                value="one"
                options={options5}
                onChange={logChange5}
              />   
          <li>
            <span>Amount Type</span>
          </li>
          <Select
                className="form-field-name"
                value="one"
                options={options6}
                onChange={logChange6}
              />
          <li>
            <span>Case ID Period/ Cohort Date Range</span>
          </li>

          {/* <DateRangePicker
            ranges={[selectionRange]}
            onChange={handleSelect}
          /> */}
          <li>
            <span>Follow Up Period</span>
          </li>
          <Select
                className="form-field-name"
                value="one"
                options={options7}
                onChange={logChange7}
              />
        </ul>
      </div>
      <div className="bottom">
      <Button variant="outlined">Reset</Button>
      <Button variant="contained" className="colorOption">Run Stage 1 Model</Button>
      </div>
    </div>
  );
};

export default Sidebar;
