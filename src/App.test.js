import { render, screen } from "@testing-library/react";
import FlightSearch from "./Components/FlightSearch";

// eslint-disable-next-line no-undef
test("background color of search screen is #063048", () => {
  // eslint-disable-next-line react/react-in-jsx-scope
  render(<FlightSearch />);
  const mainScreen = screen.getByTestId("flightSearchScreen")
  // eslint-disable-next-line no-undef
  expect(mainScreen).toHaveStyle("background-color: #063048")
});
