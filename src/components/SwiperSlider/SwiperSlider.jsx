import { Link } from "react-router-dom";
// import Swiper core and required modules
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { Button } from "@/shadcn-components/ui/button";

import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "./SwiperSlider.css";

const SwiperSlider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay={true}
      className="  h-screen"
    >
      <SwiperSlide className="slider1 flex justify-center items-center flex-col">
        <p className="text-white text-[44px] sm:text-6xl  md:text-7xl font-bold mb-20  ">
          MEN CLOTHING
        </p>

        <Link to="/collections/men" className="  mb-10">
          <Button className="bg-transparent border-white border-2 text-white   text-lg font-bold   transition ease-in-out    hover:-translate-z-1 hover:scale-110 hover:bg-white hover:text-black hover:border-neutral-300 duration-500 p-6 mx-2">
            Shop Now{" "}
            <ArrowRightAltIcon fontSize="large" className="mx-1 mb-0.5" />
          </Button>{" "}
        </Link>
      </SwiperSlide>
      <SwiperSlide className="slider2 flex justify-center items-center flex-col">
        <p className="text-white text-center  text-5xl sm:text-6xl md:text-7xl font-bold mb-20  ">
          WOMEN CLOTHING
        </p>
        <Link to="/collections/women" className="  mb-10">
          <Button className="bg-transparent border-white border-2 text-white   text-lg font-bold   transition ease-in-out    hover:-translate-z-1 hover:scale-110 hover:bg-white hover:text-black hover:border-neutral-300 duration-500 p-6 mx-2">
            Shop Now{" "}
            <ArrowRightAltIcon fontSize="large" className="mx-1 mb-0.5" />
          </Button>{" "}
        </Link>
      </SwiperSlide>
      <SwiperSlide className="slider3  flex justify-center items-center flex-col h-full">
        {" "}
        <p className="text-white text-[44px] sm:text-6xl  md:text-7xl font-bold mb-20  ">
          KIDS CLOTHING
        </p>
        <Link to="/collections/kids" className="  mb-10">
          <Button className="bg-transparent border-white border-2 text-white   text-lg font-bold   transition ease-in-out    hover:-translate-z-1 hover:scale-110 hover:bg-white hover:text-black hover:border-neutral-300 duration-500 p-6 mx-2">
            Shop Now{" "}
            <ArrowRightAltIcon fontSize="large" className="mx-1 mb-0.5" />
          </Button>{" "}
        </Link>
      </SwiperSlide>
      <SwiperSlide className="slider4 flex justify-center items-center flex-col">
        {" "}
        <p className="text-white text-5xl sm:text-6xl md:text-7xl font-bold mb-20  ">
          ACCESSORIES
        </p>
        <Link to="/collections/accessories" className="mb-10">
          <Button className="bg-transparent border-white border-2 text-white   text-lg font-bold   transition ease-in-out    hover:-translate-z-1 hover:scale-110 hover:bg-white hover:text-black hover:border-neutral-300 duration-500 p-6 mx-2">
            Shop Now{" "}
            <ArrowRightAltIcon fontSize="large" className="mx-1 mb-0.5" />
          </Button>{" "}
        </Link>
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperSlider;
