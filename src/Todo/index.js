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
import React, { useRef, useState } from "react";

export default function Todo() {
  const index = useRef(1);
  const todo = useRef();
  const [items, setItems] = useState([]);

  const isTodoExisting = (newTodo) =>
    items
      .map((item) => item.description)
      .some((description) => description === newTodo);

  const addItem = () => {
    const newTodo = todo.current.value;
    if (!isTodoExisting(newTodo)) {
      setItems([...items, createNewItem(newTodo)]);
    }
  };

  const createNewItem = (newTodo) => {
    const newItem = {
      id: index.current,
      description: newTodo,
      status: "pending",
    };
    index.current = index.current + 1;
    return newItem;
  };

  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

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
