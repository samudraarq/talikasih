import React from "react";
import CampaingDetailsDonate from "../components/CampaingDetailsDonate/CampaingDetailsDonate";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

const ChampingDetailsDonatePage = () => {
  return (
    <>
      <Navbar />
      <div> 
        <CampaingDetailsDonate/>
      </div>
      <Footer />
    </>
  );
};

export default ChampingDetailsDonatePage;
