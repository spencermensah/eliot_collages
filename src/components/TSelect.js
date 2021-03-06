import './App.css';
import React from 'react';
import template from './template.png'
import Draggable from 'react-draggable';
import { Button } from '@material-ui/core';
import AlertDialogSlide from './AlertDialogSlide';
import ResponsiveDrawer from './ResponsiveDrawer';

function TSelect() {

  const [value, setValue] = React.useState("1");

    function handleChange(newValue) {
      setValue(newValue.param);
      console.log(value);
      console.log("https://spencermensah.github.io/img/" + value + ".png");
    }

  return (
    <div>
        <div className="CustomApp">

          <img class="tmp" src={template}></img>

          <Draggable>
            <div>
              <img class="graphic" src={"https://spencermensah.github.io/img/" + value + ".png"}></img>
            </div>
          </Draggable>

          <ResponsiveDrawer
            value={value}
            onChange={handleChange}
            />

        </div>
    </div>
  );
}

export default TSelect;
