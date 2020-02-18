import './toggleButton.scss';

function createToggleButton(status = false) {
  const toggleElement = document.createElement('button');
  toggleElement.setAttribute('type', 'button');

  const checkmark = document.createElement('img');
  checkmark.setAttribute('src', './assets/checkmark.svg');

  if (status) toggleElement.appendChild(checkmark);

  toggleElement.className = 'toggle-button';
  return toggleElement;
}

export default createToggleButton;
