import React, { useState } from "react";
import data from "../pages/inventory.json";
import List from "./List.js";



  function Inventory() {
  const [list, setList] = useState(data);

  return (
    <div className="App">
      <List list={list} />
    </div>
  );
}

export default Inventory;