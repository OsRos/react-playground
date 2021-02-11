import { ADD_ITEM, REMOVE_ITEM } from "./actionTypes";

export function addItemAction(newTodo) {
  return { type: ADD_ITEM, payload: { newTodo } };
}
export function removeItemAction(id) {
  return { type: REMOVE_ITEM, payload: { id } };
}
