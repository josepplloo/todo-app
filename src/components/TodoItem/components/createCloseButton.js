import './closeButton.scss';

function createCloseButton(handleCloseButton) {
  const closeElement = document.createElement('button');
  closeElement.setAttribute('type', 'button');
  closeElement.onclick = handleCloseButton;
  const checkmark = document.createElement('img');
  checkmark.setAttribute('src', './assets/close.svg');
  closeElement.appendChild(checkmark);
  closeElement.className = 'close-button';
  return closeElement;
}

export default createCloseButton;
