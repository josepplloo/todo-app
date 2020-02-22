import createToggleButton from './components/createToggleButton';
import createEditableLabel from './components/createEditableLabel';
import createCloseButton from './components/createCloseButton';
import generateID from '../../utils';
import datamanager from '../../data';

import './todoItem.scss';

function createTodoItem(
  { itemID, itemName, itemStatus } = { itemID: generateID(), itemName: '', itemStatus: false },
) {
  const todoElement = document.createElement('li');
  todoElement.setAttribute('data-key', itemID);
  todoElement.appendChild(createToggleButton(itemStatus));
  todoElement.appendChild(createEditableLabel(itemName));
  function handleCloseButton(e) {
    e.preventDefault();
    datamanager.delete(itemID); datamanager.publish(); console.log(itemID, datamanager.get());
  }
  todoElement.appendChild(createCloseButton(handleCloseButton));
  todoElement.className = 'todoitem';
  return todoElement;
}

export default createTodoItem;
