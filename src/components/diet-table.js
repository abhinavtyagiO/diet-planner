import {
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Typography,
} from "@mui/material";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import React from "react";
import "./styles.css";

const DietTable = (props) => {
  const days = ["M", "T", "W", "T", "F", "S", "S"];

  return (
    <div className="diet-table-container">
      <div>
        <Typography variant="h4">Breakfast</Typography>

        <List dense>
          {props.breakfastItems.map((item, id) => (
            <ListItem
              secondaryAction={
                <IconButton
                  onClick={() =>
                    props.swapItem({
                      items: props.breakfastItems,
                      id,
                      itemNumber: 1,
                    })
                  }
                  edge="end"
                  aria-label="delete"
                >
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
      <div>
        <Typography variant="h4">Lunch</Typography>

        <List dense>
          {props.lunchItems.map((item, id) => (
            <ListItem
              secondaryAction={
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() =>
                    props.swapItem({
                      items: props.lunchItems,
                      id,
                      itemNumber: 2,
                    })
                  }
                >
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
      <div>
        <Typography variant="h4">Dinner</Typography>

        <List dense>
          {props.dinnerItems.map((item, id) => (
            <ListItem
              secondaryAction={
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() =>
                    props.swapItem({
                      items: props.dinnerItems,
                      id,
                      itemNumber: 3,
                    })
                  }
                >
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
    </div>
  );
};

export default DietTable;
