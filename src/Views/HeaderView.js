import React, { useState } from "react";
import { Button, Dialog, makeStyles } from "@material-ui/core";
import titleImage from "../Assets/titleImage.png";

const headerStyles = makeStyles({
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
    margin: "0px 5px",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
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
  dialogText: {
    fontFamily: "Stardew",
    fontSize: "20pt",
    color: "#872C2C",
    margin: "2.5px 5px",
  },
});

export const HeaderView = () => {
  const [showCredits, setShowCredits] = useState(false);
  const [showInstructions, setShowInstructions] = useState(false);

  const classes = headerStyles({});
  return (
    <>
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
      <Dialog
        open={showInstructions}
        onClose={() => {
          setShowInstructions(false);
        }}
        classes={{ paper: classes.dialogPaper }}
        aria-label="how-to-use-dialog"
      >
        <p className={classes.dialogText}>
          This website was made to help players with the Craft Master
          Achievement in Stardew Valley
        </p>
        <p className={classes.dialogText}>
          Items can be selected and de-selected by clicking on them
        </p>
        <p className={classes.dialogText}>
          The material count is updated to reflect the amount of each material
          required to craft the selected items
        </p>
      </Dialog>
      <Dialog
        open={showCredits}
        onClose={() => {
          setShowCredits(false);
        }}
        classes={{ paper: classes.dialogPaper }}
        aria-label="credits-dialog"
      >
        <p className={classes.dialogText}>
          This website was made by NerajM, and the source code can be found on{" "}
          <a href="https://www.github.com/NerajM/stardew-helper">Github</a>
        </p>
        <p className={classes.dialogText}>
          <a href="https://www.stardewvalley.net/">Stardew Valley</a> is
          developed by ConcernedApe, who holds copyright on all game assets
        </p>
        <p className={classes.dialogText}>
          All item data, recipes and images sourced from the{" "}
          <a href="https://stardewvalleywiki.com/Stardew_Valley_Wiki">
            Stardew Wiki
          </a>
        </p>
        <p className={classes.dialogText}>
          Title Banner sourced from the{" "}
          <a href="https://www.kdau.com/scrollish/">Stardew Scroll Generator</a>
        </p>
        <p className={classes.dialogText}>
          Font sourced from{" "}
          <a href="https://www.reddit.com/r/StardewValley/comments/4dtgp7/by_popular_request_a_stardew_valley_font_for_your/">
            this Reddit post
          </a>
        </p>
      </Dialog>
    </>
  );
};
