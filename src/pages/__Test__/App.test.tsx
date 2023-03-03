import React from "react";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import renderer from "react-test-renderer";
import { createMemoryHistory } from "@remix-run/router";
import { BrowserRouter, Route, Router } from "react-router-dom";
import { Store } from "../Store";
import App from "../../App";
import userEvent from "@testing-library/user-event";

// describe('App', () => {
//     it('Should be true', () => {
//        const test = true;
//        expect(test).toBe(true);
//     });

// describe('Store', () => {
//  test('should pass', () => {
//     const history = createMemoryHistory({initialEntries: ['/']});
//     const { getByText } = render(
//         <Router history={history}>
//             <Store/>
//         </Router>
//     );
//     expect(history.location.pathname).toBe('/');
//     fireEvent.click(getByText('Store'));
//     expect(history.location.pathname).toBe('/store');
//  })
// })


// test('full app rendering/navigating', async () => {
//     render(<App />, {wrapper: BrowserRouter})
//     const user = userEvent.setup()
  
//     // verify page content for default route
//     expect(screen.getByText(/you are home/i)).toBeInTheDocument()
  
//     // verify page content for expected route after navigating
//     await user.click(screen.getByText(/about/i))
//     expect(screen.getByText(/you are on the about page/i)).toBeInTheDocument()
//   })
//  });