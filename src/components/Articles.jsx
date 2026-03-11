import React, { useState } from "react";
import { Box, Typography, Container, IconButton } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import laddu from "../assets/kaju-katli.jpg";
import kalakand from "../assets/mango-pickle.jpg";
import halwa from "../assets/murukku.jpg";

const articles = [
  {
    img: laddu,
    source: "Rediff News",
    title: "A 'homemade' success story",
    desc: "The launch of the Swagruha Foods outlet in Vijayawada in 1991 saw the advent of a new...",
  },
  {
    img: kalakand,
    source: "Youtube News",
    title: "Vijayawada Food Tour (Swagruha Foods)",
    desc: "Want to know more, deep dive into the journey of this food business.",
  },
  {
    img: halwa,
    source: "hmtv News Live",
    title: "Chagarlamudi Vijayalakshmi Interview",
    desc: "Watch 'AAME' an exclusive interview with Chagarlamudi Vijayalakshmi the founder of...",
  },
  {
    img: laddu,
    source: "Youtube News",
    title: "Swagruha Foods Ad Film Telugu",
    desc: "Want to know more, deep dive into the journey of this food business.",
  },
  {
    img: kalakand,
    source: "TIMES OF INDIA",
    title: "Foods That Remaind One Of Home",
    desc: "Its better to spend a rupee more on a quality food product than spend lakh in the hospitals. I could...",
  },
  {
    img: halwa,
    source: "isb",
    title: "Invited to isb to give a lecture on the success of swagruha foods",
    desc: "",
  },
];

export default function Articles() {
  const [index, setIndex] = useState(0);

  const handlePrev = () => setIndex((i) => Math.max(0, i - 1));
  const handleNext = () => setIndex((i) => Math.min(articles.length - 1, i + 1));

  return (
    <Box sx={{ backgroundColor: "#fdf4e9", py: { xs: 5, md: 8 }, overflow: "hidden" }}>
      <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 4, md: 6, lg: 8 } }}>

        {/* Header */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb: { xs: 3, md: 4 },
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "28px", md: "42px" },
              fontWeight: 700,
              fontFamily: "Georgia, serif",
              color: "#1a1a1a",
            }}
          >
            Articles
          </Typography>

          <Box display="flex" gap={1}>
            <IconButton
              onClick={handlePrev}
              disabled={index === 0}
              sx={{
                width: { xs: 36, md: 44 },
                height: { xs: 36, md: 44 },
                border: "2px solid",
                borderColor: index === 0 ? "#ccc" : "#8b0000",
                color: index === 0 ? "#ccc" : "#8b0000",
              }}
            >
              <ArrowBackIosNewIcon sx={{ fontSize: 14 }} />
            </IconButton>

            <IconButton
              onClick={handleNext}
              disabled={index >= articles.length - 1}
              sx={{
                width: { xs: 36, md: 44 },
                height: { xs: 36, md: 44 },
                background: "#8b0000",
                color: "#fff",
                "&:hover": { background: "#6e0000" },
                "&.Mui-disabled": { background: "transparent", border: "2px solid #ccc", color: "#ccc" },
              }}
            >
              <ArrowForwardIosIcon sx={{ fontSize: 14 }} />
            </IconButton>
          </Box>
        </Box>

        {/* Slider wrapper */}
        <Box sx={{ overflow: "hidden" }}>
          <Box
            sx={{
              display: "flex",
              gap: { xs: 2, md: "2%" },
              transition: "transform 0.4s ease",
              // ← move exactly one card width at a time
              transform: {
                xs: `translateX(calc(-${index * 100}% - ${index * 16}px))`,
                sm: `translateX(calc(-${index * 50}% - ${index * 16}px))`,
                md: `translateX(calc(-${index * 34}% - ${index * 8}px))`,
              },
            }}
          >
            {articles.map((item, i) => (
              <Box
                key={i}
                sx={{
                  // ← all cards same fixed width — this is the fix
                  minWidth: {
                    xs: "100%",
                    sm: "calc(50% - 8px)",
                    md: "32%",   // exactly 3 per row, equal size
                  },
                  maxWidth: {
                    xs: "100%",
                    sm: "calc(50% - 8px)",
                    md: "32%",
                  },
                  flexShrink: 0,
                  cursor: "pointer",
                }}
              >
                {/* Image */}
                <Box
                  sx={{
                    width: "100%",
                    paddingTop: "62%",
                    position: "relative",
                    borderRadius: { xs: "10px", md: "12px" },
                    overflow: "hidden",
                    mb: { xs: 1.5, md: 2 },
                  }}
                >
                  <Box
                    component="img"
                    src={item.img}
                    sx={{
                      position: "absolute",
                      top: 0, left: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.3s ease",
                      "&:hover": { transform: "scale(1.04)" },
                    }}
                  />
                </Box>

                {/* Source */}
                <Typography sx={{ fontSize: { xs: 12, md: 13 }, color: "#888", mb: 0.5 }}>
                  {item.source}
                </Typography>

                {/* Title */}
                <Typography
                  sx={{
                    fontWeight: 700,
                    fontSize: { xs: 15, md: 17 },
                    color: "#111",
                    mb: 0.8,
                    lineHeight: 1.3,
                  }}
                >
                  {item.title}
                </Typography>

                {/* Desc */}
                {item.desc && (
                  <Typography
                    sx={{
                      fontSize: { xs: 13, md: 14 },
                      color: "#555",
                      mb: 1.2,
                      lineHeight: 1.6,
                    }}
                  >
                    {item.desc}
                  </Typography>
                )}

                {/* See More */}
                <Typography
                  sx={{
                    fontSize: { xs: 13, md: 14 },
                    color: "#8b0000",
                    fontWeight: 500,
                    "&:hover": { textDecoration: "underline" },
                  }}
                >
                  See More...
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

      </Container>
    </Box>
  );
}