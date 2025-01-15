// import React, { useState, useEffect } from "react";
// import { Box, Button } from "@mui/material";
// import { useNavigate } from "react-router-dom";

// const ImageSlideShow = () => {
//   const [slideIndex, setSlideIndex] = useState(0);
//   const navigate = useNavigate();

//   const leftImages = [
//     { src: "/assets/images/IMG_4605.JPG", caption: "SHOP NOW" },
//     { src: "/assets/images/IMG_4809.JPG", caption: "EXPLORE" },
//     { src: "/assets/images/IMG_4977.JPG", caption: "DISCOVER" },
//   ];

//   const rightImages = [
//     { src: "/assets/images/IMG_4605.JPG", caption: "SHOP NOW" },
//     { src: "/assets/images/IMG_4849.JPG", caption: "EXPLORE" },
//     { src: "/assets/images/IMG_5039.JPG", caption: "DISCOVER" },
//   ];

//   const totalSlides = Math.min(leftImages.length, rightImages.length);

//   const nextSlide = () => {
//     setSlideIndex((prevIndex) => (prevIndex + 1) % totalSlides);
//   };

//   useEffect(() => {
//     const timer = setInterval(() => {
//       nextSlide();
//     }, 3000);

//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <Box
//       sx={{
//         position: "relative",
//         width: "100%",
//         height: "60rem",
//         overflow: "hidden",
//         display: "flex",
//         // marginTop: "6px",
//       }}
//     >
//       {/* Left Half */}
//       <Box
//         sx={{
//           flex: 1,
//           backgroundImage: `url(${leftImages[slideIndex]?.src || ""})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           backgroundRepeat: "no-repeat",
//           cursor: "pointer",
//           position: "relative",
//         }}
//         onClick={() => navigate("/product-list")}
//       />

//       {/* Right Half */}
//       <Box
//         sx={{
//           flex: 1,
//           backgroundImage: `url(${rightImages[slideIndex]?.src || ""})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           backgroundRepeat: "no-repeat",
//           cursor: "pointer",
//           position: "relative",
//         }}
//         onClick={() => navigate("/product-list")}
//       />

//       {/* Big Text: ELEMENTS OF AUTUMN */}
//       <Box
//         sx={{
//           position: "absolute",
//           top: "50%", // Center vertically
//           left: "50%", // Center horizontally
//           transform: "translate(-50%, -50%)", // Adjust for precise centering
//           textAlign: "center",
//           color: "#fff",
//           fontSize: "60px", // Make it big
//           letterSpacing: "0.55rem",
//           fontFamily:
//             "'Proxima Nova', 'Helvetica Neue', Helvetica, Roboto, Arial, sans-serif",
//           textTransform: "uppercase",
//         }}
//       >
//         ELEMENTS OF AUTUMN
//       </Box>

//       {/* Button: SHOP NEW IN */}
//       <Box
//         sx={{
//           position: "absolute",
//           top: "60%", // Adjust to be below the text
//           left: "50%",
//           transform: "translateX(-50%)",
//           textAlign: "center",
//         }}
//       >
//         <Button
//           variant="contained"
//           color="primary"
//           sx={{
//             fontSize: "18px",
//             padding: "25px 60px",
//             backgroundColor: "#ffffff",
//             borderRadius: 0, // Remove border radius
//             "&:hover": {
//               backgroundColor: "#b8aaad",
//               color: "#ffffff", // Change color on hover
//             },
//             fontFamily:
//               "'Proxima Nova', 'Helvetica Neue', Helvetica, Roboto, Arial, sans-serif",
//             textTransform: "uppercase",
//             letterSpacing: "0.40rem",
//             lineHeight: "1rem",
//             color: "#333333", // Default text color
//             fontWeight: "600",
//           }}
//           onClick={() => navigate("/product-list")}
//         >
//           SHOP NEW IN
//         </Button>
//       </Box>

//       {/* Navigation Dots */}
//       <Box
//         sx={{
//           position: "absolute",
//           bottom: "20px",
//           left: "50%",
//           transform: "translateX(-50%)",
//           display: "flex",
//           gap: "10px",
//         }}
//       >
//         {leftImages.map((_, index) => (
//           <span
//             key={index}
//             onClick={() => setSlideIndex(index)}
//             style={{
//               display: "inline-block",
//               width: "10px",
//               height: "10px",
//               borderRadius: "50%",
//               backgroundColor:
//                 index === slideIndex ? "#fff" : "rgba(255, 255, 255, 0.5)",
//               cursor: "pointer",
//             }}
//           ></span>
//         ))}
//       </Box>
//     </Box>
//   );
// };

// export default ImageSlideShow;

import React, { useState, useEffect } from "react";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ImageSlideShow = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const navigate = useNavigate();

  const images = [
    { src: "/assets/images/image2.png", caption: "SHOP NOW" },
    { src: "/assets/images/image2.png", caption: "SHOP NOW" },
    { src: "/assets/images/image2.png", caption: "SHOP NOW" },
  ];

  const totalSlides = images.length;

  const nextSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "60rem",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center", // Center the image horizontally
      }}
    >
      {/* Single Image */}
      <Box
        sx={{
          width: "100%",
          height: "100%",
          backgroundImage: `url(${images[slideIndex]?.src || ""})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          cursor: "pointer",
          position: "relative",
        }}
        onClick={() => navigate("/product-list")}
      />

      {/* Big Text: ELEMENTS OF AUTUMN */}
      <Box
        sx={{
          position: "absolute",
          top: "50%", // Center vertically
          left: "50%", // Center horizontally
          transform: "translate(-50%, -50%)", // Adjust for precise centering
          textAlign: "center",
          color: "#fff",
          fontSize: "60px", // Make it big
          letterSpacing: "0.55rem",
          fontFamily:
            "'Proxima Nova', 'Helvetica Neue', Helvetica, Roboto, Arial, sans-serif",
          textTransform: "uppercase",
        }}
      >
        ELEMENTS OF AUTUMN
      </Box>

      {/* Button: SHOP NEW IN */}
      <Box
        sx={{
          position: "absolute",
          top: "60%", // Adjust to be below the text
          left: "50%",
          transform: "translateX(-50%)",
          textAlign: "center",
        }}
      >
        <Button
          variant="contained"
          color="primary"
          sx={{
            fontSize: "18px",
            padding: "25px 60px",
            backgroundColor: "#ffffff",
            borderRadius: 0, // Remove border radius
            "&:hover": {
              backgroundColor: "#b8aaad",
              color: "#ffffff", // Change color on hover
            },
            fontFamily:
              "'Proxima Nova', 'Helvetica Neue', Helvetica, Roboto, Arial, sans-serif",
            textTransform: "uppercase",
            letterSpacing: "0.40rem",
            lineHeight: "1rem",
            color: "#333333", // Default text color
            fontWeight: "600",
          }}
          onClick={() => navigate("/product-list")}
        >
          SHOP NEW IN
        </Button>
      </Box>

      {/* Navigation Dots */}
      <Box
        sx={{
          position: "absolute",
          bottom: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "10px",
        }}
      >
        {images.map((_, index) => (
          <span
            key={index}
            onClick={() => setSlideIndex(index)}
            style={{
              display: "inline-block",
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor:
                index === slideIndex ? "#fff" : "rgba(255, 255, 255, 0.5)",
              cursor: "pointer",
            }}
          ></span>
        ))}
      </Box>
    </Box>
  );
};

export default ImageSlideShow;
