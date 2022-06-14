import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";

import Logo from "../assets/images/Logo-1.png";

const Navbar = () => (
  <Stack
    direction="row"
    justifyContent="space-around"
    sx={{
      gap: { sm: "12px", xs: "40px" },
      mt: { sm: "0px", xs: "20px" },
      justifyContent: "start",
      alignItems: "center",
    }}
    px="2px"
  >
    <Link to="/">
      <img
        src={Logo}
        alt="logo"
        style={{ width: "150px", height: "150px", margin: "0px" }}
      />
    </Link>
    <Stack
      direction="row"
      gap="30px"
      fontFamily="Alegreya"
      fontSize="23px"
      alignItems="flex-start"
    >
      <Link
        to="/"
        style={{
          textDecoration: "none",
          color: "#3A1212",
          borderBottom: "3px solid #FF2625",
        }}
      >
        Home
      </Link>
      <a href="#exercises" style={{ textDecoration: "none", color: "#3A1212" }}>
        Exercises
      </a>
    </Stack>
  </Stack>
);

export default Navbar;
