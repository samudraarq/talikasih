import React from "react";
import DownloadApps from "../components/Home/DownloadApps/DownloadApps";
import NewCampaign from "../components/Home/NewCampaign/NewCampaign";
import Trending from "../components/Home/Trending/Trending";

const Home = () => {
  return (
    <>
      <Trending />
      <NewCampaign />
      <DownloadApps />
    </>
  );
};

export default Home;
