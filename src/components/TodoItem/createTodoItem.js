import createToggleButton from './components/createToggleButton';
import createEditableLabel from './components/createEditableLabel';
import './todoItem.scss';

function createTodoItem({ itemName, itemStatus } = { itemName: '', itemStatus: false }, index = 0) {
  const todoElement = document.createElement('li');
  todoElement.setAttribute('data-key', index);
  todoElement.appendChild(createToggleButton(itemStatus));
  todoElement.appendChild(createEditableLabel(itemName));
  todoElement.className = 'todoitem';
  return todoElement;
}

export default createTodoItem;
