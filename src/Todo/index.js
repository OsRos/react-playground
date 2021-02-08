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
import React, { useCallback, useRef, useState } from "react";

export default function Todo() {
  const index = useRef(3);
  const todoEntered = useRef();
  let lastEntered = useRef();
  const [items, setItems] = useState([]);
  const addItem = useCallback(() => {
    console.log(todoEntered.current.value)
    console.log(lastEntered.current)
    if (todoEntered.current.value !== lastEntered.current) {
      setItems([...items, createNewItem()]);
    }
  });

  const createNewItem = useCallback(() => {
    const newItem = {
      id: index.current,
      description: todoEntered.current.value,
      status: "pending",
    };
    index.current = index.current + 1;
    lastEntered.current = todoEntered.current.value;
    console.log(`lastEntered ${lastEntered.current}`)

    return newItem;
  }, [todoEntered, index]);

  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <>
      <TextField
        placeholder="Enter a Todo ..."
        style={{ width: 1800 }}
        inputRef={todoEntered}
      ></TextField>
      <IconButton onClick={addItem}>
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
                  onClick={() => {
                    removeItem(id);
                  }}
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
