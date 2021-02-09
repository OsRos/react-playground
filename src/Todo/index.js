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
import { reducer, initialState } from "./reducer";

export default function Todo() {
  const todo = useRef();
  const [{ items }, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <TextField
        placeholder="Enter a Todo ..."
        style={{ width: 1800 }}
        inputRef={todo}
      ></TextField>
      <IconButton
        onClick={() =>
          dispatch({
            type: "addItem",
            payload: { newTodo: todo.current.value },
          })
        }
      >
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
                <IconButton
                  onClick={() =>
                    dispatch({ type: "removeItem", payload: { id } })
                  }
                >
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
