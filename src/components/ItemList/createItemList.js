import constants from './constants';
import './itemList.scss';
import itemData from '../../data/data';
import ceateTodoItem from '../TodoItem/createTodoItem';

function createitemList() {
  const itemListElement = document.createElement('UL');
  itemListElement.setAttribute('label', constants.altText);
  itemListElement.className = 'app-item-list';
  itemData.forEach((item, index) => itemListElement.appendChild(ceateTodoItem(item, index)));
  return itemListElement;
}

export default createitemList;
