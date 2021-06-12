import React, { useState } from "react";
import { makeStyles, Tooltip, Fade, Button } from "@material-ui/core";
import { ToggleButton } from "@material-ui/lab";
import { MaterialsView } from "./MaterialsView";

const craftItems = require("../Data/craftingItems.json");
const materialData = require("../Data/materialList.json");

const recipesViewStyles = makeStyles({
  craftingItemContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FFD789",
    borderStyle: "ridge",
    borderWidth: "10px",
    borderColor: "#E27A3E",
    borderRadius: "10px",
    marginTop: "10px",
  },
  craftinItemImage: {
    margin: "2.5px 5px",
  },
  craftingItemButton: {
    border: "none",
  },
  selectionButton: {
    backgroundColor: "#FFD789",
    borderStyle: "ridge",
    borderWidth: "10px",
    borderColor: "#E27A3E",
    borderRadius: "10px",
    fontFamily: "Stardew",
    fontSize: "15pt",
    color: "#872C2C",
    "&:hover": {
      backgroundColor: "#E0BE7A",
    },
    margin: "0px 5px",
  },
  buttonGroup: {
    display: "flex",
    justifyContent: "center",
    margin: "10px",
  },
});

/**
 * increaseMaterialQuantities increases quantities of materials based on matching ingredient in recipe
 * @param {Array.<Object>} materialList Array of materials and their quantities
 * @param {Array.<Object>} recipe Array of ingredients and their quantities
 * @return {Array.<Object>} array of materials with updated quantities
 */
const increaseMaterialQuantities = (materialList, recipe) => {
  recipe.forEach((ingredient) => {
    const { name, quantity } = ingredient;
    materialList[
      materialList.findIndex((material) => material.name === name)
    ].quantity += quantity;
  });
  return materialData;
};

/**
 * decreaseMaterialQuantities decreases quantities of materials based on matching ingredient in recipe
 * @param {Array.<Object>} materialList Array of materials and their quantities
 * @param {Array.<Object>} recipe Array of ingredients and their quantities
 * @return {Array.<Object>} array of materials with updated quantities
 */
const decreaseMaterialQuantities = (materialList, recipe) => {
  recipe.forEach((ingredient) => {
    const { name, quantity } = ingredient;
    materialList[
      materialList.findIndex((material) => material.name === name)
    ].quantity -= quantity;
  });
  return materialData;
};

/**
 * clearMaterialQuantities resets all material quantities to zero
 * @param {Array.<Object>} materialList Array of materials and their quantities
 * @return {Array.<Object>} array of materials with all quantities as zero
 */
const clearMaterialQuantities = (materialList) => {
  materialList.forEach((material) => (material.quantity = 0));
  return [...materialList];
};

/**
 * addToSelectedItems adds the selected craft item to the list of previously selected items
 * @param {Array.<String>} selectedItems Array of the craft items selected by the user
 * @param {String} name Name of the craft item to be added
 * @return {Array.<String>} updated selected craft items
 */
const addToSelectedItems = (selectedItems, name) => {
  return [...selectedItems, name];
};

/**
 * removeFromSelectedItems removes the selected craft item from the list of selected items
 * @param {Array.<String>} selectedItems Array of the craft items selected by the user
 * @param {String} name Name of the craft item to be removed
 * @return {Array.<String>} updated selected craft items
 */
const removeFromSelectedItems = (selectedItems, name) => {
  return selectedItems.filter((selectedItem) => selectedItem !== name);
};

export const BodyView = () => {
  const classes = recipesViewStyles({});
  const [materialList, setMaterialList] = useState(materialData);
  const [selectedItems, setSelectedItems] = useState([]);

  return (
    <>
      <div className={classes.craftingItemContainer}>
        {craftItems.map((craftItem) => {
          const { name, recipe, img } = craftItem;
          return (
            <Tooltip
              title={
                <>
                  <b>{name}</b>
                  {recipe.map((ingredient) => (
                    <p>
                      {ingredient.name}: {ingredient.quantity}
                    </p>
                  ))}
                </>
              }
              arrow
              TransitionComponent={Fade}
              key={name}
            >
              <ToggleButton
                className={classes.craftingItemButton}
                value={name}
                onClick={() => {
                  if (selectedItems.includes(name)) {
                    setMaterialList(
                      decreaseMaterialQuantities([...materialList], recipe)
                    );
                    setSelectedItems(
                      removeFromSelectedItems([...selectedItems], name)
                    );
                  } else {
                    setMaterialList(
                      increaseMaterialQuantities([...materialList], recipe)
                    );
                    setSelectedItems(
                      addToSelectedItems([...selectedItems], name)
                    );
                  }
                }}
                selected={selectedItems.includes(name)}
              >
                <img
                  src={img}
                  alt={name}
                  className={classes.craftingItemImage}
                ></img>
              </ToggleButton>
            </Tooltip>
          );
        })}
      </div>
      <div className={classes.buttonGroup}>
        <Button
          className={classes.selectionButton}
          onClick={() => {
            const test = [];
            craftItems.forEach((craftItem) => {
              const { name, recipe } = craftItem;
              if (!selectedItems.includes(name)) {
                setMaterialList(
                  increaseMaterialQuantities([...materialList], recipe)
                );
              }
              test.push(name);
            });
            setSelectedItems(test);
          }}
        >
          Select All
        </Button>
        <Button
          className={classes.selectionButton}
          onClick={() => {
            setMaterialList(clearMaterialQuantities(materialList));
            setSelectedItems([]);
          }}
        >
          Clear Selections
        </Button>
      </div>
      <MaterialsView materialList={materialList} />
    </>
  );
};
