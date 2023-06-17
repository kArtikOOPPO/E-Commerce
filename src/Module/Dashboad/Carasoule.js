import React,{useState} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import 'swiper/swiper-bundle.min.css'; // Updated import statement
import SwiperCore, { Pagination, Autoplay } from "swiper";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
// import SwiperCore, { Navigation, Autoplay } from "swiper";

SwiperCore.use([Pagination, Autoplay]);
const ArrayImages = [
  {
    title: "Image 1",
    description: "Description 1",
    image:
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    title: "Image 2",
    description: "Description 2",
    image:
      "https://plus.unsplash.com/premium_photo-1679913792906-13ccc5c84d44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    title: "Image 3",
    description: "Description 3",
    image:
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    title: "Image 4",
    description: "Description 4",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
];
const SwiperComponent = () => {
    const [hovered, setHovered] = useState(false);

    const handleMouseEnter = () => {
      setHovered(true);
    };

    const handleMouseLeave = () => {
      setHovered(false);
    };
  return (
    <Swiper pavigation autoplay={{ delay: 2000 }}>
      {/* <Swiper> */}
      {ArrayImages.map((x, index) => (
        <SwiperSlide key={index}>
          <ImageListItem
            sx={{
              maxHeight: {
                xs: 300,
                sm: 400,
              },
              minHeight: {
                xs: 200,
                sm: 300,
              },
              position: "relative", // Add position relative to the ImageListItem
              overflow: "hidden", // Add overflow hidden to hide the ImageListItemBar initially
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src={`${x?.image}?w=248&fit=crop&auto=format`}
              srcSet={`${x?.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={x?.title}
              loading="lazy"
              style={{
                maxHeight: "400px",
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
            <ImageListItemBar
              title={x?.title}
              subtitle={x?.description}
              sx={{
                transform: hovered ? "translateY(0)" : "translateY(100%)", // Apply the translation based on hover state
                transition: "transform 0.3s", // Add transition effect
                background: "rgba(0, 0, 0, 0.6)", // Customize the background color of ImageListItemBar
                position: "absolute", // Set position absolute to allow the transition effect
                bottom: 0, // Align the ImageListItemBar to the bottom
                width: "100%", // Set the width to match the ImageListItem width
              }}
              actionIcon={
                <IconButton
                  sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                  aria-label={`info about ${x?.title}`}
                >
                  <InfoIcon />
                </IconButton>
              }
            />
          </ImageListItem>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperComponent;
