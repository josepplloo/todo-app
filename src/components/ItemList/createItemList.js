import constants from './constants';
import ceateTodoItem from '../TodoItem/createTodoItem';

import itemData from '../../data/data';

import './itemList.scss';

function createitemList() {
  const itemListElement = document.createElement('UL');
  itemListElement.setAttribute('label', constants.altText);
  itemListElement.className = 'app-item-list';
  itemData.forEach((item, index) => itemListElement.appendChild(ceateTodoItem(item, index)));
  return itemListElement;
}

export default createitemList;
