import { render, screen } from "@testing-library/react";
import HomePage from "./Pages/Home";

// eslint-disable-next-line no-undef
test("background color of search screen is #063048", () => {
  // eslint-disable-next-line react/react-in-jsx-scope
  render(<HomePage />);
  const mainScreen = screen.getByTestId("mainScreen")
  // eslint-disable-next-line no-undef
  expect(mainScreen).toHaveStyle("background-color: #063048")
});
