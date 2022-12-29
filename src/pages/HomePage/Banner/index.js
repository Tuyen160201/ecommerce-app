import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/scrollbar";
import "swiper/css/hash-navigation";
import { Navigation, Pagination, Scrollbar, A11y, Thumbs } from "swiper";
import "./Banner.css";
import banner1 from "../../../images/banner1.png";
import banner2 from "../../../images/banner2.png";
import banner3 from "../../../images/banner3.png";
import banner4 from "../../../images/banner4.png";

export const events = [
  {
    id: 1,
    url: `${banner1}`,
  },
  {
    id: 2,
    url: `${banner2}`,
  },
  {
    id: 3,
    url: `${banner3}`,
  },
  {
    id: 4,
    url: `${banner4}`,
  }
];

const Banner = () => {
  if (!events) return;
  return (
    <div className="banner">
      <div className="banner__container">
        <section className="banner__section">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Thumbs]}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            className="slider__event"
          >
            {events.length > 0 &&
              events.map((item) => (
                <SwiperSlide key={item.id}>
                  <img
                    className="event__image"
                    src={item.url}
                    alt={item.id}
                  />
                </SwiperSlide>
              ))}
          </Swiper>
        </section>
      </div>
    </div>
  );
};

export default Banner;
