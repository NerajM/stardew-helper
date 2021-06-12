import React from "react";
import { render, screen } from "@testing-library/react";
import { MaterialsView } from "../Views/MaterialsView";

describe("Materials View", () => {
  const mockMaterialList = [
    {
      name: "Wood",
      quantity: 10,
      img: "https://stardewvalleywiki.com/mediawiki/images/d/df/Wood.png",
    },
    {
      name: "Hardwood",
      quantity: 0,
      img: "https://stardewvalleywiki.com/mediawiki/images/e/ed/Hardwood.png",
    },
  ];
  it("renders material image", () => {
    render(<MaterialsView materialList={mockMaterialList} />);
    const woodImage = screen.getByAltText("Wood");
    expect(woodImage).toBeTruthy();
    const hardwoodImage = screen.getByAltText("Hardwood");
    expect(hardwoodImage).toBeTruthy();
  });
  it("renders material quantity", () => {
    render(<MaterialsView materialList={mockMaterialList} />);
    const woodQuantity = screen.getByText("10");
    expect(woodQuantity).toBeTruthy();
    const hardwoodQuantity = screen.getByText("0");
    expect(hardwoodQuantity).toBeTruthy();
  });
});
