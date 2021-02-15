import {
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  TextField
} from "@material-ui/core";
import {
  Assignment,
  AssignmentTurnedIn,
  Delete,
  PostAdd
} from "@material-ui/icons";
import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItemAction as addItem, removeItemAction as removeItem } from "./actions";
import itemsSelector from "./selectors";

function Todo() {
  const todo = useRef();
  const items = useSelector(itemsSelector)
  const dispatch = useDispatch()

  return (
    <>
      <TextField
        placeholder="Enter a Todo ..."
        style={{ width: 1800 }}
        inputRef={todo}
      ></TextField>
      <IconButton onClick={() => dispatch(addItem(todo.current.value))}>
        <PostAdd></PostAdd>
      </IconButton>
      <List>
        {items.map(({ id, description, status }) => {
          return (
            <ListItem key={id}>
              <ListItemIcon>
                {status === "pending" ? (
                  <Assignment></Assignment>
                ) : (
                  <AssignmentTurnedIn></AssignmentTurnedIn>
                )}
              </ListItemIcon>
              <ListItemText primary={description}></ListItemText>
              <ListItemSecondaryAction>
                <IconButton onClick={() => dispatch(removeItem(id))}>
                  <Delete></Delete>
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          );
        })}
      </List>
    </>
  );
}

export default Todo;
