import constants from './constants';
import ceateTodoItem from '../TodoItem/createTodoItem';
import createFooter from '../Footer/createFooter';

import datamanager from '../../data';

import './itemList.scss';

function createitemList(itemList = datamanager.get()) {
  const itemListElement = document.createElement('UL');
  itemListElement.setAttribute('label', constants.altText);
  itemListElement.className = 'app-item-list';
  itemList.forEach((item) => itemListElement.appendChild(ceateTodoItem(item)));
  itemListElement.appendChild(createFooter());
  return itemListElement;
}

export default createitemList;
