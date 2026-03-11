import React from "react";
import { Box, Typography, Container, Divider } from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

const menuLinks = [
  "Privacy Policy",
  "Terms & Conditions",
  "Cancellations & Refund Policy",
  "Shipping & Delivery Policy",
  "Disclaimer Policy",
];

export default function Footer() {
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        pt: { xs: 6, md: 8 },
        pb: 0,
      }}
    >
<Box
    component="img"
    src="https://swagruhafoods.net/assets/full-chankra-B0KNGsnD.svg"
    sx={{
      position: "absolute",
      width: { xs: "400px", md: "700px" },
      bottom: { xs: "-200px", md: "-350px" },
      left: "50%",
      transform: "translateX(-50%)",
      opacity: 0.9,
      pointerEvents: "none",
      zIndex: 0,
    }}
  />

      <Container
        maxWidth="xl"
        sx={{ px: { xs: 3, sm: 4, md: 6, lg: 8 }, position: "relative", zIndex: 1 }}
      >
        {/* ── 3 column row ── */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 5, md: 4 },
            pb: { xs: 6, md: 8 },
          }}
        >

          {/* Col 1 — About Us */}
          <Box sx={{ flex: 1.2 }}>
            <Typography
              sx={{
                fontFamily: "Georgia, serif",
                fontSize: { xs: "20px", md: "24px" },
                fontWeight: 700,
                color: "#1a1a1a",
                mb: 2,
              }}
            >
              About Us
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: 13, md: 14 },
                color: "#444",
                lineHeight: 1.85,
              }}
            >
              <Box component="span" sx={{ fontWeight: 700, color: "#111" }}>
                SWAGRUHA FOODS
              </Box>
              {" – pioneers of Home Foods. In AP & Telangana taste our sweets, savouries, pickles and karampodulu for an unforgettable experience. Crafted with 100% homemade goodness, using only the freshest, finest natural ingredients. Each treat is made as if for our own family, ensuring unparalleled quality. Our secret? The finest ingredients, delivering unparalleled taste. Trusted by our loyal customers, our success is fueled by our commitment to taste, hygiene, and customer happiness."}
            </Typography>
          </Box>

          {/* Col 2 — Menu */}
          <Box sx={{ flex: 0.8 }}>
            <Typography
              sx={{
                fontFamily: "Georgia, serif",
                fontSize: { xs: "20px", md: "24px" },
                fontWeight: 700,
                color: "#1a1a1a",
                mb: 2,
              }}
            >
              Menu
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
              {menuLinks.map((link) => (
                <Typography
                  key={link}
                  sx={{
                    fontSize: { xs: 13, md: 15 },
                    color: "#444",
                    cursor: "pointer",
                    "&:hover": { color: "#8b0000" },
                    transition: "color 0.2s",
                  }}
                >
                  {link}
                </Typography>
              ))}
            </Box>
          </Box>

          {/* Col 3 — Store Information */}
          <Box sx={{ flex: 1 }}>
            <Typography
              sx={{
                fontFamily: "Georgia, serif",
                fontSize: { xs: "20px", md: "24px" },
                fontWeight: 700,
                color: "#1a1a1a",
                mb: 2,
              }}
            >
              Store Information
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>

              {/* Address */}
              <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1.5 }}>
                <LocationOnOutlinedIcon sx={{ fontSize: 20, color: "#444", mt: 0.2, flexShrink: 0 }} />
                <Typography sx={{ fontSize: { xs: 13, md: 14 }, color: "#444", lineHeight: 1.7 }}>
                  D.No: 38-8-58, Opposite PWD grounds, M.G.Road,
                  Vijayawada-520010, Andhra Pradesh
                </Typography>
              </Box>

              {/* Email */}
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                <EmailOutlinedIcon sx={{ fontSize: 20, color: "#444", flexShrink: 0 }} />
                <Typography
                  sx={{
                    fontSize: { xs: 13, md: 14 },
                    color: "#444",
                    cursor: "pointer",
                    "&:hover": { color: "#8b0000" },
                  }}
                >
                  swagruhafoodsestore@gmail.com
                </Typography>
              </Box>

              {/* Phone */}
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                <LocalPhoneOutlinedIcon sx={{ fontSize: 20, color: "#444", flexShrink: 0 }} />
                <Typography
                  sx={{
                    fontSize: { xs: 13, md: 14 },
                    color: "#444",
                    cursor: "pointer",
                    "&:hover": { color: "#8b0000" },
                  }}
                >
                  +91 9949845000
                </Typography>
              </Box>

            </Box>
          </Box>

        </Box>

        {/* ── Bottom bar ── */}
        <Divider sx={{ borderColor: "#ddd" }} />

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            py: { xs: 2.5, md: 3 },
            flexDirection: { xs: "column", sm: "row" },
            gap: { xs: 2, sm: 0 },
          }}
        >
          {/* Copyright */}
          <Typography sx={{ fontSize: { xs: 12, md: 14 }, color: "#666" }}>
            2024 swagruhafoods. All Rights Reserved
          </Typography>

          {/* Social icons */}
          <Box display="flex" alignItems="center" gap={1.5}>
            {[FacebookIcon, InstagramIcon, LinkedInIcon, TwitterIcon].map((Icon, i) => (
              <Icon
                key={i}
                sx={{
                  fontSize: { xs: 20, md: 22 },
                  color: "#444",
                  cursor: "pointer",
                  "&:hover": { color: "#8b0000" },
                  transition: "color 0.2s",
                }}
              />
            ))}
          </Box>
        </Box>

      </Container>
    </Box>
  );
}