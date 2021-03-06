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
    color: theme.palette.text.secondary,
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {['1', '2', '3', '4', '5', '6'].map((text, index) => (
          <Grid item xs={12} sm={6} md={4}>
            <Paper className={classes.paper}>
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
