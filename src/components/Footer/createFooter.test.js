import createFoter from './createFooter';
import datamanager from '../../data';

it('should render a <div /> element', () => {
  const footerElement = createFoter();
  expect(footerElement.tagName).toBe('DIV');
});

it('should recive all the uncomplete elements', () => {
  expect(datamanager.filterComplete().length).toBe(3);
});
