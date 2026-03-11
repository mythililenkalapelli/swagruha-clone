import React from "react";
import {
  Box, Typography, IconButton, Button,
  Select, MenuItem, InputBase, Paper
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchIcon from "@mui/icons-material/Search";
import EmailIcon from "@mui/icons-material/Email";

function Navbar() {
  return (
    <Box sx={{ width: "100%", backgroundColor: "#fdf4e9" }}>

      {/* ── Top contact bar ── */}
      <Box
        sx={{
          backgroundImage: "url('https://swagruhafoods.net/assets/top-header-graphic-o7lzvBUU.svg')",
          backgroundRepeat: "repeat-x",
          backgroundSize: "auto",
          backgroundPosition: "bottom",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            px: { xs: 2, md: 8, lg: 15 },
            py: 1.5,
            pb: 4,
          }}
        >
          <Box display="flex" alignItems="center" gap={0.8}>
            <EmailIcon sx={{ fontSize: { xs: 14, md: 20 } }} />
            <Typography
              sx={{
                fontSize: { xs: 11, md: 14 },
                fontWeight: 500,
                textDecoration: "underline",
                textDecorationColor: "#888",
                cursor: "pointer",
                "&:hover": { textDecorationColor: "#000" },
              }}
            >
              swagruhafoodsestore@gmail.com
            </Typography>
          </Box>

          <Box display="flex" alignItems="center" gap={0.8}>
            <PhoneIcon sx={{ fontSize: { xs: 14, md: 20 } }} />
            <Typography
              sx={{
                fontSize: { xs: 11, md: 14 },
                textDecoration: "underline",
                textDecorationColor: "#888",
                cursor: "pointer",
                "&:hover": { textDecorationColor: "#000" },
              }}
            >
              +919949800000
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* ── Main navbar ── */}
      <Box sx={{ px: { xs: 2, md: 8, lg: 15 }, py: { xs: 1.5, md: 2.5 } }}>

        {/* Row 1: Logo + Search (desktop) + Actions */}
        <Box sx={{ display: "flex", alignItems: "center", gap: { xs: 1, md: 2 } }}>

          {/* Logo */}
          <Box
            component="img"
            src="https://swagruhafoods.net/assets/logo2-CjkyLQme.jpg"
            sx={{ width: { xs: 70, md: 115 }, borderRadius: "50%", flexShrink: 0 }}
          />

          {/* Search bar — desktop only */}
          <Paper
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              borderRadius: "30px",
              px: 2,
              py: 0.5,
              flex: 1,
              maxWidth: 600,
            }}
          >
            <Select defaultValue="Sweets" variant="standard" disableUnderline sx={{ mr: 2 }}>
              <MenuItem value="Sweets">Sweets</MenuItem>
              <MenuItem value="Snacks">Snacks</MenuItem>
              <MenuItem value="Pickles">Pickles</MenuItem>
            </Select>
            <InputBase placeholder="Search Products..." sx={{ flex: 1 }} />
            <IconButton><SearchIcon /></IconButton>
          </Paper>

          {/* Spacer — pushes actions right on mobile */}
          <Box sx={{ flex: 1, display: { md: "none" } }} />

          {/* Actions */}
          <Box display="flex" alignItems="center" gap={{ xs: 0.5, md: 1.5 }}>
            <Button
              variant="outlined"
              sx={{
                borderRadius: "30px",
                textTransform: "none",
                fontSize: { xs: 12, md: 14 },
                px: { xs: 1, md: 2 },
                minWidth: "auto",
              }}
            >
              🇮🇳
              <Box component="span" sx={{ display: { xs: "none", md: "inline" }, ml: 0.5 }}>
                India
              </Box>
            </Button>

            {/* Wishlist — desktop only */}
            <IconButton sx={{ display: { xs: "none", md: "flex" } }}>
              <FavoriteBorderIcon />
            </IconButton>

            <IconButton>
              <ShoppingCartOutlinedIcon />
            </IconButton>

            <Button
              variant="contained"
              sx={{
                background: "#c40000",
                borderRadius: "30px",
                px: { xs: 2, md: 3 },
                fontSize: { xs: 12, md: 14 },
                textTransform: "none",
                whiteSpace: "nowrap",
              }}
            >
              Sign In
            </Button>
          </Box>
        </Box>

        {/* Row 2: Search bar — mobile only */}
        <Paper
          sx={{
            display: { xs: "flex", md: "none" },
            alignItems: "center",
            borderRadius: "30px",
            px: 2,
            py: 0.5,
            mt: 1.5,
            width: "100%",
          }}
        >
          <Select defaultValue="Sweets" variant="standard" disableUnderline sx={{ mr: 1, fontSize: 13 }}>
            <MenuItem value="Sweets">Sweets</MenuItem>
            <MenuItem value="Snacks">Snacks</MenuItem>
            <MenuItem value="Pickles">Pickles</MenuItem>
          </Select>
          <InputBase placeholder="Search Products..." sx={{ flex: 1, fontSize: 13 }} />
          <IconButton size="small"><SearchIcon fontSize="small" /></IconButton>
        </Paper>

      </Box>
    </Box>
  );
}

export default Navbar;