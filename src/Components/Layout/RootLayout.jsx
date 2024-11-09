import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../pages/Footer";
import AppNavbar from "../pages/AppNavbar";

function RootLayout() {
  return (
    <>
      <AppNavbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default RootLayout;
