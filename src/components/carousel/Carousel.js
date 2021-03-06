import './../../App.css';
import React from 'react';
import ReactPlayer from "react-player"
import {
  ButtonBack,
  ButtonFirst,
  ButtonLast,
  ButtonNext,
  CarouselProvider,
  Slide,
  Slider,
  ImageWithZoom,
  DotGroup,
} from 'pure-react-carousel';
import s from './style.scss';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Button from '@material-ui/core/Button';


function Carousel(props) {

  function sayHello(name) {
     props.onChange(name);
   }


  return (
    <div className="App">
        <CarouselProvider
          visibleSlides={2}
          totalSlides={6}
          step={1}
          naturalSlideWidth={300}
          naturalSlideHeight={500}
          hasMasterSpinner
          infinite
          isPlaying={true}
        >
          <Slider className={s.slider}>

            {['1', '2', '3', '4', '5', '6'].map((text, index) => (
              <Slide>
                <ImageWithZoom src={"./img/" + text + ".png"} />
              </Slide>
            ))}

          </Slider>
        </CarouselProvider>

    </div>
  );
}

export default Carousel;
