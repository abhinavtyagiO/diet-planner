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
    <div className="big-container">
      <div className="diet-table-container">
        <div className="table-list">
          <Typography id variant="h4">
            Breakfast
          </Typography>

          <List>
            {props.breakfastItems.map((item, id) => (
              <ListItem
                secondaryAction={
                  <IconButton
                    id="swap-btn"
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
        <div className="table-list">
          <Typography variant="h4">Lunch</Typography>

          <List>
            {props.lunchItems.map((item, id) => (
              <ListItem
                secondaryAction={
                  <IconButton
                    id="swap-btn"
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
        <div className="table-list">
          <Typography variant="h4">Dinner</Typography>

          <List>
            {props.dinnerItems.map((item, id) => (
              <ListItem
                secondaryAction={
                  <IconButton
                    edge="end"
                    id="swap-btn"
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
    </div>
  );
};

export default DietTable;
