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
  const index = useRef(1);
  const todo = useRef();
  const [items, setItems] = useState([]);

  const isTodoExisting = useCallback(
    (newTodo) =>
      items
        .map((item) => item.description)
        .some((description) => description === newTodo),
    [items]
  );

  const createNewItem = useCallback(
    (newTodo) => {
      const newItem = {
        id: index.current,
        description: newTodo,
        status: "pending",
      };
      index.current = index.current + 1;
      return newItem;
    },
    [index]
  );

  const addItem = useCallback(() => {
    const newTodo = todo.current.value;
    if (!isTodoExisting(newTodo)) {
      setItems([...items, createNewItem(newTodo)]);
    }
  }, [todo, isTodoExisting, setItems, createNewItem]);


  const removeItemHandler = (id) => removeItemHOF(id);

  const removeItemHOF = useCallback(
    id => () => setItems(items.filter((item) => item.id !== id)),
    [setItems, items]
  );

  return (
    <>
      <TextField
        placeholder="Enter a Todo ..."
        style={{ width: 1800 }}
        inputRef={todo}
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
                <IconButton onClick={removeItemHandler(id)}>
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
