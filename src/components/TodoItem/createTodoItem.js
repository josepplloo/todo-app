import createToggleButton from './components/createToggleButton';
import createEditableLabel from './components/createEditableLabel';
import createCloseButton from './components/createCloseButton';
import generateID from '../../utils';

import './todoItem.scss';

function createTodoItem(
  { itemID, itemName, itemStatus } = { itemID: generateID(), itemName: '', itemStatus: false },
) {
  const todoElement = document.createElement('li');
  todoElement.setAttribute('data-key', itemID);
  todoElement.appendChild(createToggleButton(itemStatus, itemID));
  todoElement.appendChild(createEditableLabel(itemName));
  todoElement.appendChild(createCloseButton(itemID));
  todoElement.className = 'todoitem';
  return todoElement;
}

export default createTodoItem;
