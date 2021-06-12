import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { HeaderView } from "../Views/HeaderView";

describe("Header View", () => {
  it("renders title", () => {
    render(<HeaderView />);
    const title = screen.getByAltText("Stardew Valley Crafting Helper");
    expect(title).toBeTruthy();
  });

  it("opens instructions dialog when how to use button is ciicked", () => {
    render(<HeaderView />);
    const button = screen.getByText("How to use");
    fireEvent.click(button);
    const dialog = screen.getByLabelText("how-to-use-dialog");
    expect(dialog).toBeTruthy();
  });

  it("opens credits dialog when credits button is ciicked", () => {
    render(<HeaderView />);
    const button = screen.getByText("Credits");
    fireEvent.click(button);
    const dialog = screen.getByLabelText("credits-dialog");
    expect(dialog).toBeTruthy();
  });
});
