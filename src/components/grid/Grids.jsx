import "./grid.scss";
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import ReportProblemOutlinedIcon from '@mui/icons-material/ReportProblemOutlined';

export default function Grids() {
  return (
    <div className="grids">
  <div className="gridsWrapper">
    <div className="block">
      <span className="subblock">Demographics</span>
      <span className="subicon"><CheckCircleOutlineRoundedIcon/></span>
    </div>
    <div className="block">
      <span className="subblock">Conditions</span>
      <span className="subicon"><CheckCircleOutlineRoundedIcon/></span>
    </div>
    <div className="block">
      <span className="subblock">Outpatient Metrics</span>
      <span className="subicon"><CheckCircleOutlineRoundedIcon/></span>
    </div>
    <div className="block">
      <span className="subblock">Special Post-Discharge Metrics</span>
      <span className="subicon"><CheckCircleOutlineRoundedIcon/></span>
    </div>
    <div className="block">
      <span className="subblock">Region</span>
      <span className="subicon"><ReportProblemOutlinedIcon/></span>
    </div>
    <div className="block">
      <span className="subblock">Total Cost</span>
      <span className="subicon"><CheckCircleOutlineRoundedIcon/></span>
    </div>
    <div className="block">
      <span className="subblock">Inpatient Metrics</span>
      <span className="subicon"><CheckCircleOutlineRoundedIcon/></span>
    </div>
    <div className="block">
      <span className="subblock">Pharmacy Metrics</span>
      <span className="subicon"><CheckCircleOutlineRoundedIcon/></span>
    </div>
    <div className="block">
      <span className="subblock">Risk</span>
      <span className="subicon"><CheckCircleOutlineRoundedIcon/></span>
    </div>
    <div className="block">
      <span className="subblock">Re-admission Rates</span>
      <span className="subicon"><CheckCircleOutlineRoundedIcon/></span>
    </div>
    <div className="block">
      <span className="subblock">Professional Metrics</span>
      <span className="subicon"><CheckCircleOutlineRoundedIcon/></span>
    </div>
  </div>
  </div>
  )
}