import React from "react";
import CampaingDetailsDonate from "../components/CampaignDetailsDonate/CampaignDetailsDonate";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

const ChampingDetailsDonatePage = () => {
  return (
    <>
      <Navbar />
      <div
        style={{
          background: "linear-gradient(#ffffff 0%, #ffffff 50%, #f2f9fa 100%)",
        }}
      >
        <CampaingDetailsDonate />
      </div>
      <Footer />
    </>
  );
};

export default ChampingDetailsDonatePage;
