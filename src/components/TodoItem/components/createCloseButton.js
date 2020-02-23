import './closeButton.scss';
import datamanager from '../../../data';


function handleClick(e, itemID) {
  e.preventDefault();
  datamanager.delete(itemID);
  datamanager.publish();
}

function createCloseButton(itemID) {
  const closeElement = document.createElement('button');
  closeElement.setAttribute('type', 'button');
  closeElement.onclick = (e) => handleClick(e, itemID);
  closeElement.className = 'close-button';

  const checkmark = document.createElement('img');
  checkmark.setAttribute('src', './assets/close.svg');
  closeElement.appendChild(checkmark);
  return closeElement;
}

export default createCloseButton;
