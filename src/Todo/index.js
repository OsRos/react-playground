import {
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  TextField,
} from "@material-ui/core";
import {
  Assignment,
  AssignmentTurnedIn,
  Delete,
  PostAdd,
} from "@material-ui/icons";
import React, { useCallback, useReducer, useRef, useState } from "react";
import { connect } from "react-redux";
import reducer, { initialState } from "./reducer";
import { addItemAction, removeItemAction } from "./actions";

function Todo({todo:todoState, addItemAction: addItem, removeItemAction: removeItem }) {
  console.log("Todo ...")
  console.log(todoState)
  // const { addItemAction: addItem, removeItemAction: removeItem } = props
  const todo = useRef();
  const items = todoState.todo.items
  // const [{ items }, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <TextField
        placeholder="Enter a Todo ..."
        style={{ width: 1800 }}
        inputRef={todo}
      ></TextField>
      <IconButton onClick={() => addItem(todo.current.value)}>
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
                <IconButton onClick={() => removeItem(id)}>
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

export default connect(state => ({todo : state}), { addItemAction, removeItemAction })(Todo);
