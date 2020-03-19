import './toggleButton.scss';
import datamanager from '../../../data';

function handleClick(e, itemID) {
  e.preventDefault();
  datamanager.changeStatus(itemID);
  datamanager.publish();
}

function createCheckBox(status = false, itemID) {
  const toggleElement = document.createElement('button');
  toggleElement.setAttribute('type', 'button');
  toggleElement.onclick = (e) => handleClick(e, itemID);

  const checkmark = document.createElement('img');
  checkmark.setAttribute('src', './assets/checkmark.svg');

  if (status) toggleElement.appendChild(checkmark);

  toggleElement.className = 'toggle-button';
  return toggleElement;
}

export default createCheckBox;
