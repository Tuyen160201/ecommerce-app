import React from 'react'
import MainLayout from "../../layouts/MainLayout";
import CategoryTopBar from "./CategoryTopBar";

const HomePage = () => {
  return (
    <>
      <MainLayout>
      <CategoryTopBar></CategoryTopBar>
        <div style={{height: "400px"}}>TT</div>
      </MainLayout>
    </>
  )
}

export default HomePage
