import { Box } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Home.css';

const SlickSlider = () => {
  const item = {
    images: [
      { id: 1, image: "/Assets/client_1.png" },
      { id: 2, image: "/Assets/client_2.png" },
      { id: 3, image: "/Assets/client_3.png" },
    ],
  };

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false, 
    centerMode: false,
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // Adjust for tablets
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Box
      sx={{
        width: "100%", // Ensures full width
        maxWidth: "1200px", // Limits on large screens
        margin: "auto",
        padding: { xs: "5px", sm: "10px", md: "20px" },
        overflow:"hidden"
      }}
    >
      <Slider {...settings} style={{ width: "100%" }}>
        {item.images.map((image) => (
          <Box key={image.id} sx={{ textAlign: "center" }}>
            <Box
              component="img"
              sx={{
                width: "90%", // Makes it responsive
                maxWidth: "380px", // Keeps original size on large screens
                height: "auto",
                objectFit: "cover",
                margin: "auto",
              }}
              alt={`Image ${image.id}`}
              src={image.image}
              onError={(e) => console.log("Error loading image", e)}
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default SlickSlider;
