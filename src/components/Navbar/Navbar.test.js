import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { Navbar } from "./Navbar";

configure({ adapter: new Adapter() });

describe("<Navbar />", () => {
  let wrapper;

  let props = {
    auth: {
      token: "",
      user: {},
      isLogin: true,
    },
    setModalOpen: jest.fn(),
    setFormLogin: jest.fn(),
    setFormRegister: jest.fn(),
  };

  beforeEach(() => {
    wrapper = shallow(<Navbar {...props} />);
  });

  it("should contain search input", () => {
    expect(wrapper.find("input")).toHaveLength(1);
  });

  //   it("should contain login button", () => {
  //     console.log(wrapper.debug());
  //     expect(wrapper.find("span").text()).toEqual("Login");
  //   });
});
