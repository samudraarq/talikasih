import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import AdminPage from "./AdminPage";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Admin from "../components/Admin/Admin";

configure({ adapter: new Adapter() });

describe("<AdminPage />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<AdminPage />);
  });

  it("should render one <Navbar />", () => {
    expect(wrapper.find(Navbar)).toHaveLength(1);
  });
  it("should render one <Admin />", () => {
    expect(wrapper.find(Admin)).toHaveLength(1);
  });
  it("should render one <Footer />", () => {
    expect(wrapper.find(Footer)).toHaveLength(1);
  });
});
