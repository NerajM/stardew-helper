import React from "react";
import ReactDOM from "react-dom";
import { BodyView } from "./Views/BodyView";
import { HeaderView } from "./Views/HeaderView";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <>
      <HeaderView />
      <BodyView />
    </>
  </React.StrictMode>,
  document.getElementById("root")
);
