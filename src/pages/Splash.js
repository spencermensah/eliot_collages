import './App.css';
import React from 'react';
import ReactPlayer from "react-player"
function Splash() {

  return (
    <div className="SplashApp">
        <div className='Product-wrapper'>
          <ReactPlayer
            url="splash.mp4"
            muted={true}
            playing={true}
            loop={true}
          />
        </div>
        <a href="http://localhost:3000/#/Home"><p>Enter Store</p></a>
    </div>
  );
}

export default Splash;
