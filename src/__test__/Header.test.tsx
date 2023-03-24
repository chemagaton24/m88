import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "../components/Layout/Header";
import M88Logo from "../assets/images/logos/m88.svg";

test("Test Register Button", () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/JOIN NOW/i);
  expect(linkElement).toBeInTheDocument();
});
