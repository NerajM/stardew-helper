import React from "react";
import { Tooltip, Fade, makeStyles } from "@material-ui/core";

const materialViewStyles = makeStyles({
  materialViewContainer: {
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
  materialImage: {
    margin: "2.5px 5px",
  },
  materialText: {
    fontFamily: "Stardew",
    fontSize: "15pt",
    color: "#872C2C",
  },
  materialGroup: {
    margin: "2.5px 5px",
    display: "flex",
    alignItems: "center",
  },
});

export const MaterialsView = ({ materialList }) => {
  const classes = materialViewStyles({});
  return (
    <div className={classes.materialViewContainer}>
      {materialList.map((material) => (
        <Tooltip
          title={<b>{material.name}</b>}
          arrow
          TransitionComponent={Fade}
          key={material.name}
        >
          <div className={classes.materialGroup}>
            <img
              src={material.img}
              alt={material.name}
              className={classes.materialImage}
            ></img>
            <p className={classes.materialText}>{material.quantity}</p>
          </div>
        </Tooltip>
      ))}
    </div>
  );
};
