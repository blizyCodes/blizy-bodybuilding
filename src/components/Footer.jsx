import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assets/images/Logo-1.png";

const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4">
    <Stack
      gap="40px"
      sx={{ alignItems: "center" }}
      flexWrap="wrap"
      px="40px"
      pt="24px"
    >
      <img src={Logo} alt="logo" style={{ width: "300px", height: "300px" }} />
    </Stack>
    <Typography
      variant="h5"
      sx={{ fontSize: { lg: "28px", xs: "20px" } }}
      mt="0px"
      textAlign="center"
      pb="40px"
    >
      Made with ❤️ by{" "}
      <a href="https://github.com/donblizy" style={{ color: "green" }}>
        DonBlizy
      </a>
    </Typography>
  </Box>
);

export default Footer;
