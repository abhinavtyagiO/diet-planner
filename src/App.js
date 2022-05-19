import React, { useState } from "react";
import SelectItems from "./components/select-items";
import {
  breakFastItemsList,
  lunchItemsList,
  dinnerItemsList,
} from "./constants";
import "./App.css";

function App() {
  const [breakfastItems, setBreakfastItems] = useState([]);
  const [lunchItems, setLunchItems] = useState([]);
  const [dinnerItems, setDinnerItems] = useState([]);

  console.log(breakfastItems, lunchItems, dinnerItems);

  return (
    <div className="App">
      <SelectItems
        itemsList={breakFastItemsList}
        setItems={setBreakfastItems}
        items={breakfastItems}
      />
      <SelectItems
        itemsList={lunchItemsList}
        setItems={setLunchItems}
        items={lunchItems}
      />
      <SelectItems
        itemsList={dinnerItemsList}
        setItems={setDinnerItems}
        items={dinnerItems}
      />
    </div>
  );
}

export default App;
