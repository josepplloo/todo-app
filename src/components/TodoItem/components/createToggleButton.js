import './toggleButton.scss';

function createToggleButton(status = false) {
  const togleElement = document.createElement('button');
  togleElement.setAttribute('type', 'button');

  const checkmark = document.createElement('img');
  checkmark.setAttribute('src', './assets/checkmark.svg');

  if (status) togleElement.appendChild(checkmark);

  togleElement.className = 'toggle-button';
  return togleElement;
}

export default createToggleButton;
