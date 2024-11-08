import React from "react";
import AdminLayout from "../Layout/AdminLayout";

const DemoPage = () => {
  return (
    <>
      <AdminLayout>
        <div className="container mt-5">
          <h1 className="text-primary">Hello, Bootstrap!</h1>
          <button className="btn btn-success">Click Me</button>
        </div>
      </AdminLayout>
    </>
  );
};

export default DemoPage;
