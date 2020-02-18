import constants from './constants';
import './input.scss';

function createInput() {
  const inputElement = document.createElement('input');
  inputElement.setAttribute('label', constants.altText);
  inputElement.setAttribute('placeholder', constants.placeholderText);
  inputElement.className = 'app-input';

  return inputElement;
}

export default createInput;
