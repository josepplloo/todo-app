import './closeButton.scss';

function createCloseButton() {
  const closeElement = document.createElement('button');
  closeElement.setAttribute('type', 'button');

  const checkmark = document.createElement('img');
  checkmark.setAttribute('src', './assets/close.svg');
  closeElement.appendChild(checkmark);
  closeElement.className = 'close-button';
  return closeElement;
}

export default createCloseButton;
