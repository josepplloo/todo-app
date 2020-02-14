import constants from './constants';
import './itemList.scss';
import itemData from '../../data/data';
import ceateTodoItem from '../TodoItem/createTodoItem';

function createitemList() {
  const itemListElement = document.createElement('UL');
  itemListElement.setAttribute('label', constants.altText);
  itemListElement.className = 'app-item-list';
  itemListElement.innerHTML = itemData.map((item, index) => `<li key=${index}>${ceateTodoItem(item)}</li>`);
  return itemListElement;
}

export default createitemList;
