import createTitle from '../Title/createTitle';
import createInput from '../Input/createInput';
import createItemList from '../ItemList/createItemList';

import './app.scss';

function createApp(node) {
  const titleElement = createTitle();
  const mainImputElement = createInput();
  const itemListElement = createItemList();
  node.appendChild(titleElement);
  node.appendChild(mainImputElement);
  node.appendChild(itemListElement);
}

export default createApp;
