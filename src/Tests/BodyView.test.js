import React from "react";
import { render, screen } from "@testing-library/react";

import {
  increaseMaterialQuantities,
  decreaseMaterialQuantities,
  removeFromSelectedItems,
  addToSelectedItems,
  clearMaterialQuantities,
  BodyView,
} from "../Views/BodyView";

describe("BodyView", () => {
  it("renders craft item images", () => {
    render(<BodyView />);
    const bombImage = screen.getByAltText("Bomb");
    expect(bombImage).toBeTruthy();
  });
});

describe("Test increaseMaterialQuantities", () => {
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
  const mockRecipe = [{ name: "Hardwood", quantity: 5 }];
  const expectedMaterialList = [
    {
      name: "Wood",
      quantity: 10,
      img: "https://stardewvalleywiki.com/mediawiki/images/d/df/Wood.png",
    },
    {
      name: "Hardwood",
      quantity: 5,
      img: "https://stardewvalleywiki.com/mediawiki/images/e/ed/Hardwood.png",
    },
  ];
  it("increase quantity of Hardwood Material", () => {
    expect(increaseMaterialQuantities(mockMaterialList, mockRecipe)).toEqual(
      expectedMaterialList
    );
  });
});

describe("Test decreaseMaterialQuantities", () => {
  const mockMaterialList = [
    {
      name: "Wood",
      quantity: 10,
      img: "https://stardewvalleywiki.com/mediawiki/images/d/df/Wood.png",
    },
    {
      name: "Hardwood",
      quantity: 5,
      img: "https://stardewvalleywiki.com/mediawiki/images/e/ed/Hardwood.png",
    },
  ];
  const mockRecipe = [{ name: "Hardwood", quantity: 5 }];
  const expectedMaterialList = [
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
  it("decrease quantity of Hardwood Material", () => {
    expect(decreaseMaterialQuantities(mockMaterialList, mockRecipe)).toEqual(
      expectedMaterialList
    );
  });
});

describe("Test clearMaterialQuantites", () => {
  const expectedMaterialList = [
    {
      name: "Wood",
      quantity: 0,
      img: "https://stardewvalleywiki.com/mediawiki/images/d/df/Wood.png",
    },
    {
      name: "Hardwood",
      quantity: 0,
      img: "https://stardewvalleywiki.com/mediawiki/images/e/ed/Hardwood.png",
    },
  ];
  it("setting all material quantities to zero", () => {
    const mockMaterialList = [
      {
        name: "Wood",
        quantity: 10,
        img: "https://stardewvalleywiki.com/mediawiki/images/d/df/Wood.png",
      },
      {
        name: "Hardwood",
        quantity: 15,
        img: "https://stardewvalleywiki.com/mediawiki/images/e/ed/Hardwood.png",
      },
    ];
    expect(clearMaterialQuantities(mockMaterialList)).toEqual(
      expectedMaterialList
    );
  });
  it("when all material quantities are already 0", () => {
    expect(clearMaterialQuantities(expectedMaterialList)).toEqual(
      expectedMaterialList
    );
  });
});

describe("Test removeFromSelectedItems", () => {
  it('removes "Cherry Bomb" item from crafting list only containing "Cherry Bomb"', () => {
    expect(removeFromSelectedItems(["Cherry Bomb"], "Cherry Bomb")).toEqual([]);
  });
  it('removes "Cherry Bomb" item from crafting list', () => {
    expect(
      removeFromSelectedItems(["Cherry Bomb", "Bomb"], "Cherry Bomb")
    ).toEqual(["Bomb"]);
  });
});

describe("Test addToSelectedItems", () => {
  it('adds "Cherry Bomb" item to empty crafting list', () => {
    expect(addToSelectedItems([], "Cherry Bomb")).toEqual(["Cherry Bomb"]);
  });
  it('adds "Cherry Bomb" item to non-empty crafting list', () => {
    expect(addToSelectedItems(["Bomb"], "Cherry Bomb")).toEqual([
      "Bomb",
      "Cherry Bomb",
    ]);
  });
});
