import React, { useState } from "react";
import {
  Box, Typography, IconButton, Button,
  Select, MenuItem, Container
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import laddu from "../assets/kaju-katli.jpg";
import kalakand from "../assets/mango-pickle.jpg";
import halwa from "../assets/murukku.jpg";

const products = [
  { name: "Ariselu",                 price: "₹425",  category: "Sweets",  shelf: "10 Days", img: laddu    },
  { name: "Mango/Avakaya Pickle",    price: "₹350",  category: "Pickles", shelf: "90 Days", img: kalakand },
  { name: "Gongura Pickle",          price: "₹275",  category: "Pickles", shelf: "90 Days", img: halwa    },
  { name: "Chicken Boneless Pickle", price: "₹1000", category: "Pickles", shelf: "90 Days", img: laddu    },
  { name: "Sugar Putarekulu",        price: "₹375",  category: "Sweets",  shelf: "10 Days", img: kalakand },
  { name: "Prawns Pickle",           price: "₹1125", category: "Pickles", shelf: "90 Days", img: halwa    },
  { name: "KajjiKayalu",             price: "₹375",  category: "Sweets",  shelf: "7 Days",  img: laddu    },
  { name: "Cashew Pakam",            price: "₹813",  category: "Sweets",  shelf: "10 Days", img: kalakand },
];

export default function BestSellers() {
  const [index, setIndex] = useState(0);

  const handlePrev = () => setIndex((i) => Math.max(0, i - 1));
  const handleNext = () => setIndex((i) => Math.min(products.length - 1, i + 1));

  return (
    <Box sx={{ position: "relative", width: "100%" }}>

      {/* ── Main yellow section ── */}
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          background: "radial-gradient(50% 50%, rgb(255, 243, 223) 0%, rgb(250, 180, 70) 100%)",
        }}
      >

        {/* ── TOP border — inside yellow ── */}
        <Box
          sx={{
            width: "100%",
            height: { xs: "20px", md: "25px" },
            backgroundImage: "url('https://swagruhafoods.net/assets/traditional-border-yellow-BDjK4EAU.svg')",
            backgroundRepeat: "repeat-x",
            backgroundSize: "auto 100%",
            backgroundPosition: "center",
          }}
        />

        {/* ── Mandala watermark — top center ── */}
        <Box
          component="img"
          src="https://swagruhafoods.net/assets/light-yellow-chakra-CO98FTX6.svg"
          sx={{
            position: "absolute",
            width: { xs: "300px", md: "560px" },
            top: { xs: "-40px", md: "-80px" },
            left: "50%",
            transform: "translateX(-50%)",
            opacity: 1,
            pointerEvents: "none",
            zIndex: 0,
          }}
        />

        {/* ── Content ── */}
        <Container
          maxWidth="xl"
          sx={{
            px: { xs: 2, sm: 4, md: 6, lg: 8 },
            py: { xs: "30px", md: "45px" },
            position: "relative",
            zIndex: 1,
          }}
        >

          {/* Header row */}
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-between",
              mb: { xs: 3, md: 4 },
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontSize: { xs: "26px", md: "38px" },
                  fontWeight: 700,
                  fontFamily: "Georgia, serif",
                  color: "#1a1a1a",
                  lineHeight: 1.2,
                }}
              >
                Best Seller
              </Typography>
              <Typography sx={{ fontSize: { xs: 13, md: 15 }, color: "#333", mt: 0.5 }}>
                Elevate your day with a wide range of our top-rated delicacies.
              </Typography>
            </Box>

            {/* Arrows */}
            <Box display="flex" gap={1} alignItems="center">
              <IconButton
                onClick={handlePrev}
                disabled={index === 0}
                sx={{
                  width: { xs: 36, md: 44 },
                  height: { xs: 36, md: 44 },
                  border: "2px solid",
                  borderColor: index === 0 ? "#ccc" : "#8b0000",
                  color: index === 0 ? "#ccc" : "#8b0000",
                  "&:hover": { background: "#8b000015" },
                }}
              >
                <ArrowBackIosNewIcon sx={{ fontSize: { xs: 14, md: 16 } }} />
              </IconButton>

              <IconButton
                onClick={handleNext}
                disabled={index >= products.length - 1}
                sx={{
                  width: { xs: 36, md: 44 },
                  height: { xs: 36, md: 44 },
                  background: "#8b0000",
                  color: "#fff",
                  "&:hover": { background: "#6e0000" },
                  "&.Mui-disabled": { background: "#ccc", color: "#fff" },
                }}
              >
                <ArrowForwardIosIcon sx={{ fontSize: { xs: 14, md: 16 } }} />
              </IconButton>
            </Box>
          </Box>

          {/* Slider */}
          <Box sx={{ overflow: "hidden" }}>
            <Box
              sx={{
                display: "flex",
                gap: { xs: 2, md: 3 },
                transition: "transform 0.4s ease",
                transform: {
                  xs: `translateX(calc(-${index * 100}% - ${index * 16}px))`,
                  sm: `translateX(calc(-${index * 50}% - ${index * 16}px))`,
                  md: `translateX(calc(-${index * 25}% - ${index * 24}px))`,
                },
              }}
            >
              {products.map((item, i) => (
                <Box
                  key={i}
                  sx={{
                    minWidth: {
                      xs: "100%",
                      sm: "calc(50% - 8px)",
                      md: "calc(25% - 18px)",
                    },
                    flexShrink: 0,
                    backgroundColor: "#fff",
                    borderRadius: "16px",
                    p: { xs: 1.5, md: 2 },
                    boxSizing: "border-box",
                  }}
                >
                  {/* Image */}
                  <Box
                    sx={{
                      position: "relative",
                      width: "100%",
                      paddingTop: "75%",
                      borderRadius: "12px",
                      overflow: "hidden",
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
                      }}
                    />
                    <IconButton
                      sx={{
                        position: "absolute",
                        top: 10, right: 10,
                        backgroundColor: "rgba(255,255,255,0.85)",
                        width: { xs: 34, md: 40 },
                        height: { xs: 34, md: 40 },
                        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                        "&:hover": { backgroundColor: "#fff" },
                      }}
                    >
                      <FavoriteBorderIcon sx={{ fontSize: { xs: 16, md: 19 }, color: "#666" }} />
                    </IconButton>
                  </Box>

                  {/* Category */}
                  <Typography sx={{ mt: 1.5, fontSize: { xs: 12, md: 14 }, color: "#888" }}>
                    {item.category}
                  </Typography>

                  {/* Name */}
                  <Typography sx={{ fontWeight: 700, fontSize: { xs: 14, md: 17 }, color: "#111", mt: 0.3 }}>
                    {item.name}
                  </Typography>

                  {/* Price */}
                  <Typography
                    sx={{
                      fontWeight: 700,
                      fontSize: { xs: 16, md: 20 },
                      color: "#111",
                      mt: 0.5,
                      mb: 1.2,
                    }}
                  >
                    {item.price}
                  </Typography>

                  {/* Select + Button */}
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Select
                      size="small"
                      defaultValue="500"
                      sx={{
                        borderRadius: "22px",
                        background: "#fff",
                        fontSize: { xs: 12, md: 13 },
                        height: { xs: 38, md: 42 },
                        minWidth: { xs: 100, md: 110 },
                        flexShrink: 0,
                        "& .MuiOutlinedInput-notchedOutline": {
                          borderColor: "#ccc",
                          borderRadius: "22px",
                        },
                      }}
                    >
                      <MenuItem value="250">250 gms</MenuItem>
                      <MenuItem value="500">500 gms</MenuItem>
                    </Select>

                    <Button
                      startIcon={
                        <ShoppingCartOutlinedIcon
                          sx={{ fontSize: { xs: "14px !important", md: "17px !important" } }}
                        />
                      }
                      sx={{
                        background: "#8b0000",
                        color: "#fff",
                        borderRadius: "22px",
                        textTransform: "none",
                        fontSize: { xs: 11, md: 13 },
                        height: { xs: 38, md: 42 },
                        px: { xs: 1.5, md: 2 },
                        flex: 1,
                        whiteSpace: "nowrap",
                        fontWeight: 600,
                        "&:hover": { background: "#6e0000" },
                      }}
                    >
                      Add to Cart
                    </Button>
                  </Box>

                  {/* Shelf Life */}
                  <Typography
                    sx={{
                      fontSize: { xs: 11, md: 13 },
                      color: "#888",
                      mt: 1,
                      textAlign: "center",
                    }}
                  >
                    Shelf Life: {item.shelf}
                  </Typography>

                </Box>
              ))}
            </Box>
          </Box>

        </Container>

        {/* ── BOTTOM border — inside yellow ── */}
        <Box
          sx={{
            width: "100%",
            height: { xs: "20px", md: "25px" },
            backgroundImage: "url('https://swagruhafoods.net/assets/traditional-border-yellow-alt-DMDSTm15.svg')",
            backgroundRepeat: "repeat-x",
            backgroundSize: "auto 100%",
            backgroundPosition: "center",
          }}
        />

      </Box>
      {/* ── end yellow section ── */}

    </Box>
  );
}
