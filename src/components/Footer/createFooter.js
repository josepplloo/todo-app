import datamanager from '../../data';

import './footer.scss';

function createFooter() {
  const footerElement = document.createElement('div');
  const summary = document.createElement('span');
  summary.innerHTML = `${datamanager.filterComplete().length} items left`;
  footerElement.appendChild(summary);
  footerElement.className = 'footer';

  return footerElement;
}

export default createFooter;
