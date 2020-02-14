function createTodoItem({ itemName, itemStatus }) {
  const todoElement = document.createElement('div');
  todoElement.innerHTML = `${itemStatus} ${itemName}`;
  return todoElement;
}

export default createTodoItem;
