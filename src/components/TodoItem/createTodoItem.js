function createTodoItem({ itemName, itemStatus } = { itemName: '', itemStatus: false }, index = 0) {
  const todoElement = document.createElement('li');
  todoElement.setAttribute('data-key', index);
  todoElement.innerHTML = `${itemStatus} ${itemName}`;
  return todoElement;
}

export default createTodoItem;
