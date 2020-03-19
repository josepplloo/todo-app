import createTitle from '../Title/createTitle';
import createInput from '../Input/createInput';
import createItemList from '../ItemList/createItemList';
import datamanager from '../../data';

import './app.scss';

function createApp(node) {
  node.appendChild(createTitle());
  node.appendChild(createInput());
  node.appendChild(createItemList(datamanager.get()));
}

function ReloadList(data = datamanager.get()) {
  const node = document.querySelector('.app-item-list');
  node.remove();
  const parentNode = document.querySelector('#app');
  parentNode.appendChild(createItemList(data));
}

datamanager.subscribe(ReloadList);

export default createApp;
