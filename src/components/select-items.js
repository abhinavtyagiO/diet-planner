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
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      },
    },
  };

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    props.setItems(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <div>
      <FormControl fullWidth sx={{ m: 1 }}>
        <InputLabel>Select Items</InputLabel>
        <Select
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
          MenuProps={MenuProps}
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
