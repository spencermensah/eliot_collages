import './App.css';
import React from 'react';
import ReactPlayer from "react-player"
import template from './template.png'
import RndElement from './RndElement';
import Button from '@material-ui/core/Button';

function Item(props) {
  const [value, setValue] = React.useState("1");

  return (
    <div>
      <div style={{ width: "100%", height: "100%" }}>
        <div>
          <img class="tmp" src={template}></img>
        </div>

        <RndElement
          index={props.value}
          />

        <h1>Limited Edition Custom T Shirts</h1>
          <h1>30 GBP</h1>

          <Button variant="contained" color="primary">
            Buy Now
          </Button>
      </div>
    </div>
  );
}

export default Item;
