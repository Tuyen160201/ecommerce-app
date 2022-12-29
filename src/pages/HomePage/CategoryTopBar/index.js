import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import categoriesList from "../../../api/mockData/categories.json";
import "./CategoryTopBar.css";

const CategoryTopBar = () => {
  const categoryRef = useRef();
  const categories = categoriesList
  const handleReachEnd = () => {
    if (categoryRef) {
      categoryRef.current.children[2].style.display = "none";
      categoryRef.current.children[1].style.removeProperty("display");
    }
  };

  const handleReachBeginning = () => {
    if (categoryRef) {
      categoryRef.current.children[1].style.display = "none";
      categoryRef.current.children[2].style.removeProperty("display");
    }
  };
  if (!categories) return;
  return (
    <div className="category-container">
      <div className="swiper-container">
        <Swiper
          slidesPerView={11}
          slidesPerGroup={11}
          navigation={true}
          modules={[Navigation]}
          ref={categoryRef}
          onReachEnd={handleReachEnd}
          onReachBeginning={handleReachBeginning}
          onInit={handleReachBeginning}
          className="swiper__topbar"
        >
          <span className="swiper__span">
            {categories.map((category) => (
              <SwiperSlide key={category.id}>
                <NavLink
                  to={`/catalog/${category.categoryName}`}
                  className="swiper__link"
                  key={category.id}
                >
                  {category.categoryName}
                </NavLink>
              </SwiperSlide>
            ))}
          </span>
        </Swiper>
      </div>
    </div>
  );
};

export default CategoryTopBar;
