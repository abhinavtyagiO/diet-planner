import React, { useState } from "react";
import {
  Chip,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";
import { Box } from "@mui/system";

const SelectItems = (props) => {
  const [open, setOpen] = useState(false);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    props.setItems(typeof value === "string" ? value.split(",") : value);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  console.log(open);

  return (
    <div className="form-container" >
      <FormControl sx={{ m: 1, width: "60%" }}>
        <InputLabel>Select Items</InputLabel>
        <Select
          open={open}
          onClick={handleOpen}
          onClose={handleClose}
          name={`select-item${props.id}`}
          id={`select-item${props.id}`}
          fullWidth
          multiple
          value={props.items}
          onChange={handleChange}
          input={<OutlinedInput label="Select Items" />}
          renderValue={(selected) => (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          // MenuProps={MenuProps}
        >
          {props.itemsList.map((item, id) => (
            <MenuItem key={id} id={`menu-item${props.id}${id}`} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectItems;
