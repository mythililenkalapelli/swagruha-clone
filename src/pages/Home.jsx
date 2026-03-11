import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Categories from "../components/Categories";

import { Box } from "@mui/material";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />

      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          pt: 8
        }}
      >
        {/* Muggu background */}
        <Box
          component="img"
          src="https://swagruhafoods.net/assets/full-chankra-B0KNGsnD.svg"
          sx={{
            position: "absolute",
            top: "-350px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "700px",
            opacity: 0.15
          }}
        />

        <Features />
        <Categories />
      </Box>
    </>
  );
}

export default Home;