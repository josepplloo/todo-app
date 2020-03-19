import './closeButton.scss';
import { CLOSE_ICON } from '../../../constants/paths';

function createCloseButton() {
  const closeElement = document.createElement('button');
  closeElement.setAttribute('type', 'button');

  const checkmark = document.createElement('img');
  checkmark.setAttribute('src', CLOSE_ICON);
  closeElement.appendChild(checkmark);
  closeElement.className = 'close-button';
  return closeElement;
}

export default createCloseButton;
