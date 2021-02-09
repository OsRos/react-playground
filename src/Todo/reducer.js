export const initialState = { items: [] };
let counter = 0;

function getNewCount() {
  return counter++;
}

function isTodoExisting(items, newTodo) {
  return items
    .map((item) => item.description)
    .some((description) => description === newTodo);
}

function createNewItem(newTodo, status = "pending") {
  const newItem = {
    id: getNewCount(),
    description: newTodo,
    status: status,
  };
  return newItem;
}

export function reducer({ items }, action) {
  switch (action.type) {
    case "addItem":
      const newTodo = action.payload.newTodo;
      if (!isTodoExisting(items, newTodo)) {
        return { items: [...items, createNewItem(newTodo)] };
      }
    case "removeItem":
      const id = action.payload.id;
      return { items: items.filter((item) => item.id !== id) };
    default:
      throw new Error("unsupported action");
  }
}
