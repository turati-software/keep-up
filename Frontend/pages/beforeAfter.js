import React from 'react';
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core";
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import RemoveRedEyeIcon from '@material-ui/icons/RemoveRedEye';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import IconButton from '@material-ui/core/IconButton';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';
export default function beforeAfter() {

  const useStyles = makeStyles((theme) => ({
    heading: {
      fontSize: "30px",
      fontFamily: "Roboto",
      marginTop: "25px",
      marginBottom: "10px",
    },

    subtitle: {
      fontFamily: "Roboto",
      fontSize: "18px",
      marginBottom: "20px",
      marginTop: "20px",
      lineHeight: "21px",
      width: "65%",
    },
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);

  const handleOpen1 = () => {
    setOpen(true);
  };

  const handleClose1 = () => {
    setOpen(false);
  };

  const handleOpen2 = () => {
    setOpen2(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };

  const handleOpen3 = () => {
    setOpen3(true);
  };

  const handleClose3 = () => {
    setOpen3(false);
  };

  const FIRST_IMAGE_1 = {
    id: 1,
    imageUrl: "../static/images/beautiful_landscape.jpg"
  };
  const SECOND_IMAGE_1 = {
    id: 2,
    imageUrl: "../static/images/beautiful_landscape2.jpg"
  };

  const FIRST_IMAGE_2 = {
    id: 1,
    imageUrl: "../static/images/old_house.jpg"
  };
  const SECOND_IMAGE_2 = {
    id: 2,
    imageUrl: "../static/images/Electrical_Demands.jpg"
  };

  const FIRST_IMAGE_3 = {
    id: 1,
    imageUrl: "../static/images/house.jpg"
  };
  const SECOND_IMAGE_3 = {
    id: 2,
    imageUrl: "../static/images/Electrical_Demands.jpg"
  };

    return (
        <div>
          <ImageList >
        <Grid
              container
              spacing={4}
              style={{
                height: "100%",
                width: "100%",
                display: "inline-flexbox",
                alignContent: "center",
                marginTop: "20px",
              }}
            >
              
              <Grid item xs={6} style={{ textAlign: "-webkit-center" }}>
                

                <ImageListItem >
                <img
                  src="../static/images/beautiful_landscape.jpg"
                  style={{ width: "100%" }}
                />
                 <ImageListItemBar
                  title={"Before"}
                  
                  actionIcon={
                    <IconButton aria-label={`Before`}>
                      <RemoveRedEyeIcon style={{color: "white"}} onClick={handleOpen1}/>
                    </IconButton>
                  }
                />
                </ImageListItem>
          

              </Grid>
              <Grid item xs={6} style={{ textAlign: "-webkit-center" }}>
              <ImageListItem >
                <img
                  src="../static/images/old_house.jpg"
                  style={{ width: "100%" }}
                />
                 <ImageListItemBar
                  title={"Before"}
                  
                  actionIcon={
                    <IconButton aria-label={`Before`}>
                      <RemoveRedEyeIcon style={{color: "white"}} onClick={handleOpen2}/>
                    </IconButton>
                  }
                />
                </ImageListItem>
              </Grid>
              
            </Grid>
            <Grid
              container
              spacing={4}
              style={{
                height: "100%",
                width: "100%",
                display: "inline-flexbox",
                alignContent: "center",
                marginTop: "20px",
              }}
            >
              <Grid item xs={6} style={{ textAlign: "-webkit-center" }}>
                

                <ImageListItem >
                <img
                  src="../static/images/old_house_2.jpg"
                  style={{ width: "100%" }}
                />
                 <ImageListItemBar
                  title={"Before"}
                  
                  actionIcon={
                    <IconButton aria-label={`Before`}>
                      <RemoveRedEyeIcon style={{color: "white"}} onClick={handleOpen2}/>
                    </IconButton>
                  }
                />
                </ImageListItem>

              </Grid>
              <Grid item xs={6} style={{ textAlign: "-webkit-center" }}>
                

                <ImageListItem >
                <img
                  src="../static/images/house.jpg"
                  style={{ width: "100%" }}
                />
                 <ImageListItemBar
                  title={"Before"}
                  
                  actionIcon={
                    <IconButton aria-label={`Before`}>
                      <RemoveRedEyeIcon style={{color: "white"}} onClick={handleOpen3}/>
                    </IconButton>
                  }
                />
                </ImageListItem>
              </Grid>
              
            </Grid>
            
            </ImageList>

            <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              className={classes.modal}
              open={open}
              onClose={handleClose1}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
            >
              <Fade in={open}>
              <div className={classes.paper}>
              <Grid item xs={10} style={{ textAlign: "-webkit-center" }}>
              

                <ReactBeforeSliderComponent
                    firstImage={FIRST_IMAGE_1}
                    secondImage={SECOND_IMAGE_1}
                />
                <Grid
                  container
                  spacing={2}
                  
                >
                  <Grid item xs={6} style={{ textAlign: "-webkit-left" }}>
                    <span style={{textAlign:"left"}}><b>Before</b></span>
                  </Grid>
                  <Grid item xs={6} style={{ textAlign: "-webkit-right" }}>
                    <span style={{textAlign:"left"}}><b>After</b></span>
                  </Grid>
                </Grid>

              </Grid>
              </div>
            </Fade>
            </Modal>

            <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              className={classes.modal}
              open={open2}
              onClose={handleClose2}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
            >
              <Fade in={open2}>
              <div className={classes.paper}>
              <Grid item xs={10} style={{ textAlign: "-webkit-center" }}>
              

                <ReactBeforeSliderComponent
                    firstImage={SECOND_IMAGE_2}
                    secondImage={FIRST_IMAGE_2}
                />
                <Grid
                  container
                  spacing={2}
                  
                >
                  <Grid item xs={6} style={{ textAlign: "-webkit-left" }}>
                    <span style={{textAlign:"left"}}><b>Before</b></span>
                  </Grid>
                  <Grid item xs={6} style={{ textAlign: "-webkit-right" }}>
                    <span style={{textAlign:"left"}}><b>After</b></span>
                  </Grid>
                </Grid>

              </Grid>
              </div>
            </Fade>
            </Modal>

            <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              className={classes.modal}
              open={open3}
              onClose={handleClose3}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
            >
              <Fade in={open3}>
              <div className={classes.paper}>
              <Grid item xs={10} style={{ textAlign: "-webkit-center" }}>
              

                <ReactBeforeSliderComponent
                    firstImage={SECOND_IMAGE_3}
                    secondImage={FIRST_IMAGE_3}
                />
                <Grid
                  container
                  spacing={2}
                  
                >
                  <Grid item xs={6} style={{ textAlign: "-webkit-left" }}>
                    <span style={{textAlign:"left"}}><b>Before</b></span>
                  </Grid>
                  <Grid item xs={6} style={{ textAlign: "-webkit-right" }}>
                    <span style={{textAlign:"left"}}><b>After</b></span>
                  </Grid>
                </Grid>

              </Grid>
              </div>
            </Fade>
            </Modal>


            </div>
            
    );
}