import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { CareerComponent } from ".";

describe("CareerComponent", () => {
  it("should render and send the form", () => {
    const mockOnSubmit = jest.fn();
    const { getByLabelText, getByText } = render(
      <CareerComponent onSubmit={mockOnSubmit} />
    );

    const companyInput = getByLabelText(/company/i) as HTMLInputElement;
    const positionInput = getByLabelText(/position/i) as HTMLInputElement;
    const fromInput = getByLabelText(/from/i) as HTMLInputElement;
    const toInput = getByLabelText(/to/i) as HTMLInputElement;
    const button = getByText(/save career/i);

    console.log("Company input value:", companyInput.value);
    console.log("Position input value:", positionInput.value);
    console.log("From input value:", fromInput.value);
    console.log("To input value:", toInput.value);

    fireEvent.change(companyInput, { target: { value: "Google" } });
    fireEvent.change(positionInput, {
      target: { value: "Software Developer" },
    });
    fireEvent.change(fromInput, { target: { value: "2022" } });
    fireEvent.change(toInput, { target: { value: "2024" } });

    console.log("Company input value after typing:", companyInput.value);
    console.log("Position input value after typing:", positionInput.value);
    console.log("From input value after typing:", fromInput.value);
    console.log("To input value after typing:", toInput.value);

    expect(companyInput.value).toBe("Google");
    expect(positionInput.value).toBe("Software Developer");
    expect(fromInput.value).toBe("2022");
    expect(toInput.value).toBe("2024");

    fireEvent.click(button);
  });
});
