import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../pages/Footer";
import AppNavbar from "../pages/AppNavbar";

function RootLayout() {
  return (
    <>
      <header>
        <AppNavbar />
      </header>
      <main style={{ marginTop: "60px" }}>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default RootLayout;
