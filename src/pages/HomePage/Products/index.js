import React, { useState } from "react";
import ProductCard from "../../../components/common/ProductCard";
import productsList from "../../../api/mockData/products.json";
import "./Products.css"

const productPerRow = 12;
const ProductList = () => {
  const products = productsList
  const [next, setNext] = useState(productPerRow);
  const handleLoadMoreProduct = () => {
    setNext(next + productPerRow);
  };

  return (
    <div className="products-list">
      <div className="products__container">
        <div className="products__title">
          <div className="title__container">
            <h2 className="title__content">
              TẤT CẢ SẢN PHẨM
            </h2>
          </div>
        </div>
        <div className="products">
          {products && (
            products
              ?.slice(0, next)
              .map((item) => (
                <ProductCard
                  key={item.id}
                  id={item.id}
                  thumbnailUrl={item.productImg}
                  name={item.productName}
                  quantitySell={item.quantity}
                  price={item.productPrice}
                  url={item.slug}
                  rating={parseInt(item.productRating)}
                ></ProductCard>
              ))
          )}
        </div>
        {next < products?.length && (
          <div className="button__container">
            <button
              className="button__more"
              onClick={handleLoadMoreProduct}
            >
              Xem thêm
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductList;
