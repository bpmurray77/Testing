//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import Inventory from "./component/InventoryBox";

//include your index.scss file into the bundle
import "../styles/index.css";

//import your own components
import Layout from "./layout";

//render your react application
ReactDOM.render(<Inventory />, document.querySelector("#app"));
