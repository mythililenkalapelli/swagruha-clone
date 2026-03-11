import React, { useState } from "react";
import {
  Box, Container, Typography,
  Tabs, Tab, Button, Select, MenuItem, IconButton, Grid
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

import laddu from "../assets/kaju-katli.jpg";
import kalakand from "../assets/mango-pickle.jpg";
import halwa from "../assets/murukku.jpg";

const products = [
  { name: "Basin laddu",     price: "₹400",  img: laddu,    category: "Sweets",    shelf: "10 Days" },
  { name: "Ajmeer Kalakand", price: "₹425",  img: kalakand, category: "Sweets",    shelf: "7 Days"  },
  { name: "Red Halwa",       price: "₹400",  img: halwa,    category: "Sweets",    shelf: "10 Days" },
  { name: "Papadi",          price: "₹400",  img: laddu,    category: "Sweets",    shelf: "21 Days" },
  { name: "Mysore Pak",      price: "₹420",  img: kalakand, category: "Sweets",    shelf: "10 Days" },
  { name: "Dry Fruit Laddu", price: "₹480",  img: laddu,    category: "Sweets",    shelf: "15 Days" },
  { name: "Milk Cake",       price: "₹390",  img: halwa,    category: "Sweets",    shelf: "7 Days"  },
  { name: "Badusha",         price: "₹410",  img: laddu,    category: "Sweets",    shelf: "10 Days" },
  { name: "Murukulu",        price: "₹300",  img: halwa,    category: "Savouries", shelf: "21 Days" },
  { name: "Cashew Pakodi",   price: "₹688",  img: kalakand, category: "Savouries", shelf: "21 Days" },
  { name: "Cashew Hot",      price: "₹1000", img: halwa,    category: "Savouries", shelf: "21 Days" },
  { name: "Cashew Masala",   price: "₹875",  img: laddu,    category: "Savouries", shelf: "21 Days" },
  { name: "Pootharekulu",    price: "₹500",  img: halwa,    category: "Pickles",   shelf: "30 Days" },
  { name: "Rava Laddu",      price: "₹370",  img: laddu,    category: "Pickles",   shelf: "15 Days" },
  { name: "Boondi Laddu",    price: "₹400",  img: kalakand, category: "Powders",   shelf: "30 Days" },
  { name: "Chikki",          price: "₹350",  img: halwa,    category: "Powders",   shelf: "45 Days" },
];

const tabs = ["All", "Sweets", "Savouries", "Powders", "Pickles"];

export default function Categories() {
  const [tab, setTab] = useState(0);
  const [visible, setVisible] = useState(8);

  const filtered =
    tab === 0 ? products : products.filter((p) => p.category === tabs[tab]);

  return (
    <Box sx={{ mt: { xs: 2, md: 2 }, position: "relative", overflow: "hidden", pb: 8 }}>

      {/* Muggu watermark */}
      <Box
        component="img"
        src="https://swagruhafoods.net/assets/full-chankra-B0KNGsnD.svg"
        sx={{
          position: "absolute",
          width: { xs: "280px", md: "480px" },
          top: "-20px",
          right: { xs: "-40px", md: "80px" },
          opacity: 0.1,
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <Container maxWidth="xl" sx={{ px: { xs: 4, sm: 8, md: 14, lg: 16 }, position: "relative", zIndex: 1 }}>

        {/* Title */}
        <Typography
          sx={{
            fontSize: { xs: "30px", md: "42px" },
            fontWeight: 700,
            fontFamily: "Georgia, serif",
            mb: { xs: 2, md: 2 },
            color: "#1a1a1a",
          }}
        >
          Categories
        </Typography>

        {/* Tabs */}
        <Tabs
          value={tab}
          onChange={(e, v) => { setTab(v); setVisible(8); }}
          textColor="inherit"
          variant="scrollable"
          scrollButtons="auto"
          TabIndicatorProps={{
            style: { backgroundColor: "#b30000", height: "3px" },
          }}
          sx={{
            minHeight: "44px",
            "& .MuiTab-root": {
              fontSize: { xs: 14, md: 17 },
              textTransform: "none",
              fontWeight: 500,
              color: "#444",
              minWidth: "auto",
              px: { xs: 2.5, md: 4 },
              minHeight: "44px",
            },
            "& .Mui-selected": {
              color: "#b30000 !important",
              fontWeight: 600,
            },
          }}
        >
          {tabs.map((t) => <Tab key={t} label={t} />)}
        </Tabs>

        {/* Dashed divider */}
        <Box sx={{ borderBottom: "1.5px dashed #bbb", mb: { xs: 4, md: 6 } }} />

        {/* Grid */}
        <Grid container spacing={{ xs: 3, sm: 3, md: 4 }}>
          {filtered.slice(0, visible).map((item, index) => (
            <Grid
              size={{ xs: 12, sm: 6, md: 3 }}  // ← 1 col mobile, 2 tablet, 4 desktop
              key={index}
            >
              <Box>

                {/* Image wrapper — this controls the size */}
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    // paddingTop controls height as % of width (like aspect ratio)
                    // 75% = 4:3 ratio (matches the website's card proportions)
                    paddingTop: { xs: "65%", sm: "70%", md: "75%" },
                    borderRadius: { xs: "10px", md: "12px" },
                    overflow: "hidden",
                  }}
                >
                  <Box
                    component="img"
                    src={item.img}
                    sx={{
                      // Fill the padded parent completely — matches the CSS you shared
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />

                  {/* Heart button */}
                  <IconButton
                    sx={{
                      position: "absolute",
                      top: { xs: 10, md: 14 },
                      right: { xs: 10, md: 14 },
                      backgroundColor: "rgba(255,255,255,0.92)",
                      width: { xs: 36, md: 42 },
                      height: { xs: 36, md: 42 },
                      boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
                      "&:hover": { backgroundColor: "#fff" },
                      zIndex: 1,
                    }}
                  >
                    <FavoriteBorderIcon sx={{ fontSize: { xs: 17, md: 20 }, color: "#666" }} />
                  </IconButton>
                </Box>

                {/* Category */}
                <Typography
                  sx={{
                    mt: { xs: 1.5, md: 2 },
                    fontSize: { xs: 13, md: 14 },
                    color: "#888",
                  }}
                >
                  {item.category}
                </Typography>

                {/* Name */}
                <Typography
                  sx={{
                    fontWeight: 700,
                    fontSize: { xs: 15, md: 17 },
                    color: "#111",
                    mt: 0.3,
                  }}
                >
                  {item.name}
                </Typography>

                {/* Price */}
                <Typography
                  sx={{
                    fontWeight: 700,
                    fontSize: { xs: 17, md: 21 },
                    color: "#111",
                    mt: { xs: 0.5, md: 0.6 },
                    mb: { xs: 1.2, md: 1.5 },
                  }}
                >
                  {item.price}
                </Typography>

                {/* Select + Button */}
                <Box sx={{ display: "flex", alignItems: "center", gap: { xs: 1, md: 1.2 } }}>
                  <Select
                    size="small"
                    defaultValue="500"
                    sx={{
                      borderRadius: "22px",
                      background: "#fff",
                      fontSize: { xs: 13, md: 13 },
                      height: { xs: 40, md: 42 },
                      minWidth: { xs: 110, md: 110 },
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
                        sx={{ fontSize: { xs: "16px !important", md: "17px !important" } }}
                      />
                    }
                    sx={{
                      background: "#8b0000",
                      color: "#fff",
                      borderRadius: "22px",
                      textTransform: "none",
                      fontSize: { xs: 13, md: 13 },
                      height: { xs: 40, md: 42 },
                      px: { xs: 2, md: 2 },
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
                    fontSize: { xs: 12, md: 13 },
                    color: "#888",
                    mt: { xs: 1, md: 1.2 },
                    textAlign: "center",
                  }}
                >
                  Shelf Life: {item.shelf}
                </Typography>

              </Box>
            </Grid>
          ))}
        </Grid>

        {/* View More */}
        {visible < filtered.length && (
          <Box sx={{ display: "flex", justifyContent: "center", mt: { xs: 5, md: 7 } }}>
            <Button
              onClick={() => setVisible((v) => v + 8)}
              sx={{
                border: "1.5px solid #8b0000",
                color: "#8b0000",
                borderRadius: "25px",
                px: { xs: 5, md: 7 },
                py: { xs: 1, md: 1.2 },
                textTransform: "none",
                fontSize: { xs: 13, md: 15 },
                fontWeight: 500,
                "&:hover": { background: "#8b000010" },
              }}
            >
              View More
            </Button>
          </Box>
        )}

      </Container>
    </Box>
  );
}