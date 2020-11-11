import React from "react";
import CampaignEdit from "../components/CampaignEdit/CampaignEdit";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

const EditCampaign = () => {
  return (
    <>
      <Navbar />
      <CampaignEdit />
      <Footer />
    </>
  );
};

export default EditCampaign;
