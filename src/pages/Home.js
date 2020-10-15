import React from "react";
import Footer from "../components/Footer/Footer";
import DownloadApps from "../components/Home/DownloadApps/DownloadApps";
import NewCampaign from "../components/Home/NewCampaign/NewCampaign";
import Trending from "../components/Home/Trending/Trending";

const Home = () => {
  return (
    <>
      <div
        style={{
          background: "linear-gradient(#ffffff 0%, #ffffff 50%, #f2f9fa 100%)",
        }}
      >
        <Trending />
        <NewCampaign />
        <DownloadApps />
      </div>
      <Footer />
    </>
  );
};

export default Home;
