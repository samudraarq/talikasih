import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { CategorySelect } from "./CategorySelect";

configure({ adapter: new Adapter() });

describe("<CategorySelect />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<CategorySelect />);
  });

  it("should render eight category select button (Link)", () => {
    expect(wrapper.find("Link")).toHaveLength(8);
  });
});
