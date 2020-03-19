import createCheckBox from './components/createCheckBox';
import createEditableLabel from './components/createEditableLabel';
import createCloseButton from './components/createCloseButton';
import generateID from '../../utils';

import './todoItem.scss';

function createTodoItem(
  { itemID, itemName, itemStatus } =
  { itemID: generateID(), itemName: '', itemStatus: false },
) {
  const todoElement = document.createElement('li');
  todoElement.setAttribute('data-key', itemID);
  todoElement.appendChild(createCheckBox(itemStatus, itemID));
  todoElement.appendChild(createEditableLabel(itemName, itemID));
  todoElement.appendChild(createCloseButton(itemID));
  todoElement.className = 'todo-item';
  return todoElement;
}

export default createTodoItem;
