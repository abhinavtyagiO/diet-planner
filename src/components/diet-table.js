import {
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
} from "@mui/material";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import React from "react";
import "./styles.css";

const DietTable = (props) => {
  const days = ["M", "T", "W", "T", "F", "S", "S"];

  const randomBreakfastItems = props.breakfastItems
    .sort(() => 0.5 - Math.random())
    .slice(0, 7);
  const randomLunchItems = props.lunchItems
    .sort(() => 0.5 - Math.random())
    .slice(0, 7);
  const randomDinnerItems = props.dinnerItems
    .sort(() => 0.5 - Math.random())
    .slice(0, 7);

  return (
    <div className="diet-table-container">
      <List dense>
        {randomBreakfastItems.map((item, id) => (
          <ListItem
            secondaryAction={
              <IconButton edge="end" aria-label="delete">
                <SwapVertIcon />
              </IconButton>
            }
          >
            <ListItemAvatar>
              <Avatar>{days[id]}</Avatar>
            </ListItemAvatar>
            <ListItemText primary={item} />
          </ListItem>
        ))}
      </List>
      <List dense>
        {randomLunchItems.map((item, id) => (
          <ListItem
            secondaryAction={
              <IconButton edge="end" aria-label="delete">
                <SwapVertIcon />
              </IconButton>
            }
          >
            <ListItemAvatar>
              <Avatar>{days[id]}</Avatar>
            </ListItemAvatar>
            <ListItemText primary={item} />
          </ListItem>
        ))}
      </List>
      <List dense>
        {randomDinnerItems.map((item, id) => (
          <ListItem
            secondaryAction={
              <IconButton edge="end" aria-label="delete">
                <SwapVertIcon />
              </IconButton>
            }
          >
            <ListItemAvatar>
              <Avatar>{days[id]}</Avatar>
            </ListItemAvatar>
            <ListItemText primary={item} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default DietTable;
