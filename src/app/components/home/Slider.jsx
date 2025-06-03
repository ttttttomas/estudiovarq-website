'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const MySlider = () => {
  return (
    <div className="mx-5">
      <Swiper
      effect='flip'
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={15}
        slidesPerView={2}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
      >
        <SwiperSlide>
            <a href="/">
          <img src="./home.png" alt="Slide 1" />
            </a>
        </SwiperSlide>
        <SwiperSlide>
            <a href="/">
          <img src="./home.png" alt="Slide 2" />
            </a>
        </SwiperSlide>
        <SwiperSlide>
            <a href="/">
          <img src="./home.png" alt="Slide 3" />
            </a>
        </SwiperSlide>
        <SwiperSlide>
            <a href="/">
          <img src="./home.png" alt="Slide 4" />
            </a>
        </SwiperSlide>
        <SwiperSlide>
            <a href="/">
          <img src="./home.png" alt="Slide 5" />
            </a>
        </SwiperSlide>
        <SwiperSlide>
            <a href="/">
          <img src="./home.png" alt="Slide 6" />
            </a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default MySlider;
