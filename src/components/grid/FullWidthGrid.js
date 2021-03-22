import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AlertDialogSlide from './../modal/AlertDialogSlide';
import SimpleModal from './../modal/SimpleModal';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: 20,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24'].map((text, index) => (
          <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={0} className={classes.paper}>
              <SimpleModal
                  value={text}
                  />
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
