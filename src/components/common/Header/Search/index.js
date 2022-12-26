import React, { useState } from 'react'
import './Search.css'

const Search = () => {
  const [value, setValue] = useState('')

  // const { products } = useSelector((state) => state.product);

  const onChange = (event) => {
    setValue(event.target.value)
  }

  const onSearch = (searchItem) => {
    setValue(searchItem)
    console.log('search ', searchItem)
  }

  return (
    <div className='search'>
      <div className='search__form'>
        <input
          className='search__input'
          type='text'
          placeholder='Tìm sản phẩm, danh mục hay thương hiệu mong muốn...'
          value={value}
          onChange={onChange}
        />
        <button
          className='search__button'
          onClick={() => onSearch(value)}
        >
          <img
            className='search__icon'
            src='https://salt.tikicdn.com/ts/upload/ed/5e/b8/8538366274240326978318348ea8af7c.png'
            alt=''
          />
          Tìm Kiếm
        </button>
        <div className='search__result'>
          {/* {products &&
            products
              ?.filter((item) => {
                if (value === "") {
                  return "";
                } else if (
                  item.name.toLowerCase().includes(value.toLowerCase())
                ) {
                  return item;
                }
                return false;
              })
              .slice(0, 10)
              .map((item, index) => (
                <a
                  className="item__search"
                  href={`/product/${item.slug}`}
                  onClick={() => onSearch(item.name)}
                  key={index}
                >
                  {item.name}
                </a>
              ))} */}
        </div>
      </div>
    </div>
  )
}

export default Search
