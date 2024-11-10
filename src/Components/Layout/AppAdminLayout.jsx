import React from "react";
import { AdminNavbar, AdminFooter } from "../pages/ImportPages";
import { Outlet } from "react-router-dom";

function AppAdminLayout() {
  return (
    <>
      <header>
        <AdminNavbar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <AdminFooter />
      </footer>
    </>
  );
}

export default AppAdminLayout;
