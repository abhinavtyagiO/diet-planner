import React, { useState } from "react";
import SelectItems from "./components/select-items";
import DietTable from "./components/diet-table";
import {
  breakFastItemsList,
  lunchItemsList,
  dinnerItemsList,
} from "./constants";
import "./App.css";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

const App = () => {
  const [breakfastItems, setBreakfastItems] = useState([]);
  const [lunchItems, setLunchItems] = useState([]);
  const [dinnerItems, setDinnerItems] = useState([]);
  const [open, setOpen] = useState(true);
  const [showTable, setShowTable] = useState(false);

  const handleSubmit = () => {
    setOpen(false);
    setShowTable(true);
  };

  console.log(breakfastItems, lunchItems, dinnerItems);

  return (
    <div className="App">
      <Dialog open={open} maxWidth="lg" fullWidth>
        <DialogTitle>Select Food Items</DialogTitle>
        <DialogContent>
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
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleSubmit}>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
      {showTable && (
        <DietTable
          breakfastItems={breakfastItems}
          lunchItems={lunchItems}
          dinnerItems={dinnerItems}
        />
      )}
    </div>
  );
};

export default App;
