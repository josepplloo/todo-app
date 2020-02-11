import createTitle from '../Title/createTitle';

function createApp(node) {
  const titleElement = createTitle();
  node.appendChild(titleElement);
}

export default createApp;
