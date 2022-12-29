import React from 'react'
import { NavLink } from 'react-router-dom'
import { IconStar } from '../Icons'
import './ProductCard.css'

const ProductCard = ({ thumbnailUrl, name, quantitySell, price, id, url, rating}) => {
  var nf = new Intl.NumberFormat()
  return (
    <NavLink key={id} to={`/product/${url}`} className='product__link'>
      <img src={`${thumbnailUrl}`} alt='' className='product__image' />
      <div className='bottom-card'>
        <h3 className='product__name'>{name}</h3>
        <div className='product__content'>
          <div className='stars'>
          {[...Array(rating)].map((index) => (
            <IconStar key={index}></IconStar>
          ))}
          </div>
          <div className='product__space'></div>
          <span className='product__quantity'>Số lượng {quantitySell}</span>
        </div>
        <div className='product__price'>
          <span className='price'> {nf.format(price)}đ</span>
        </div>
      </div>
    </NavLink>
  )
}

export default ProductCard
