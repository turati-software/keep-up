import Link from "next/link";
import { Button, Grid } from "@material-ui/core";

const DesktopMenu = ({ items }) => {
  return (
    <>
      <div className="menu">
        <Grid container className={"menuGrid"}>
          {items.map((item, index) => (
            <Grid item xs key={index}>
              <Link href={item.url}>
                <Button
                  /*className={classes.menuButton}*/ style={{
                    width: "100%",
                    fontSize: "11px",
                    fontWeight: "700",
                    height: "100%",
                  }}
                >
                  {item.label}
                </Button>
              </Link>
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
};

export default DesktopMenu;
