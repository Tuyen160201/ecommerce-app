import React from 'react'
import './RelatedProducts.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import productsList from '../../../api/mockData/products.json'
import { IconStar } from '../../../components/common/Icons'
import Slider from 'react-slick'

const ListItemsCategory = () => {
  var nf = new Intl.NumberFormat()
  let settings = {
    infinite: false,
    initialSlide: 0,
    speed: 700,
    slidesToShow: 6,
    slidesToScroll: 6,
  }
  const products = productsList

  return (
    <div className='related-products'>
      <div className='related-products__title'>
        <div className='title__container'>
          <div className='text__container'>
            <h2 className='text__content'>SẢN PHẨM NỔI BẬT</h2>
          </div>
        </div>
      </div>
      <Slider {...settings}>
        {products.length > 0 &&
          products.map((item) => (
            <a
              key={item.id}
              href={`/product/${item.url}`}
              className='related-card'
            >
              <img
                src={`${item.productImg}`}
                alt=''
                className='related__image'
              />
              <h3 className='related__name'>{item.productName}</h3>
              <div className='related__content'>
                <div className='stars'>
                  {[...Array(parseInt(item.productRating))].map(
                    (item, index) => (
                      <IconStar key={index}></IconStar>
                    )
                  )}
                </div>
                <div className='related__space'></div>
                <span className='related__quantity'>
                  Đã bán {item.quantity}
                </span>
              </div>
              <div className='related__price'>
                <span className='price__content'>
                  {' '}
                  {nf.format(item.productPrice)}đ
                </span>
              </div>
            </a>
          ))}
      </Slider>
    </div>
  )
}

export default ListItemsCategory
