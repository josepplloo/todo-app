import datamanager from '../../data';
import createFooterButton from './components/createFooterButton';

import './footer.scss';

const styles = {
  allButton: 'footer-button footer-button-disabled',
  activeButton: 'footer-button',
  completeButton: 'footer-button',
};

function handleActiveButton() {
  styles.activeButton = 'footer-button footer-button-disabled';
  styles.allButton = 'footer-button';
  styles.completeButton = 'footer-button';
  datamanager.publish(datamanager.filterComplete());
}

function handleAllButton() {
  styles.activeButton = 'footer-button';
  styles.allButton = 'footer-button footer-button-disabled';
  styles.completeButton = 'footer-button';
  datamanager.publish();
}

function handleCompleteButtonButton() {
  styles.activeButton = 'footer-button';
  styles.allButton = 'footer-button';
  styles.completeButton = 'footer-button footer-button-disabled';
  datamanager.publish(datamanager.filterUncomplete());
}

function createFooter() {
  const footerElement = document.createElement('div');
  const buttonsContainer = document.createElement('div');
  const summary = document.createElement('span');
  summary.innerHTML = `${datamanager.filterComplete().length} items left`;

  const allButton = createFooterButton({ callback: handleAllButton, name: 'All', style: styles.allButton });
  const activeButton = createFooterButton({ callback: handleActiveButton, name: 'Active', style: styles.activeButton });
  const completeButton = createFooterButton({ callback: handleCompleteButtonButton, name: 'Complete', style: styles.completeButton });
  // TODO: clear the data
  const clearButton = createFooterButton({ callback: handleCompleteButtonButton, name: 'Clear completed', style: 'footer-button' });

  footerElement.appendChild(summary);
  buttonsContainer.appendChild(allButton);
  buttonsContainer.appendChild(activeButton);
  buttonsContainer.appendChild(completeButton);
  footerElement.appendChild(buttonsContainer);
  footerElement.appendChild(clearButton);

  footerElement.className = 'footer';
  buttonsContainer.className = 'buttons-container';

  return footerElement;
}

export default createFooter;
