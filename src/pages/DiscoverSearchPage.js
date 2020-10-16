import React from "react";
import DiscoverSearch from "../components/DiscoverSections/DiscoverSearch/DiscoverSearch";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

const DiscoverSearchPage = () => {
  return (
    <>
      <Navbar />
      <div
        style={{
          background: "linear-gradient(#ffffff 0%, #ffffff 50%, #f2f9fa 100%)",
        }}
      >
        <DiscoverSearch />
      </div>
      <Footer />
    </>
  );
};

export default DiscoverSearchPage;
