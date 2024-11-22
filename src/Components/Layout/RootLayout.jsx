import React from "react";
import "../../Rootlayout.css";
import { Outlet } from "react-router-dom";
import { Footer, AppNavbar } from "../pages/ImportPages";
function RootLayout() {
  return (
    <>
      <header>
        <AppNavbar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default RootLayout;
