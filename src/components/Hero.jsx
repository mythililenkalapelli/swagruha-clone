import React from "react";
import { Box, Typography, Container } from "@mui/material";

function Hero() {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        minHeight: { xs: "auto", md: "380px" },
        maxHeight: { xs: "none", md: "500px" },
        py: { xs: 5, md: 3 },
        zIndex: 1,
        background:
          "radial-gradient(50% 50%, rgb(204, 69, 75) 0%, rgb(146, 0, 6) 100%)",
        overflow: "hidden",
      }}
    >

      {/* Chakra Design Pattern */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "url('https://swagruhafoods.net/assets/banner-chakra-design-BvUTeiSd.svg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          opacity: 0.9,
          zIndex: 1,
        }}
      />

      {/* Traditional Border */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          width: "100%",
          height: 26,
          backgroundImage:
            "url('https://swagruhafoods.net/assets/traditional-border-CXbxP6St.svg')",
          backgroundRepeat: "repeat-x",
          backgroundSize: "contain",
          zIndex: 2,
        }}
      />

      {/* Golden Curve — hidden on mobile, visible on desktop */}
      <Box
        component="img"
        src="https://swagruhafoods.net/assets/promotional-curve_2-CSQvq134.png"
        sx={{
          display: { xs: "none", md: "block" },
          position: "absolute",
          right: 0,
          top: 0,
          height: "100%",
          zIndex: 2,
        }}
      />

      {/* Content */}
      <Container
        maxWidth="xl"
        sx={{
          position: "relative",
          zIndex: 3,
          px: { xs: 3, md: 6, lg: 12 },
        }}
      >

        {/* 35th */}
        <Typography
          fontFamily="Vangeda"
          sx={{
            fontSize: { xs: 72, sm: 88, md: 100 },
            fontWeight: 700,
            lineHeight: 1,
            background:
              "linear-gradient(287.88deg, rgb(255,255,230) 7.78%, rgb(237,199,79) 18.25%, rgb(237,200,83) 25.04%, rgb(238,205,95) 32.15%, rgb(241,212,115) 38.21%, rgb(244,223,143) 41.96%, rgb(249,237,180) 48.24%, rgb(254,253,224) 55.54%, rgb(255,255,227) 64.18%, rgb(255,240,135) 75.79%, rgb(230,163,64) 91.33%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          35<sup style={{ fontSize: "50%" }}>th</sup>
        </Typography>

        {/* Anniversary Celebrations */}
        <Typography
          fontFamily="Vangeda"
          sx={{
            fontSize: { xs: 28, sm: 36, md: 48 },
            fontWeight: 600,
            color: "#ffd56a",
            mb: { xs: 2, md: 3 },
            lineHeight: 1.2,
          }}
        >
          Anniversary Celebrations
        </Typography>

        {/* Description */}
        <Typography
          sx={{
            fontSize: { xs: 14, sm: 16, md: 18 },
            color: "#fff",
            lineHeight: 1.8,
            maxWidth: { xs: "100%", md: 550 },
          }}
        >
          Swagruha® Foods proudly serving across India and around the globe
          since 35 successful years, is built on the love and trust of our
          cherished customers. For those who miss the authentic taste of home,
          we deliver the most genuine homemade flavors that bring comfort and
          nostalgia with every bite. Every item we make carries a taste of
          tradition and the warmth of family. Join us in celebrating this
          special milestone.
        </Typography>

      </Container>
    </Box>
  );
}

export default Hero;