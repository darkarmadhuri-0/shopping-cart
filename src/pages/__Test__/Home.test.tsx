import React from "react";

import { render, screen, cleanup } from "@testing-library/react";

import { RecoilRoot } from "recoil";

import renderer from "react-test-renderer";
import { Home } from "../Home";



describe("Home Page Component testing", () => {

   const HomeTest: React.FC = () => {
    
    return (

      <RecoilRoot>

        <Home />

      </RecoilRoot>

    );

  };

  afterEach(() => {

    cleanup();

  });
  

  it("should dispaly the different deals", () => {

    render(<HomeTest />);

    expect(screen.getByText(/DEALS/i)).toBeInTheDocument();

  });


   it("should match with snapshot of welcome module", () => {

    const tree = renderer.create(<HomeTest />).toJSON();

    expect(tree).toMatchSnapshot();

  });

});