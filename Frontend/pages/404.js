import React from "react";
import Link from "next/link";
import NextHead from "next/head";
import { Grid } from "@material-ui/core";
import WarningIcon from "@material-ui/icons/Warning";
import { makeStyles } from "@material-ui/core/styles";
import Footer from "../components/Footer";

const useStyles = makeStyles((theme) => ({
  notFound: {
    textAlign: "center",
    height: "45vh",
  },
  para: {
    paddingTop: "1rem",
  },
}));

export default function NotFound() {
  const classes = useStyles();

  return (
    <>
      <NextHead>
        <link
          href="https://fonts.googleapis.com/css?family=Roboto&display=swap"
          rel="stylesheet"
        ></link>
        <title>Oops - Keep Up</title>
      </NextHead>
      <div className="fullpage">
        <div className="content">
          <div className="banner">
            <Grid container className={"headerGrid"}>
              <Grid item xs={2} style={{}}></Grid>
              <Grid item xs={8} style={{ textAlign: "center", width: "100%" }}>
                <img src="/static/Layout/KEEP UP.png" />
              </Grid>
            </Grid>
          </div>
          <div className="bannerMobile">
            <Grid container className={"headerGrid"}>
              <Grid item xs={12} style={{ textAlign: "center", width: "100%" }}>
                <img src="/static/Layout/KEEP UP.png" width={"250px"} />
              </Grid>
            </Grid>
          </div>
        </div>
        <div className={classes.notFound}>
          <WarningIcon fontSize="large" />
          <h1>Oooops...</h1>
          <h2>That page cannot be found.</h2>
          <p className={classes.para}>
            Go back to the{" "}
            <Link href="/">
              <a>Homepage</a>
            </Link>
          </p>
        </div>
        <div className="pageFooter" id="footer">
          <Footer />
        </div>
      </div>
    </>
  );
}
