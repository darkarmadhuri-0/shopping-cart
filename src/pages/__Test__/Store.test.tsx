import React from "react";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import renderer from "react-test-renderer";
import { Store } from "../Store";

// describe("Store Component testing", () => {
//   const StoreTest: React.FC = () => {
//     return (
//       <RecoilRoot>
//         <Store />
//       </RecoilRoot>
//     );
//   };
//   afterEach(() => {
//     cleanup();
//   });
  
//   it("it should add item and increase the count", () => {
//     const alertMock = jest.spyOn(window, "alert").mockImplementation();
//     render(<ShoppingCart/>);
//     const element = screen.getByRole("button", {name: "Add to Cart"});
//     fireEvent.click(element);
//     expect(element).toBeInTheDocument();
//     expect(alertMock).toHaveBeenCalledTimes(1);
//   });

//   it("it should add item and increase the count", () => {
//     const alertMock = jest.spyOn(window, "alert").mockImplementation();
//     render(</>);
//     const element = screen.getByRole("button", {name: "Add to Cart"});
//     fireEvent.click(element);
//     expect(element).toBeInTheDocument();
//     expect(alertMock).toHaveBeenCalledTimes(1);
//   });

  

// });