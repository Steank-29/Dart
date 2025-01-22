import React, { useRef, useState, useEffect } from "react";
import { Box, Typography, Grid } from "@mui/material";
import { motion, useInView } from "framer-motion";
import InfiniteLooper from "./InfiniteLooper";

// Background Images
import HomeBG1 from "./assets/HomeBG1.jpg";
import HomeBG2 from "./assets/HomeBG2.jpg";

// Image Imports
import Image1 from "./assets/Image1.jpeg";
import Image2 from "./assets/Image2.jpeg";
import Image3 from "./assets/Image3.jpeg";
import Image4 from "./assets/Image4.jpeg";
import Image5 from "./assets/Image5.jpeg";
import Image6 from "./assets/Image6.jpeg";
import Image7 from "./assets/Image7.jpeg";
import Image8 from "./assets/Image8.jpeg";
import Image9 from "./assets/Image9.jpeg";
import Image10 from "./assets/Image10.jpeg";
import Image11 from "./assets/Image11.jpeg";

import cat from "./assets/cat.png";
import ship from "./assets/ship.png";
import dragon from "./assets/dragon.png";
import hills from "./assets/hills.png";
import book from "./assets/book.png";
import turtol from "./assets/tortul.png";
import snow from "./assets/snow.png";
import tower from "./assets/tower.png";
import notebook from "./assets/notebook.png";
import sea from "./assets/sea.png";
import mix from "./assets/mix.png";
import tea from "./assets/tea.png";
import coffee from "./assets/coffee.png";
import sleepy from "./assets/sleepy.png";
import ocean from "./assets/ocean.png";
import girl from "./assets/girl.png";

const MotionTypography = motion(Typography);


const images = {
  img1: "https://via.placeholder.com/150",
  img2: "https://via.placeholder.com/150",
  img3: "https://via.placeholder.com/150",
  img4: "https://via.placeholder.com/150",
  img5: "https://via.placeholder.com/150",
  img6: "https://via.placeholder.com/150",
  img7: "https://via.placeholder.com/150",
  img8: "https://via.placeholder.com/150",
};


function Home() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const text = "Pablo Picasso";

  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFlipped((prev) => !prev);
    }, 2500);
    return () => clearInterval(interval);
  }, []);


  const [flippedS, setFlippedS] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFlippedS((prev) => !prev);
    }, 3500);
    return () => clearInterval(interval);
  }, []);



  const [flippedS1, setFlippedS1] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFlippedS1((prev) => !prev);
    }, 3800);
    return () => clearInterval(interval);
  }, []);



  const [flippedS2, setFlippedS2] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFlippedS2((prev) => !prev);
    }, 4000);
    return () => clearInterval(interval);
  }, []);



  const [flippedS3, setFlippedS3] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFlippedS3((prev) => !prev);
    }, 3200);
    return () => clearInterval(interval);
  }, []);








  return (
    <React.Fragment>
      {/* First Section with Background Images and Text Animation */}
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        bgcolor="white"
        flexDirection="column"
        height="90vh"
        sx={{
          position: "relative",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundImage: `url(${HomeBG1}), url(${HomeBG2})`,
          paddingX: { xs: 2, sm: 4, md: 6 }
        }}
      >
        {/* Overlay Container for Blended Background */}
        <Box
          sx={{
            position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${HomeBG1}), url(${HomeBG2})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          mixBlendMode: "multiply",
          }}
        />

        {/* Quote Animation */}
        <MotionTypography
          variant="h6"
          align="center"
          initial={{ y: -600, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          style={{textAlign: "center",  }}
          sx={{
            fontFamily: "monospace",
            fontWeight: "bold",
            letterSpacing: ".2rem",
            color: "#ffffff",
            zIndex: 2,
            fontSize: { xs: 25, sm: 20, md: 50 }, // Responsive font size
            textTransform: "uppercase",
            marginTop: { xs: 6, sm: 10, md: 12 }, // Responsive spacing
          }}
        >
          The purpose of art is washing the dust of daily life off our souls.
        </MotionTypography>

        {/* Author Name Animation */}
        <MotionTypography
      ref={ref}
      variant="body2"
      initial={{ rotateY: 90, opacity: 0 }}
      animate={isInView ? { rotateY: 0, opacity: 1 } : {}}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      style={{ zIndex: 2 }}
      sx={{
        marginTop: 1,
        color: "white",
        fontSize: { xs: 16, sm: 20, md: 23 },
        zIndex: 2,
        fontFamily: "monospace",
        textTransform: "capitalize",
      }}
    >
      {text.split("").map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: index * 0.1, duration: 0.5 }}
        >
          {letter}
        </motion.span>
      ))}
    </MotionTypography>
        <Box
  sx={{
    overflow: "hidden",
    width: "100%",
    background: "transparent",
    padding: "15px 0",
    position: "relative", // Ensures correct positioning
    zIndex: 10, // High value to bring it in front
  }}
>
  <InfiniteLooper speed={15} direction="left">
    {[Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8, Image9, Image10, Image11].map((image, index) => (
      <img
        key={index}
        src={image}
        alt={`Artwork ${index + 1}`}
        style={{
          width: "150px",
          height: "auto",
          margin: "0 10px",
          borderRadius: "10px",
          position: "relative", // Ensures images stay within their parent
          zIndex: 20, // Even higher to ensure visibility
        }}
      />
    ))}
  </InfiniteLooper>
</Box>

      </Box>
<Box sx={{ position: "relative", height: "30vh", marginTop: {xs: 3, sm: 4, md: 5}, marginBottom: {xs: 3, sm: 4, md: 5}, marginLeft: {xs: 3, sm: 4, md: 5}, marginRight: {xs: 3, sm: 4, md: 5}, }}>
<Typography 
      fontWeight="bold" 
      sx={{
        fontFamily: "monospace",
        textAlign: "justify",
        textTransform: "uppercase",
        fontSize: {xs:15 , sm: 20, md: 30}
        }}>
        Art isn’t just painting or music—it’s in everything we do. Whether you're a painter, 
        a teacher, an engineer, or an entrepreneur, creativity shapes your work. 
        Art influences our emotions, culture, and dreams, making life more meaningful. 
        In the end, we’re all artists in our own way, creating our own masterpiece.
      </Typography>
</Box>









    <Grid container sx={{ position: "relative", height: "100vh" }}>
      {/* Top Left Square Image */}
      <Grid item xs={12} sm={6} md={3}>
        <Box
          sx={{
            position: "absolute",
            width: { xs: 100, sm: 150, md: 250 },
            height: { xs: 152, sm: 252, md: 352 },
            top: "2%",
            left: "0.5%",
            perspective: "1000px", // Adds depth for 3D effect
          }}
        >
          <Box
            component="img"
            src={flippedS2 ? girl : dragon}
            alt="Top Left"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "10px",
              border: "none",
              transition: "transform 0.6s",
              transformStyle: "preserve-3d",
              transform: flippedS2 ? "rotateY(180deg)" : "rotateY(0deg)",
              position: "absolute",
            }}
          />
        </Box>
      </Grid>

      {/* Center Square Image */}
      <Grid item xs={12} sm={6} md={3}>
        <Box
          component="img"
          src={cat}
          alt="Center"
          sx={{
            position: "absolute",
            width: { xs: 100, sm: 150, md: 250 },
            height: { xs: 100, sm: 150, md: 200 },
            objectFit: "cover",
            borderRadius: "10px", // Ensures it's a square
            border: "none",
            top: "5%",
            left: { xs: "21.5%", sm: "21%", md: "17.5%" },
          }}
        />
      </Grid>

      {/* Bottom Right Square Image */}
      <Grid item xs={12} sm={6} md={3}>
        <Box
          component="img"
          src={ship}
          alt="Bottom Right"
          sx={{
            position: "absolute",
            width: { xs: 100, sm: 150, md: 250 },
            height: { xs: 100, sm: 150, md: 200 },
            objectFit: "cover",
            borderRadius: "10px", // Ensures it's a square
            border: "none",
            top: { xs: "20%", sm: "27.5%", md: "35%" },
            left: { xs: "21.5%", sm: "21%", md: "17.5%" },
          }}
        />
      </Grid>

      {/* Top Left Down */}
      <Grid item xs={12} sm={6} md={3}>
        <Box
          component="img"
          src={hills}
          alt="Top Left Down"
          sx={{
            position: "absolute",
            width: { xs: 100, sm: 150, md: 250 },
            height: { xs: 173, sm: 252, md: 318 },
            objectFit: "cover",
            borderRadius: "10px",
            border: "none",
            top: { xs: "24.5%", sm: "39.5%", md: "54%" },
            left: "0.5%",
          }}
        />
      </Grid>

      {/* Bottom Right Image with 3D Effect */}
      <Grid item xs={12} sm={6} md={3}>
        <Box
          sx={{
            position: "absolute",
            width: { xs: 130, sm: 220, md: 350 },
            height: { xs: 100, sm: 180, md: 240 },
            top: { xs: "35%", sm: "50%", md: "65%" },
            left: { xs: "21%", sm: "21%", md: "17.5%" },
            perspective: "1000px", // Adds depth for 3D effect
          }}
        >
          <Box
            component="img"
            src={flippedS ? sleepy : snow}
            alt="Bottom Right"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "10px",
              border: "none",
              transition: "transform 0.6s",
              transformStyle: "preserve-3d",
              transform: flippedS ? "rotateY(180deg)" : "rotateY(0deg)",
              position: "absolute",
            }}
          />
        </Box>
      </Grid>

      {/* Bottom Center Image */}
      <Grid item xs={12} sm={6} md={3}>
        <Box
          sx={{
            position: "absolute",
            width: { xs: 275, sm: 435, md: 550 },
            height: { xs: 225, sm: 327, md: 430 },
            top: { xs: "2%", sm: "2%", md: "2%" },
            left: { xs: "43%", sm: "41.5%", md: "34.5%" },
            perspective: "1000px", // Adds depth for 3D effect
          }}
        >
          <Box
            component="img"
            src={flippedS1 ? ocean : turtol}
            alt="Bottom Right"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "10px",
              border: "none",
              transition: "transform 0.6s",
              transformStyle: "preserve-3d",
              transform: flippedS1 ? "rotateY(180deg)" : "rotateY(0deg)",
              position: "absolute",
            }}
          />
        </Box>
      </Grid>

      {/* Bottom Right Image */}
      <Grid item xs={12} sm={6} md={3}>
        <Box
          component="img"
          src={book}
          alt="Bottom Right"
          sx={{
            position: "absolute",
            width: { xs: 150, sm: 200, md: 250 },
            height: { xs: 150, sm: 180, md: 240 },
            objectFit: "cover",
            borderRadius: "10px",
            border: "none",
            top: { xs: "32%", sm: "50%", md: "65%" },
            left: { xs: "2%", sm: "51%", md: "41%" },
          }}
        />
      </Grid>

      {/* Bottom Right Tower Image */}
      <Grid item xs={12} sm={6} md={3}>
        <Box
          component="img"
          src={tower}
          alt="Bottom Right"
          sx={{
            position: "absolute",
            width: { xs: 150, sm: 150, md: 250 },
            height: { xs: 150, sm: 180, md: 240 },
            objectFit: "cover",
            borderRadius: "10px",
            border: "none",
            top: { xs: "32%", sm: "50%", md: "65%" },
            left: { xs: "32%", sm: "79%", md: "58%" },
          }}
        />
      </Grid>

      {/* Bottom Right Notebook Image */}
      <Grid item xs={12} sm={6} md={3}>
        <Box
          component="img"
          src={notebook}
          alt="Bottom Right"
          sx={{
            position: "absolute",
            width: { xs: 150, sm: 180, md: 370 },
            height: { xs: 150, sm: 130, md: 240 },
            objectFit: "cover",
            borderRadius: "10px",
            border: "none",
            top: { xs: "2%", sm: "76.5%", md: "65%" },
            left: { xs: "0.5%", sm: "0.5%", md: "75%" },
          }}
        />
      </Grid>

      {/* Bottom Right Mix Image */}
      <Grid item xs={12} sm={6} md={3}>
        <Box
          component="img"
          src={mix}
          alt="Bottom Right"
          sx={{
            position: "absolute",
            width: { xs: 150, sm: 150, md: 210 },
            height: { xs: 150, sm: 130, md: 150 },
            objectFit: "cover",
            borderRadius: "10px",
            border: "none",
            top: { xs: "2%", sm: "76.5%", md: "2%" },
            left: { xs: "2%", sm: "79.5%", md: "71.2%" },
          }}
        />
        <Box
          component="img"
          src={sea}
          alt="Bottom Right"
          sx={{
            position: "absolute",
            width: { xs: 150, sm: 150, md: 210 },
            height: { xs: 150, sm: 130, md: 150 },
            objectFit: "cover",
            borderRadius: "10px",
            border: "none",
            top: { xs: "2%", sm: "76.5%", md: "2%" },
            left: { xs: "2%", sm: "79.5%", md: "85.5%" },
          }}
        />
        <Box
      sx={{
        position: "absolute",
        width: {xs:150, sm:250 ,md:430},
        height: {xs:150, sm:130 ,md:270},
        top: {xs:"2%", sm:"76.5%" ,md:"25%"},
        left: {xs:"2%", sm:"25%" ,md:"71%"},
        perspective: "1000px", // Adds depth for 3D effect
      }}
    >
      <Box
        component="img"
        src={flipped ? coffee : tea}
        alt="Bottom Right"
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          borderRadius: "10px",
          border: "none",
          transition: "transform 0.6s",
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
          position: "absolute",
        }}
      />
    </Box>
      </Grid>
    </Grid>

       


    </React.Fragment>
  );
}

export default Home;
