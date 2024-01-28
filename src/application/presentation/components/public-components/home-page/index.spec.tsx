import React from "react";
import { render } from "@testing-library/react";
import HomePage from ".";

describe('HomePage Component', () => {
  test("should render the home page", () => {
    const { getByText } = render(<HomePage />);

    const helloWorldText = getByText(/Hello World/i);
    expect(helloWorldText.textContent).toBe('Hello World');
  });
});