import constants from './constants';
import ceateTodoItem from '../TodoItem/createTodoItem';

import datamanager from '../../data';

import './itemList.scss';

function createitemList(itemList = datamanager.get()) {
  const itemListElement = document.createElement('UL');
  itemListElement.setAttribute('label', constants.altText);
  itemListElement.className = 'app-item-list';
  itemList.forEach((item) => itemListElement.appendChild(ceateTodoItem(item)));
  return itemListElement;
}

export default createitemList;
