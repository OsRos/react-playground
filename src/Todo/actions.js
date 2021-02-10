import { ADD_ITEM, REMOVE_ITEM } from "./actionTypes";

function addItemAction(newTodo) {
  return { type: ADD_ITEM, payload: { newTodo } };
}
function removeItemAction(id) {
  return { type: REMOVE_ITEM, payload: { id } };
}
