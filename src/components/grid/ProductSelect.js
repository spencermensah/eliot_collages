import './../../App.css';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import template from './../template.png'
import SimpleSelect from './../select/SimpleSelect';

import SimpleModalShirt from './../modal/SimpleModalShirt';
import SimpleModalPrint from './../modal/SimpleModalPrint';

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

function ProductSelect(props) {
  const classes = useStyles();
  const [size, setSize] = React.useState('small');

  const handleChange = (event) => {
    setSize(event.target.value);
  };

  var styleToUse =  {top:140,left:212,height:380};
  var height = 500

  return (
    <div>
      <SimpleModalShirt value={props.value}/>
      <SimpleModalPrint value={props.value}/>
    </div>
  );
}

export default ProductSelect;
