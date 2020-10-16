import React from "react";
import CategorySelect from "../components/CategorySelect/CategorySelect";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

const Discover = () => {
  return (
    <>
      <Navbar />
      <div
        style={{
          background: "linear-gradient(#ffffff 0%, #ffffff 50%, #f2f9fa 100%)",
        }}
      >
        <CategorySelect />
      </div>
      <Footer />
    </>
  );
};

export default Discover;
