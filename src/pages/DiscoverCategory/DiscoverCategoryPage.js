import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import DiscoverCategory from "../../components/DiscoverSections/DiscoverCategory/DiscoverCategory";

const DiscoverCategoryPage = () => {
  return (
    <>
      <Navbar />
      <div
        style={{
          background: "linear-gradient(#ffffff 0%, #ffffff 50%, #f2f9fa 100%)",
        }}
      >
        <DiscoverCategory />
      </div>
      <Footer />
    </>
  );
};

export default DiscoverCategoryPage;
