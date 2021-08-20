import Head from "../components/Heads";
import Grid from "@material-ui/core/Grid";
import Layout from "../components/Layout";
import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core";
import SignUp from "../components/SignUp";
import BeforeAfter from './beforeAfter';
import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';

export default function whatwedo() {
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
  }));

  const classes = useStyles();
  return (
    <div>
      <Head title={"What We Do"} />
      <Layout>
        <div className="headings" style={{ textAlign: "-webkit-center" }}>
          <p className="headings" style={{ display: "inline" }}>
            What We{" "}
          </p>
          <h2 className="headings" style={{ display: "inline" }}>
            Do
          </h2>
        </div>

        <div className="desktop">
          <Paper className={"PaperDesktop"}>
            <Grid
              container
              spacing={0}
              style={{
                height: "100%",
                width: "100%",
                display: "inline-flexbox",
                alignContent: "center",
              }}
            >
              <Grid item xs={12} style={{ textAlign: "-webkit-center" }}>
                <p
                  style={{
                    fontSize: "24px",
                    fontWeight: "700",
                    fontFamily: "Roboto",
                  }}
                >
                  A List of What We Do
                </p>
                <ul
                  className={classes.subtitle}
                  style={{
                    textAlign: "-webkit-auto",
                    marginLeft: "200px",
                    lineHeight: "30px",
                    fontFamily: "Roboto",
                  }}
                >
                  <li>Pull Out Weeds</li>
                  <li>Pick Up Litter</li>
                  <li>Restore pavement</li>
                  <li>Replace stolen storm water drain covers</li>
                </ul>
              </Grid>
            </Grid>
            <Grid
              container
              spacing={0}
              style={{
                height: "100%",
                width: "100%",
                display: "inline-flexbox",
                alignContent: "center",
              }}
            >
              <Grid item xs={12} style={{ textAlign: "-webkit-center" }}>
                <p
                  style={{
                    fontSize: "24px",
                    fontWeight: "700",
                    fontFamily: "Roboto",
                  }}
                >
                  Before and After Photos
                </p>
              </Grid>
            </Grid>
           
           <BeforeAfter></BeforeAfter>
             
          </Paper>
        </div>
        <div className="mobile">
          <Paper className={"PaperMobile"}>
            <Grid
              container
              spacing={0}
              style={{
                height: "100%",
                width: "100%",
                display: "inline-flexbox",
                alignContent: "center",
              }}
            >
              <Grid item xs={12} style={{ textAlign: "-webkit-center" }}>
                <p
                  style={{
                    fontSize: "24px",
                    fontWeight: "700",
                    fontFamily: "Roboto",
                  }}
                >
                  A List of What We Do
                </p>
                <ul
                  className={classes.subtitle}
                  style={{
                    textAlign: "-webkit-auto",
                    marginLeft: "0px",
                    lineHeight: "30px",
                  }}
                >
                  <li>Pull Out Weeds</li>
                  <li>Pick Up Litter</li>
                  <li>Restore pavement</li>
                  <li>Replace stolen storm water drain covers</li>
                </ul>
              </Grid>
            </Grid>
            <Grid
              container
              spacing={0}
              style={{
                height: "100%",
                width: "100%",
                display: "inline-flexbox",
                alignContent: "center",
              }}
            >
              <Grid item xs={12} style={{ textAlign: "-webkit-center" }}>
                <p
                  style={{
                    fontSize: "24px",
                    fontWeight: "700",
                    fontFamily: "Roboto",
                  }}
                >
                  Before and After Photos
                </p>
              </Grid>
            </Grid>
            <Grid
              container
              spacing={0}
              style={{
                height: "100%",
                width: "100%",
                display: "inline-flexbox",
                alignContent: "center",
                marginTop: "20px",
              }}
            >
              <Grid item xs={12} style={{ textAlign: "-webkit-center" }}>
                {/* <img src= style={{ width: "90%" }} /> */}
                <ReactBeforeSliderComponent
                    firstImage={{id: 1,
                                imageUrl:"../static/images/beautiful_landscape.jpg"}}
                    secondImage={{id: 2,
                                  imageUrl:"../static/images/beautiful_landscape2.jpg"}}

                    style={{ width: "90%" }}
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
             
            </Grid>
            <Grid
              container
              spacing={0}
              style={{
                height: "100%",
                width: "100%",
                display: "inline-flexbox",
                alignContent: "center",
                marginTop: "20px",
              }}
            >
              <Grid item xs={12} style={{ textAlign: "-webkit-center" }}>
                {/* <img src="../static/Spend Graph.png" style={{ width: "90%" }} /> */}
                <ReactBeforeSliderComponent
                    firstImage={{id: 1,
                                imageUrl:"../static/images/Electrical_Demands.jpg"}}
                    secondImage={{id: 2,
                                  imageUrl:"../static/images/old_house.jpg"}}

                    style={{ width: "90%" }}
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
              
            </Grid>
            <Grid
              container
              spacing={0}
              style={{
                height: "100%",
                width: "100%",
                display: "inline-flexbox",
                alignContent: "center",
                marginTop: "20px",
              }}
            >
              <Grid item xs={12} style={{ textAlign: "-webkit-center" }}>
                {/* <img src="../static/Spend Graph.png" style={{ width: "90%" }} /> */}
                <ReactBeforeSliderComponent
                    firstImage={{id: 1,
                                imageUrl:"../static/images/Electrical_Demands.jpg"}}
                    secondImage={{id: 2,
                                  imageUrl: "../static/images/old_house_2.jpg"}}

                    style={{ width: "90%" }}
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

              <Grid item xs={12} style={{ textAlign: "-webkit-center" }}>
                {/* <img src="../static/Spend Graph.png" style={{ width: "90%" }} /> */}
                <ReactBeforeSliderComponent
                    firstImage={{id: 1,
                                imageUrl:"../static/images/Electrical_Demands.jpg"}}
                    secondImage={{id: 2,
                                  imageUrl:"../static/images/house.jpg"}}

                    style={{ width: "90%" }}
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
              
            </Grid>
          </Paper>
        </div>
        <SignUp />
      </Layout>
    </div>
  );
}
