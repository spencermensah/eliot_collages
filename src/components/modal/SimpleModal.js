import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import DialogContent from '@material-ui/core/DialogContent';

import ProductGrid from './../grid/ProductGrid';
import ProductGridPrint from './../grid/ProductGridPrint';
import template from './../template.png'

function getModalStyle() {
  const top = 50
  const left = 50

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 900,
    backgroundColor: 'black',
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function SimpleModal(props) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [opentshirt, setOpentshirt] = React.useState(false);

  const [openprint, setOpenprint] = React.useState(false);

  const handleOpen = () => {
    setOpentshirt(true);
  };

  const handleClose = () => {
    setOpentshirt(false);
  };

  const handleOpenPrint = () => {
    setOpenprint(true);
  };

  const handleClosePrint = () => {
    setOpenprint(false);
  };


  function handleClickChild(e) {
    e.preventDefault();
    e.stopPropagation();
    handleOpenPrint();

  }

  return (
    <div>
      <p style={{textAlign:"left"}}>T-Shirts - £35</p>
      <div onClick={handleOpen}  class="banner" >
          <div onClick={handleClickChild} >
            <div style={{background:"url(https://spencermensah.github.io/img/" + props.value + ".png) no-repeat 50% 50%"}} class="overlay"></div>
          </div>
      </div>
      <p style={{textAlign:"right"}}>Prints - £20</p>
      <Modal
        open={opentshirt}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >

      <div style={modalStyle} className={classes.paper}>
        <DialogContent>
          <a><ProductGrid value={props.value}/></a>
        </DialogContent>
      </div>

    </Modal>

    <Modal
      open={openprint}
      onClose={handleClosePrint}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >

    <div style={modalStyle} className={classes.paper}>
      <DialogContent>
        <a><ProductGridPrint value={props.value}/></a>
      </DialogContent>
    </div>

  </Modal>
    </div>
  );
}

// <img onClick={handleOpen} class="graphic hover" style={{width:300}} src={"./img/" + props.value + ".png"} />
// <img class="tmp hovertmp" style={{height:500}} src={template}></img>
