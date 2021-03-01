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
import { isEmpty } from "lodash-es";
import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addItemAction as addItem,
  removeItemAction as removeItem,
} from "./actions";
import itemsSelector from "./selectors";
import {Link} from "react-router-dom"

function Todo({ match }) {
  const params = match.params;
  const todo = useRef();
  const items = useSelector(itemsSelector);
  const dispatch = useDispatch();

  const isMatchingParam = ({id}) =>  {
    console.log(`id:${id}`)
    console.log(`params.id:${params.id}`)
    const returnVal =  isEmpty(params.id)||params.id === id
    console.log(returnVal)
    return returnVal
  }
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
        {items.filter(isMatchingParam).map(({ id, description, status }) => {
          return (
            <ListItem key={id}>
              <ListItemIcon>
                {status === "pending" ? (
                  <Assignment></Assignment>
                ) : (
                  <AssignmentTurnedIn></AssignmentTurnedIn>
                )}
              </ListItemIcon>
              <Link to="/todo/2"><ListItemText primary={description}></ListItemText></Link>
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
