import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Menu from "./Menu";
import Link from "next/link";

export default function Header() {
  return (
    <div>
      <div className="banner">
        <Grid container className={"headerGrid"}>
          <Grid item xs={2} style={{}}></Grid>
          <Grid item xs={8} style={{ textAlign: "center", width: "100%" }}>
            <img src="/static/Layout/KEEP UP.png" />
          </Grid>
          <Grid item xs={2} style={{ alignItems: "center" }}>
            <Link href="donateWindow">
              <a>
                <Button
                  variant="contained"
                  style={{
                    background: "white",
                    alignSelf: "center",
                    float: "right",
                    marginRight: "60px",
                    fontFamily: "Roboto",
                    fontSize: "18px",
                    fontWeight: "700",
                    width: "137px",
                    height: "45px",
                    lineHeight: "24px",
                  }}
                >
                  DONATE
                </Button>
              </a>
            </Link>
          </Grid>
        </Grid>
      </div>
      <div className="bannerMobile">
        <Grid container className={"headerGrid"}>
          <Grid item xs={12} style={{ textAlign: "center", width: "100%" }}>
            <img src="/static/Layout/KEEP UP.png" width={"250px"} />
          </Grid>
        </Grid>
        <Grid container className={"headerGrid"}>
          <Grid item xs={12} style={{ alignItems: "center" }}>
            <Link href="donateWindow">
              <Button
                variant="contained"
                style={{
                  background: "white",
                  alignSelf: "left",
                  fontFamily: "Roboto",
                  fontSize: "18px",
                  fontWeight: "700",
                  lineHeight: "24px",
                  marginBottom: "10px",
                  marginTop: "10px",
                }}
              >
                DONATE
              </Button>
            </Link>
          </Grid>
        </Grid>
      </div>
      <Menu />
    </div>
  );
}
