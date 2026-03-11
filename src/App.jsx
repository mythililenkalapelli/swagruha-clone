import Categories from "./components/Categories";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Features from "./components/Features";
import { Box } from "@mui/material";
import BestSellers from "./components/Best-sellers";
import Articles from "./components/Articles";
import Footer from "./components/Footer";

function App() {
  return (
    <Box sx={{ backgroundColor: "#fdf4e9", width: "100%" }}>
      <Navbar />
      <Hero />
      <Features/>
      <Categories />
      <BestSellers /> 
      <Articles /> 
      <Footer /> 
    </Box>
  );
}

export default App;