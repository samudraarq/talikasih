import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Home from "./Home";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Carousel from "../components/Carousel/Carousel";
import Trending from "../components/Home/Trending/Trending";
import NewCampaign from "../components/Home/NewCampaign/NewCampaign";
import DownloadApps from "../components/Home/DownloadApps/DownloadApps";

configure({ adapter: new Adapter() });

describe("<Home />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Home />);
  });

  it("should render one <Navbar />", () => {
    expect(wrapper.find(Navbar)).toHaveLength(1);
  });
  it("should render one <Carousel />", () => {
    expect(wrapper.find(Carousel)).toHaveLength(1);
  });
  it("should render one <Trending />", () => {
    expect(wrapper.find(Trending)).toHaveLength(1);
  });
  it("should render one <NewCampaign />", () => {
    expect(wrapper.find(NewCampaign)).toHaveLength(1);
  });
  it("should render one <DownloadApps />", () => {
    expect(wrapper.find(DownloadApps)).toHaveLength(1);
  });
  it("should render one <Footer />", () => {
    expect(wrapper.find(Footer)).toHaveLength(1);
  });
});
