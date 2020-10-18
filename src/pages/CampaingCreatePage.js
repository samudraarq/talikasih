import React from "react";
import CampaignCreate from "../components/CampaignCreate/CampaignCreate";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

const Discover = () => {
  return (
    <>
      <Navbar />
      <div> 
        <CampaignCreate/>
      </div>
      <Footer />
    </>
  );
};

export default Discover;
