import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
export default function MainLayout({
  children,
}) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}