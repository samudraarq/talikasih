import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import DiscoverSearchPage from "./DiscoverSearchPage";
import DiscoverSearch from "../components/DiscoverSections/DiscoverSearch/DiscoverSearch";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

configure({ adapter: new Adapter() });

describe("<DiscoverSearchPage />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<DiscoverSearchPage />);
  });

  it("should render one <Navbar />", () => {
    expect(wrapper.find(Navbar)).toHaveLength(1);
  });
  it("should render one <DiscoverSearch />", () => {
    expect(wrapper.find(DiscoverSearch)).toHaveLength(1);
  });
  it("should render one <Footer />", () => {
    expect(wrapper.find(Footer)).toHaveLength(1);
  });
});
