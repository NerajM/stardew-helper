import React, { useState } from "react";
import {
  makeStyles,
  Tooltip,
  Fade,
  Button,
  Dialog,
  DialogTitle,
} from "@material-ui/core";
import titleImage from "./Assets/titleImage.png";
import { ToggleButton } from "@material-ui/lab";

const craftingData = require("./craftingItems.json");
const materialData = require("./materialList.json");

const styles = makeStyles({
  itemContainer: {
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
  itemImage: {
    margin: "2.5px 5px",
  },
  materialImage: {
    margin: "2.5px 5px",
    display: "flex",
    alignItems: "center",
  },
  itemButton: {
    border: "none",
  },
  materialText: {
    fontFamily: "Stardew",
    fontSize: "15pt",
    color: "#872C2C",
  },
  dialogPaper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#FFD789",
    borderStyle: "ridge",
    borderWidth: "10px",
    borderColor: "#E27A3E",
    borderRadius: "10px",
    maxWidth: "1080px",
  },
  creditsText: {
    fontFamily: "Stardew",
    fontSize: "20pt",
    color: "#872C2C",
    margin: "2.5px 5px",
  },
  headerButton: {
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
    margin: "2.5px 5px",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

const addToMaterialList = (materialData, recipe) => {
  recipe.forEach((material) => {
    const name = material.material;
    materialData[
      materialData.findIndex((material) => material.name === name)
    ].quantity += material.quantity;
  });
  return materialData;
};

const removeFromMaterialList = (materialData, recipe) => {
  recipe.forEach((material) => {
    const name = material.material;
    materialData[
      materialData.findIndex((material) => material.name === name)
    ].quantity -= material.quantity;
  });
  return materialData;
};

const updateSelectedItems = (selectedItems, name) => {
  if (selectedItems.includes(name)) {
    return selectedItems.filter((selectedItem) => selectedItem !== name);
  } else {
    return [...selectedItems, name];
  }
};

export const App = () => {
  const classes = styles({});
  const [materialList, setMaterialList] = useState(materialData);
  const [selectedItems, setSelectedItems] = useState([]);
  const [showCredits, setShowCredits] = useState(false);
  const [showInstructions, setShowInstructions] = useState(false);

  return (
    <div>
      <div className={classes.header}>
        <img src={titleImage} alt="Stardew Valley Crafting Helper"></img>
        <div>
          <Button
            onClick={() => {
              setShowInstructions(true);
            }}
            className={classes.headerButton}
          >
            How to use
          </Button>
          <Button
            onClick={() => {
              setShowCredits(true);
            }}
            className={classes.headerButton}
          >
            Credits
          </Button>
        </div>
      </div>
      <div className={classes.itemContainer}>
        {craftingData.map((item) => (
          <Tooltip
            title={
              <>
                <b>{item.name}</b>
                {item.recipe.map((material) => (
                  <p className={classes.tooltipText}>
                    {material.material}: {material.quantity}
                  </p>
                ))}
              </>
            }
            className={classes.tooltipText}
            arrow
            TransitionComponent={Fade}
            key={item.name}
          >
            <ToggleButton
              className={classes.itemButton}
              value={item.name}
              onClick={() => {
                if (selectedItems.includes(item.name)) {
                  setMaterialList(
                    removeFromMaterialList([...materialList], item.recipe)
                  );
                } else {
                  setMaterialList(
                    addToMaterialList([...materialList], item.recipe)
                  );
                }
                setSelectedItems(
                  updateSelectedItems([...selectedItems], item.name)
                );
                console.log(selectedItems);
              }}
              selected={selectedItems.includes(item.name)}
            >
              <img
                src={item.img}
                alt={item.name}
                className={classes.itemImage}
              ></img>
            </ToggleButton>
          </Tooltip>
        ))}
      </div>
      <div className={classes.itemContainer}>
        {materialList.map((material) => (
          <Tooltip
            title={
              <>
                <b>{material.name}</b>
              </>
            }
            arrow
            TransitionComponent={Fade}
            key={material.name}
          >
            <div className={classes.materialImage}>
              <img
                src={material.img}
                alt={material.name}
                className={classes.itemImage}
              ></img>
              <p className={classes.materialText}>{material.quantity}</p>
            </div>
          </Tooltip>
        ))}
      </div>
      <Dialog
        open={showCredits}
        onClose={() => {
          setShowCredits(false);
        }}
        classes={{ paper: classes.dialogPaper }}
      >
        <p className={classes.creditsText}>
          This website was made by Neraj, and the source code can be found on{" "}
          <a href="https://www.github.com/NerajM/stardew-helper">Github</a>
        </p>
        <p className={classes.creditsText}>
          <a href="https://www.stardewvalley.net/">Stardew Valley</a> is
          developed by ConcernedApe, who holds copyright on all game assets
        </p>
        <p className={classes.creditsText}>
          All item data, recipes and images sourced from the{" "}
          <a href="https://stardewvalleywiki.com/Stardew_Valley_Wiki">
            Stardew Wiki
          </a>
        </p>
        <p className={classes.creditsText}>
          Title Banner sourced from the{" "}
          <a href="https://www.kdau.com/scrollish/">Stardew Scroll Generator</a>
        </p>
        <p className={classes.creditsText}>
          Font sourced from{" "}
          <a href="https://www.reddit.com/r/StardewValley/comments/4dtgp7/by_popular_request_a_stardew_valley_font_for_your/">
            this Reddit post
          </a>
        </p>
      </Dialog>
      <Dialog
        open={showInstructions}
        onClose={() => {
          setShowInstructions(false);
        }}
        classes={{ paper: classes.dialogPaper }}
      >
        <DialogTitle>How To Use</DialogTitle>
      </Dialog>
    </div>
  );
};
