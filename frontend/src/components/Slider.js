import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const Slider = () => {
  return (
    <div className="my-8">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <img
            className="w-full h-auto object-cover"
            src="https://m.media-amazon.com/images/I/819733naKAL.jpg"
            alt="Sony Bravia TV"
          />
        </SwiperSlide>
        {/* Slide 2 */}
        <SwiperSlide>
          <img
            className="w-full h-auto object-cover"
            src="https://www.hindustantimes.com/ht-img/img/2024/05/20/1600x900/Panasonic_Front_Load_Washing_Machine_1704273357561_1716213359281.jpg"
            alt="Washing Machine"
          />
        </SwiperSlide>
        {/* Slide 3 */}
        <SwiperSlide>
          <img
            className="w-full h-auto object-cover"
            src="image2.jpg"
            alt="Fridge and Washing Machine"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
