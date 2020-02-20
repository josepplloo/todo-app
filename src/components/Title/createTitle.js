import constants from './constants';

import './title.scss';

function createTitle() {
  const titleElement = document.createElement('h1');
  titleElement.setAttribute('label', constants.altText);
  titleElement.innerHTML = constants.titleText;
  titleElement.className = 'app-title';
  return titleElement;
}

export default createTitle;
