import React from 'react'
import MainLayout from '../../layouts/MainLayout'
import CategoryTopBar from './CategoryTopBar'
import Banner from './Banner'
import Products from "./Products"
import RelatedProducts from './RelatedProducts'

const HomePage = () => {
  return (
    <>
      <MainLayout>
        <CategoryTopBar></CategoryTopBar>
        <Banner></Banner>
        <RelatedProducts></RelatedProducts>
        <Products></Products>
      </MainLayout>
    </>
  )
}

export default HomePage
