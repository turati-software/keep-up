import React from "react";
import Link from "next/link";
import { Button, Grid } from "@material-ui/core";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";

const menuItems = [
  {
    label: "Home",
    url: "/home",
  },
  {
    label: "About us",
    url: "/about-us",
  },
  {
    label: "What we do",
    url: "/what-we-do",
  },
  {
    label: "Why donate",
    url: "/why-donate",
  },
  {
    label: "Media Pack",
    url: "/media-pack",
  },
  {
    label: "Partners",
    url: "/partners",
  },
  {
    label: "Events",
    url: "/events",
  },
  {
    label: "Contact us",
    url: "/contact-us",
  },
];

export default function index() {
  return (
    <>
      <DesktopMenu items={menuItems} />
      <div className="menuMobile">
        <Grid container className={"menuGrid"}>
          <Grid item xs={2}>
            <MobileMenu items={menuItems} />
          </Grid>
        </Grid>
      </div>
    </>
  );
}
