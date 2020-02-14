import constants from './constants';
import './itemList.scss';
import itemData from '../../data/data';

function createitemList() {
  const itemListElement = document.createElement('UL');
  itemListElement.setAttribute('label', constants.altText);
  itemListElement.innerHTML = JSON.stringify(itemData);
  itemListElement.className = 'app-item-list';
  return itemListElement;
}

export default createitemList;
