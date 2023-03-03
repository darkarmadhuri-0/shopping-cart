 import React from "react";
// import { render, screen, cleanup, fireEvent } from "@testing-library/react";
// import { RecoilRoot } from "recoil";
// import renderer from "react-test-renderer";
// import { Store } from "../Store";
// import { StoreItem } from "../../components/StoreItem";

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

// it("should check the error message", () => {

//     render(<StoreTest />);

//     expect(screen.getByText(/An error occurred/i)).toBeInTheDocument();

//   });

// test('click event on the add to cart button', () => {
//     render(<StoreItem/>);
 
//     const btnIncrement = screen.getByTestId("incr");
//     fireEvent.click(btnIncrement); 
 
//     expect(screen.getByTestId("textid")).toHaveTextContent("1 in cart");
//   });
  

//  });