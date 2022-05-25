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
  DialogContentText,
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
    setBreakfastItems(
      breakfastItems.sort(() => 0.5 - Math.random()).slice(0, 7)
    );
    setLunchItems(lunchItems.sort(() => 0.5 - Math.random()).slice(0, 7));
    setDinnerItems(dinnerItems.sort(() => 0.5 - Math.random()).slice(0, 7));
    setShowTable(true);
  };

  const swapItem = (props) => {
    var tempArr = [...props.items];
    var randomId = Math.floor(Math.random() * 4);
    var temp = tempArr[props.id];
    tempArr[props.id] = tempArr[randomId];
    tempArr[randomId] = temp;
    switch (props.itemNumber) {
      case 1:
        setBreakfastItems([...tempArr]);
        break;
      case 2:
        setLunchItems([...tempArr]);
        break;
      case 3:
        setDinnerItems([...tempArr]);
        break;
    }
  };

  console.log(breakfastItems, lunchItems, dinnerItems);

  return (
    <div className="App">
      <Dialog open={open} maxWidth="lg" fullWidth>
        <DialogTitle>Select Food Items</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Select upto 10 items of each type.
          </DialogContentText>

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
          <Button
            disabled={
              breakfastItems.length < 10 ||
              lunchItems.length < 10 ||
              dinnerItems.length < 10
            }
            className="modal-submit-btn"
            variant="contained"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
      {showTable && (
        <DietTable
          breakfastItems={breakfastItems}
          lunchItems={lunchItems}
          dinnerItems={dinnerItems}
          swapItem={swapItem}
        />
      )}
    </div>
  );
};

export default App;
