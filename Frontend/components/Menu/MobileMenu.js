import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import Link from "../../src/Link";

export default function MobileMenu({ items }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const useStyles = makeStyles((theme) => ({
    menuButton: {
      fontFamily: "Roboto",
      fontSize: "12px",
      fontWeight: "700",
      display: "block",
      textAlign: "center",
    },

    menuI: {
      width: "100%",
      fontFamily: "Roboto",
      fontSize: "12px",
      fontWeight: "700",
      height: "100%",
    },
  }));
  const classes = useStyles();
  return (
    <div>
      <Button
        className={classes.menuI}
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MenuIcon />
      </Button>
      <Menu
        id="simple-menu"
        style={{ textAlign: "-webkit-center" }}
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {items.map((item, index) => (
          <Link href={item.url} key={index}>
            <Button className={classes.menuButton}>{item.label}</Button>
          </Link>
        ))}
      </Menu>
    </div>
  );
}
