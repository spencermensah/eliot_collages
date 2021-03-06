import React from "react";
import { render } from "react-dom";
import { Rnd } from "react-rnd";
import { style, parentBoundary } from "./styles";

class RndElement extends React.Component {
  constructor() {
    super();
    this.state = {
      width: 150,
      height: 150,
      x: 130,
      y: 10*15
    };
  }



  render() {
    return (
      <div style={{ ...parentBoundary }}>
         <div style={{ width: "100%", height: "100%" }}>
          <Rnd
            style={style}
            bounds="parent"
            bounds="window"
          >
          <div>
            <img style={{height: this.state.height,width: this.state.width }}  src={"https://spencermensah.github.io/img/" + this.props.index + ".png"}></img>
          </div>
          </Rnd>
        </div>
      </div>
    );
  }
}

export default RndElement;
