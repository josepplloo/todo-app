import createCheckBox from './components/createCheckBox';
import createEditableLabel from './components/createEditableLabel';
import createCloseButton from './components/createCloseButton';
import './todoItem.scss';

function createTodoItem(
  { itemName, itemStatus } = { itemName: '', itemStatus: false },
  index = 0,
) {
  const todoElement = document.createElement('li');
  todoElement.setAttribute('data-key', index);
  todoElement.appendChild(createCheckBox(itemStatus));
  todoElement.appendChild(createEditableLabel(itemName));
  todoElement.appendChild(createCloseButton());
  todoElement.className = 'todo-item';
  return todoElement;
}

export default createTodoItem;
