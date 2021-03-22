import './../App.css';
import React from 'react';

import Carousel from './../components/carousel/Carousel';
import AlertDialogSlide from './../components/modal/AlertDialogSlide';
import FullWidthGrid from './../components/grid/FullWidthGrid'

import template from './../components/template.png'
import Button from '@material-ui/core/Button';
import DialogContentText from '@material-ui/core/DialogContentText';



import ReactPlayer from "react-player"

function Home() {
  const [value, setValue] = React.useState("1");

  function handleChange(newValue) {
    setValue(newValue);
    console.log(value);
    console.log("https://spencermensah.github.io/img/" + value + ".png");
  }

  return (
    <div className="App">

        <div className='Product-wrapper'>
          <ReactPlayer
            url="splash.mp4"
            playing={true}
            loop={true}
            muted={true}
            width="800px"
          />
        </div>


        <FullWidthGrid/>

        <DialogContentText id="alert-dialog-description">© 2021, arby_collages</DialogContentText>
    </div>
  );
}

export default Home;
