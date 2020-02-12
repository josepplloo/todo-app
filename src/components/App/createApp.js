import createTitle from '../Title/createTitle';
import createInput from '../Input/createInput';
import './app.scss';


function createApp(node) {
  const titleElement = createTitle();
  const mainImputElement = createInput();
  node.appendChild(titleElement);
  node.appendChild(mainImputElement);
}

export default createApp;
