import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Discover from "./Discover";
import Navbar from "../components/Navbar/Navbar";
import CategorySelect from "../components/CategorySelect/CategorySelect";
import DiscoverSections from "../components/DiscoverSections/DiscoverSections";
import Footer from "../components/Footer/Footer";

configure({ adapter: new Adapter() });

describe("<Discover />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Discover />);
  });

  it("should render one <Navbar />", () => {
    expect(wrapper.find(Navbar)).toHaveLength(1);
  });
  it("should render one <CategorySelect />", () => {
    expect(wrapper.find(CategorySelect)).toHaveLength(1);
  });
  it("should render one <DiscoverSections />", () => {
    expect(wrapper.find(DiscoverSections)).toHaveLength(1);
  });
  it("should render one <Footer />", () => {
    expect(wrapper.find(Footer)).toHaveLength(1);
  });
});
