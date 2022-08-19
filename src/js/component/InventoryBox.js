import React, { useState } from "react";
import data from "../pages/inventory.json";
import List from "./List.js";
import Input from "./Input";




  function Inventory() {
  const [list, setList] = useState(data);

  const addTask = (userInput) => {
    let copy = [...List];
    copy = [...copy, { id:2, task: userInput, complete: false }];
    setList(copy);
  }

  return (
    <div className="App">
      <List list={list} />
      <Input addTask={addTask}/>
    </div>
  );
}

export default Inventory;