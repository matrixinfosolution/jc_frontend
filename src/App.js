import { Route, Routes } from "react-router-dom";
import RootLayout from "./Components/Layout/RootLayout";
import { Home } from "./Components/pages/ImportPages";
import DemoPage from "../src/Components/Demo/DemoPage";
import AppAdminLayout from "./Components/Layout/AppAdminLayout";
import AdminContent from "./Components/pages/AdminContent";
function App() {
  return (
    <Routes>
      {/* This is user layout routes */}
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="/demo" element={<DemoPage />} />
      </Route>
      <Route path="/admin" element={<AppAdminLayout />}>
        <Route index element={<AdminContent />} />
      </Route>
    </Routes>
  );
}

export default App;
