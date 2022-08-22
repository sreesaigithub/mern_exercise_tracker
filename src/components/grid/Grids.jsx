import "./grid.scss";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#6abce2',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  margin: '10px',
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function FormRow() {
  return (
    <div>
      <Grid item xs={100}>
        <Item>Demographics</Item>
      </Grid>
      <Grid item xs={100}>
        <Item>Conditions</Item>
      </Grid>
      <Grid item xs={100}>
        <Item>Outpatient Metrics</Item>
      </Grid>
      <Grid item xs={100}>
        <Item>Special Post-Discharge Metrics</Item>
      </Grid>
    </div>
  );
}


function FormRow1() {
  return (
    <div>
      <Grid item xs={100}>
        <Item>Demographics</Item>
      </Grid>
      <Grid item xs={100}>
        <Item>Conditions</Item>
      </Grid>
      <Grid item xs={100}>
        <Item>Outpatient Metrics</Item>
      </Grid>
      <Grid item xs={100}>
        <Item>Special Post-Discharge Metrics</Item>
      </Grid>
    </div>
  );
}

function FormRow2() {
  return (
    <div>
      <Grid item xs={100}>
        <Item>Demographics</Item>
      </Grid>
      <Grid item xs={100}>
        <Item>Conditions</Item>
      </Grid>
      <Grid item xs={100}>
        <Item>Outpatient Metrics</Item>
      </Grid>
      <Grid item xs={100}>
        <Item>Special Post-Discharge Metrics</Item>
      </Grid>
    </div>
  );
}

export default function Grids() {
  return (
    <div className='fff'>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid container item spacing={3}>
          <FormRow />
        </Grid>
      </Grid>
    </Box>
     <Box sx={{ flexGrow: 2 }}>
     <Grid container spacing={2}>
       <Grid container item spacing={3}>
         <FormRow1 />
       </Grid>
     </Grid>
   </Box>
   <Box sx={{ flexGrow: 2 }}>
     <Grid container spacing={2}>
       <Grid container item spacing={3}>
         <FormRow2 />
       </Grid>
     </Grid>
   </Box>
   </div>
  );
}
