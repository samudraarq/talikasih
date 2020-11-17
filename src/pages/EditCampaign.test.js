import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import EditCampaign from "./EditCampaign";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import CampaignEdit from "../components/CampaignEdit/CampaignEdit";

configure({ adapter: new Adapter() });

describe("<EditCampaign />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<EditCampaign />);
  });

  it("should render one <Navbar />", () => {
    expect(wrapper.find(Navbar)).toHaveLength(1);
  });
  it("should render one <CampaignEdit />", () => {
    expect(wrapper.find(CampaignEdit)).toHaveLength(1);
  });
  it("should render one <Footer />", () => {
    expect(wrapper.find(Footer)).toHaveLength(1);
  });
});
