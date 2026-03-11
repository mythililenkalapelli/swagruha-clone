import React from "react";
import { Box, Container, Typography } from "@mui/material";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import SpaIcon from "@mui/icons-material/Spa";
import PercentIcon from "@mui/icons-material/Percent";

const features = [
  {
    icon: <EmojiEventsIcon sx={{ fontSize: { xs: 22, md: 28 } }} />,
    title: "High Quality",
    desc: "Here we ensures high quality, using only premium ingredients for pure, rich taste.",
  },
  {
    icon: <SpaIcon sx={{ fontSize: { xs: 22, md: 28 } }} />,
    title: "Authentic Flavour",
    desc: "We offer authentic Telugu flavors, crafted with tradition and premium ingredients.",
  },
  {
    icon: <PercentIcon sx={{ fontSize: { xs: 22, md: 28 } }} />,
    title: "100% Hygienic",
    desc: "We prioritize hygiene, ensuring every item is made with care and safety.",
  },
];

export default function Features() {
  return (
    <Box sx={{ position: "relative", width: "100%", py: { xs: 6, md: 15 }, overflow: "hidden" }}>

      {/* Muggu background */}
      <Box
        component="img"
        src="https://swagruhafoods.net/assets/full-chankra-B0KNGsnD.svg"
        sx={{
          position: "absolute",
          width: { xs: "350px", md: "650px" },
          top: { xs: "-150px", md: "-350px" },
          left: "50%",
          transform: "translateX(-50%)",
          opacity: 0.9,
        }}
      />

      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" }, // ← stack on mobile
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", md: "center" },
            gap: { xs: 4, md: 6 },
          }}
        >
          {features.map((f, i) => (
            <Box
              key={i}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                width: { xs: "100%", md: "auto" },
              }}
            >
              {/* Icon circle */}
              <Box
                sx={{
                  backgroundColor: "#f6b24a",
                  borderRadius: "50%",
                  width: { xs: 60, md: 80 },
                  height: { xs: 60, md: 80 },
                  minWidth: { xs: 60, md: 80 },
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                {f.icon}
              </Box>

              {/* Text */}
              <Box>
                <Typography fontWeight="bold" fontSize={{ xs: 16, md: 20 }}>
                  {f.title}
                </Typography>
                <Typography color="text.secondary" fontSize={{ xs: 13, md: 15 }}>
                  {f.desc}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}