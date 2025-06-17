"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import axios from "axios";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useEffect, useState } from "react";

const MySlider = () => {
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://api-estudiovarq.iwebtecnology.com/houses",
      );
      setHouses(response.data);
    };
    fetchData();
  }, []);

  return (
    <div className="mx-5">
      <Swiper
        effect="flip"
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={15}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
        }}
      >
        {houses.map((house) => (
          <SwiperSlide className="w-full h-full" key={house.id}>
            <a href={`/casas/${house.id}`}>
          <img className="md:h-[600px] w-full object-cover aspect-square" src={house.images[0]} alt={house.title} />
            </a>
          </SwiperSlide>
        ))}

      </Swiper>
    </div>
  );
};

export default MySlider;
