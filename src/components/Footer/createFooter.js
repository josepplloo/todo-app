import datamanager from '../../data';

import './footer.scss';

function handleActiveButton() {
  datamanager.publish(datamanager.filterComplete());
}

function handleAllButton() {
  datamanager.publish();
}


function handleCompleteButtonButton() {
  datamanager.publish(datamanager.filterUncomplete());
}

function createFooter() {
  const footerElement = document.createElement('div');
  const summary = document.createElement('span');
  summary.innerHTML = `${datamanager.filterComplete().length} items left`;

  const allButton = document.createElement('button');
  allButton.innerHTML = 'All';
  allButton.onclick = () => handleAllButton();

  const activeButton = document.createElement('button');
  activeButton.innerHTML = 'Active';
  activeButton.onclick = () => handleActiveButton();

  const completeButton = document.createElement('button');
  completeButton.innerHTML = 'Complete';
  completeButton.onclick = () => handleCompleteButtonButton();

  footerElement.appendChild(summary);
  footerElement.appendChild(allButton);
  footerElement.appendChild(activeButton);
  footerElement.appendChild(completeButton);


  footerElement.className = 'footer';

  return footerElement;
}

export default createFooter;
