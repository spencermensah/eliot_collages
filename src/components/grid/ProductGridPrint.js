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
import Select from '@material-ui/core/Select';

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
      styleToUse = {top:150,left:265,height:230};
    } else if (size == "md") {
      styleToUse =  {top:150,left:240,height:300};
    } else if (size == "large") {
      styleToUse =  {top:140,left:212,height:380};
    } else if (size == "bogo") {
      styleToUse =  {top:80,left:235,height:320,clipPath:"polygon(0 30%, 100% 30%, 100% 60%, 0 60%)"};
    } else {
      styleToUse =  {top:140,left:212,height:380};
    }
  } else {
    if (size == "small") {
      styleToUse = {top:100 ,left:440 ,height:230 / 2};
      height = height / 2
    } else if (size == "md") {
      styleToUse =  {top:100,left:430,height:300 / 2};
      height = height / 2
    } else if (size == "large") {
      styleToUse =  {top:100,left:415,height:380 / 2};
      height = height / 2
    } else if (size == "bogo") {
      styleToUse =  {top:70,left:425,height:320 / 2,clipPath:"polygon(0 30%, 100% 30%, 100% 60%, 0 60%)"};
      height = height / 2
    } else {
      styleToUse =  {top:140,left:212,height:380 / 2};
      height = height / 2
    }
  }


  return (
    <div>
      <ThemeProvider theme={theme}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={6}>
            <Paper className={classes.paper}>
              <img class="tmp" style={{height:300}} src={"./img/" + props.value + ".png"}></img>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Paper className={classes.paper}>
              <FormControl className={classes.formControl}>
                <InputLabel shrink id="demo-simple-select-placeholder-label-label">
                  Pick Graphic Size
                </InputLabel>
                <Select
                  labelId="demo-simple-select-placeholder-label-label"
                  id="demo-simple-select-placeholder-label"
                  value={size}
                  onChange={handleChange}
                  displayEmpty
                  className={classes.selectEmpty}
                >
                  <MenuItem value={"small"}>Small</MenuItem>
                  <MenuItem value={"md"}>Medium</MenuItem>
                  <MenuItem value={"large"}>Large</MenuItem>
                  <MenuItem value={"bogo"}>Box Logo</MenuItem>
                </Select>
              </FormControl>
            </Paper>
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  );
}

export default ProductGrid;
