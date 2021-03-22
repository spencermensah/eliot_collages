import './../../App.css';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import template from './../template.png'
import SimpleSelect from './../select/SimpleSelect';

import useMediaQuery from '@material-ui/core/useMediaQuery';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import Select from '@material-ui/core/Select';


import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormLabel from '@material-ui/core/FormLabel';

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: 20,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

function ProductGrid(props) {
  const classes = useStyles();
  const [size, setSize] = React.useState('small');

  const handleChange = (event) => {
    setSize(event.target.value);
  };

  var styleToUse =  {top:140,left:212,height:380};
  var height = 500


  if (useMediaQuery(theme.breakpoints.up('md'))) {
    if (size == "small") {
      styleToUse = {top:150,left:235,height:230};
    } else if (size == "md") {
      styleToUse =  {top:150,left:200,height:300};
    } else if (size == "large") {
      styleToUse =  {top:140,left:212,height:380};
    } else if (size == "bogo") {
      styleToUse =  {top:80,left:200,height:300,clipPath:"polygon(0 30%, 100% 30%, 100% 60%, 0 60%)"};
    } else {
      styleToUse =  {top:140,left:212,height:380};
    }
  } else {
    if (size == "small") {
      styleToUse = {top:100 ,left:425 ,height:230 / 2};
      height = height / 2
    } else if (size == "md") {
      styleToUse =  {top:100,left:410,height:300 / 2};
      height = height / 2
    } else if (size == "large") {
      styleToUse =  {top:100,left:380,height:380 / 2};
      height = height / 2
    } else if (size == "bogo") {
      styleToUse =  {top:70,left:410,height:300 / 2,clipPath:"polygon(0 30%, 100% 30%, 100% 60%, 0 60%)"};
      height = height / 2
    } else {
      styleToUse =  {top:140,left:212,height:380 / 2};
      height = height / 2
    }
  }


  return (
    <div>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={6}>
            <Paper elevation={0}  className={classes.paper}>
              <img class="tmp" style={{height:height}} src={template}></img>
              <img class="graphic" style={styleToUse} src={"./img/" + props.value + ".jpg"} />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Paper elevation={0} className={classes.paper}>
              <FormControl component="fieldset">
                <FormLabel component="legend">Graphic Size</FormLabel>
                <RadioGroup aria-label="gender" name="gender1" value={size} onChange={handleChange}>
                  <FormControlLabel value="small" control={<Radio />} label="Small" />
                  <FormControlLabel value="md" control={<Radio />} label="Large" />
                  <FormControlLabel value="bogo" control={<Radio />} label="Box Logo" />
                </RadioGroup>
              </FormControl>
            </Paper>
          </Grid>
        </Grid>
    </div>
  );
}

export default ProductGrid;
