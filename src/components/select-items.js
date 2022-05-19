import {
  Chip,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const SelectItems = (props) => {
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    props.setItems(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel>Select Items</InputLabel>
        <Select
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
          //   MenuProps={MenuProps}
        >
          {props.itemsList.map((item, id) => (
            <MenuItem key={id} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectItems;
